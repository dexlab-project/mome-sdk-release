"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const program_1 = require("../program");
const util_1 = require("./util");
const trade_1 = require("../trade");
const decimal_js_1 = __importDefault(require("decimal.js"));
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const umi_bundle_defaults_1 = require("@metaplex-foundation/umi-bundle-defaults");
const axios_1 = __importDefault(require("axios"));
class Token {
    constructor(address, program) {
        this.program = program;
        this.pubkey = new web3_js_1.PublicKey(address);
    }
    async getInfo() {
        const curveAccount = await this.getCurveAccount();
        const metadata = await this.getMetadata();
        const uriMetadata = await this.getUriMetadata(metadata);
        if (!metadata) {
            throw new Error('Metadata not found');
        }
        return {
            address: this.pubkey.toString(),
            symbol: metadata.symbol,
            name: metadata.name,
            decimals: curveAccount.decimals,
            image: uriMetadata?.image,
            description: uriMetadata?.description,
            tags: uriMetadata?.tags,
            extensions: uriMetadata?.extensions,
            status: curveAccount.curveStatus,
        };
    }
    deriveCurveAccountPublicKey() {
        return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(program_1.CURVE_SEED), this.pubkey.toBuffer()], this.program.programId)[0];
    }
    async getCurveAccount(commitment) {
        const curveAccountKey = this.deriveCurveAccountPublicKey();
        const curveAccount = await this.program.account.curveAccount.fetch(curveAccountKey, commitment);
        if (curveAccount == null) {
            throw new Error('Curve account data not found');
        }
        return (0, util_1.convertRawCurveAccountNormal)(curveAccount);
    }
    async getCurrentPrice(commitment) {
        const curveAccount = await this.getCurveAccount(commitment);
        const vReserveSolAmount = (0, util_1.lamportsToSol)(curveAccount.vReserveSolAmount);
        const vReserveTokenAmount = (0, util_1.toUiVolume)(curveAccount.vReserveTokenAmount, curveAccount.decimals);
        let price;
        if (vReserveSolAmount.eq(0) || vReserveTokenAmount.eq(0)) {
            price = new decimal_js_1.default(0);
        }
        else {
            price = vReserveSolAmount.div(vReserveTokenAmount);
        }
        return price.toFixed(10);
    }
    beginTrade(wallet) {
        let trader;
        if (!wallet) {
            if (this.program.provider instanceof anchor_1.AnchorProvider) {
                trader = this.program.provider.wallet;
            }
            else {
                trader = this.program.provider.publicKey;
            }
        }
        else {
            trader = wallet;
        }
        if (!trader) {
            throw new Error('Trader is not set');
        }
        return new trade_1.TradeBuilder(this.program, this, trader);
    }
    async getMetadata() {
        const connection = this.program.provider.connection;
        const metadataPda = this.findTokenMetadataPda();
        const umi = (0, umi_bundle_defaults_1.createUmi)(connection);
        const rpcAccount = await umi.rpc.getAccount(metadataPda);
        if (rpcAccount && rpcAccount.exists) {
            return (0, mpl_token_metadata_1.deserializeMetadata)(rpcAccount);
        }
        else {
            return null;
        }
    }
    async getUriMetadata(metadata = null) {
        let targetMetadata = metadata || await this.getMetadata();
        if (!targetMetadata) {
            return null;
        }
        const response = await axios_1.default.get(targetMetadata.uri);
        if (response.status !== 200) {
            throw new Error(`Failed to fetch metadata from uri: ${targetMetadata.uri}`);
        }
        else {
            return response.data;
        }
    }
    findTokenMetadataPda() {
        return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('metadata', 'utf8'), util_1.TOKEN_METADATA_PROGRAM_ID.toBuffer(), this.pubkey.toBuffer()], util_1.TOKEN_METADATA_PROGRAM_ID)[0].toString();
    }
}
exports.Token = Token;
