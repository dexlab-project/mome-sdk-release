"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomeSDK = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const program_1 = require("./program");
const token_1 = require("./token");
const web3_js_1 = require("@solana/web3.js");
const nodewallet_1 = __importDefault(require("@coral-xyz/anchor/dist/cjs/nodewallet"));
const fs = __importStar(require("node:fs"));
const spl_token_1 = require("@solana/spl-token");
class MomeSDK {
    constructor(provider) {
        this.program = new anchor_1.Program(program_1.IDL, program_1.PROGRAM_ID, provider);
    }
    static init(rpcUrl, walletPath, options) {
        const fileContent = fs.readFileSync(walletPath, 'utf-8');
        const jsonArray = JSON.parse(fileContent);
        const privateKey = new Uint8Array(jsonArray);
        const connection = new web3_js_1.Connection(rpcUrl, options?.connectionCommitment || 'confirmed');
        const keypair = web3_js_1.Keypair.fromSecretKey(privateKey);
        const wallet = new nodewallet_1.default(keypair);
        const provider = new anchor_1.AnchorProvider(connection, wallet, {
            commitment: 'confirmed',
        });
        return new MomeSDK(provider);
    }
    getToken(address) {
        return new token_1.Token(address, this.program);
    }
    async getTokenBalance(address) {
        const walletPublicKey = this.program.provider.publicKey;
        if (!walletPublicKey) {
            throw new Error('Wallet is not connected');
        }
        const tokenAccount = await this.program.provider.connection.getTokenAccountsByOwner(walletPublicKey, {
            programId: spl_token_1.TOKEN_PROGRAM_ID,
            mint: new web3_js_1.PublicKey(address),
        }, {
            commitment: 'confirmed',
        });
        if (tokenAccount.value.length !== 1) {
            throw new Error('Invalid token account');
        }
        const accountInfoData = tokenAccount.value[0].account.data;
        const accountInfo = spl_token_1.AccountLayout.decode(accountInfoData);
        return accountInfo.amount;
    }
    async getLamports() {
        if (this.program.provider.publicKey) {
            const accountInfo = await this.program.provider.connection.getAccountInfo(this.program.provider.publicKey);
            return BigInt(accountInfo?.lamports || 0);
        }
        else {
            throw new Error('Wallet is not connected');
        }
    }
    async waitForConfirmation(signature, txBlockhash) {
        return this.program.provider.connection.confirmTransaction({
            signature: signature,
            blockhash: txBlockhash.blockhash,
            lastValidBlockHeight: txBlockhash.lastValidBlockHeight,
        }, 'confirmed');
    }
}
exports.MomeSDK = MomeSDK;
