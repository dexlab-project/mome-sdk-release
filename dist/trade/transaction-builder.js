"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionBuilder = void 0;
const web3_js_1 = require("@solana/web3.js");
const transaction_sender_1 = require("./transaction-sender");
const jito_1 = require("./tip/jito");
class TransactionBuilder {
    constructor(tradeBuilder, param) {
        this.tradeBuilder = tradeBuilder;
        this.param = param;
        this.computeUnitPriceIxs = [];
        this.connection = param.program.provider.connection;
        this.traderPublicKey = param.trader instanceof web3_js_1.PublicKey ? param.trader : param.trader.publicKey;
        this.token = param.token;
    }
    setComputeUnit(param) {
        const computeUnitLimit = param.computeUnitLimit ? web3_js_1.ComputeBudgetProgram.setComputeUnitLimit({
            units: param.computeUnitLimit,
        }) : null;
        const computeUnitPrice = param.computeUnitPrice ? web3_js_1.ComputeBudgetProgram.setComputeUnitPrice({
            microLamports: param.computeUnitPrice,
        }) : null;
        this.computeUnitPriceIxs = [computeUnitLimit, computeUnitPrice].filter((ix) => ix != null);
        return this;
    }
    setBundle(param) {
        this.bundleParam = param;
        return this;
    }
    transaction(config) {
        this.config = config;
        return new transaction_sender_1.TransactionSender(this, this.param);
    }
    async getLatestBlockhash(commitment) {
        return (await this.connection.getLatestBlockhash(commitment));
    }
    async getTransaction(config = {
        blockhashCommitment: 'confirmed',
    }) {
        const recentBlockhash = await this.getLatestBlockhash(config.blockhashCommitment || 'confirmed');
        const transactionMessageBody = {
            payerKey: this.traderPublicKey,
            recentBlockhash: recentBlockhash.blockhash,
            instructions: await this.getAllInstructions(),
        };
        const messageV0 = new web3_js_1.TransactionMessage(transactionMessageBody).compileToV0Message();
        return {
            transaction: new web3_js_1.VersionedTransaction(messageV0),
            blockhash: recentBlockhash,
        };
    }
    async getTradeInstructions() {
        return this.tradeBuilder.getTradeInstructions(this.token);
    }
    async getAllInstructions() {
        const tradeInstructions = await this.getTradeInstructions();
        const bundleIx = await this.getBundleIx();
        return [...this.computeUnitPriceIxs, bundleIx, ...tradeInstructions].filter((ix) => ix != null);
    }
    async getBundleIx() {
        if (this.bundleParam) {
            const bundleAccount = await (0, jito_1.getBundleAccount)();
            if (!bundleAccount) {
                console.warn('Bundle account not found. skip transaction bundle');
                return null;
            }
            return web3_js_1.SystemProgram.transfer({
                fromPubkey: this.traderPublicKey,
                toPubkey: new web3_js_1.PublicKey(bundleAccount),
                lamports: this.bundleParam?.lamports || 1000000,
            });
        }
    }
}
exports.TransactionBuilder = TransactionBuilder;
