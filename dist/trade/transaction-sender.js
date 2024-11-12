"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSender = void 0;
const web3_js_1 = require("@solana/web3.js");
const provider_1 = require("@coral-xyz/anchor/dist/cjs/provider");
const anchor_1 = require("@coral-xyz/anchor");
const DEFAULT_CONFIRM_OPTIONS = {
    skipPreflight: false,
    preflightCommitment: 'confirmed',
    commitment: 'confirmed',
};
class TransactionSender {
    constructor(transactionBuilder, param) {
        this.transactionBuilder = transactionBuilder;
        this.param = param;
    }
    async sendAndConfirm(confirmOptions = DEFAULT_CONFIRM_OPTIONS) {
        const tx = await this.transactionBuilder.getTransaction();
        const txResult = await this.send();
        await this.param.program.provider.connection.confirmTransaction({
            signature: txResult.signature,
            ...tx.blockhash,
        }, confirmOptions.commitment);
        return txResult;
    }
    async send(confirmOptions = DEFAULT_CONFIRM_OPTIONS) {
        const tx = await this.transactionBuilder.getTransaction();
        const signedTx = await this.sign(tx.transaction);
        const txResult = await this.param.program.provider.connection.sendTransaction(signedTx, confirmOptions);
        return {
            signature: txResult,
            transactionBlockhash: tx.blockhash,
        };
    }
    async simulate(commitment = 'confirmed') {
        const tx = await this.transactionBuilder.getTransaction();
        const signedTx = await this.sign(tx.transaction);
        return this.param.program.provider.simulate(signedTx, undefined, commitment);
    }
    async sign(tx) {
        if (this.param.trader instanceof web3_js_1.Keypair) {
            if (tx instanceof web3_js_1.VersionedTransaction) {
                tx.sign([this.param.trader]);
            }
            else {
                tx.sign(this.param.trader);
            }
            return tx;
        }
        else if (this.param.trader instanceof anchor_1.Wallet) {
            return this.param.trader.signTransaction(tx);
        }
        else {
            if (this.param.program.provider instanceof provider_1.AnchorProvider) {
                return this.param.program.provider.wallet.signTransaction(tx);
            }
            else {
                return tx;
            }
        }
    }
}
exports.TransactionSender = TransactionSender;
