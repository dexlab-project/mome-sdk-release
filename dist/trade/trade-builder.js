"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeBuilder = void 0;
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const transaction_builder_1 = require("./transaction-builder");
const program_1 = require("../program");
const util_1 = require("./util");
class TradeBuilder {
    constructor(program, token, trader) {
        this.program = program;
        this.token = token;
        this.trader = trader;
        this.traderPublicKey = trader instanceof web3_js_1.PublicKey ? trader : trader.publicKey;
    }
    buy(param) {
        this.setTrade('buy', param);
        return this.transactionBuilder();
    }
    sell(param) {
        this.setTrade('sell', param);
        return this.transactionBuilder();
    }
    setTrade(tradeType, param) {
        this.tradeParam = param;
        this.tradeType = tradeType;
    }
    transactionBuilder() {
        return new transaction_builder_1.TransactionBuilder(this, {
            token: this.token,
            trader: this.trader,
            program: this.program,
        });
    }
    async getTradeInstructions(token) {
        if (this.tradeParam == null) {
            throw new Error('Trade param is not set');
        }
        if (this.tradeType == null) {
            throw new Error('Trade type is not set');
        }
        const curveAccount = await token.getCurveAccount();
        const accounts = await this.getAccounts();
        const method = this.tradeType === 'buy' ? this.program.methods.buy : this.program.methods.sell;
        const rawTradeParam = (0, util_1.toRawTradeParam)(curveAccount, this.tradeType, this.tradeParam);
        const tradeInstruction = await method(rawTradeParam)
            .accounts(accounts.accounts)
            .instruction();
        return [...accounts.creationInstructions, tradeInstruction];
    }
    async getAccounts() {
        const [configAddress, _configBump] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(program_1.CONFIG_SEED)], this.program.programId);
        const [eventAuthorityAddress] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(program_1.EVENT_AUTHORITY_SEED)], this.program.programId);
        const configAccountData = await this.program.account.momeConfig.fetch(configAddress);
        const curveAccount = this.token.deriveCurveAccountPublicKey();
        const curveTokenAccount = await (0, spl_token_1.getAssociatedTokenAddress)(this.token.pubkey, curveAccount, true);
        const { tokenAccountAddress: traderTokenAccount, accountCreationInstruction, } = await this.findOrCreateAssociatedTokenAccountByMint();
        return {
            accounts: {
                trader: this.traderPublicKey,
                traderTokenAccount,
                curveAccount,
                curveTokenAccount,
                configAccount: configAddress,
                mint: this.token.pubkey,
                feeAddress: configAccountData.tradeFee,
                tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                associatedTokenProgram: spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                systemProgram: web3_js_1.SystemProgram.programId,
                eventAuthorityAddress,
            },
            creationInstructions: accountCreationInstruction ? [accountCreationInstruction] : [],
        };
    }
    async findOrCreateAssociatedTokenAccountByMint() {
        const mint = this.token.pubkey;
        const connection = this.program.provider.connection;
        const mintProgramId = this.program.programId;
        const filter = { mint: mint, programId: mintProgramId };
        const accounts = await connection.getParsedTokenAccountsByOwner(this.traderPublicKey, filter);
        const parsedAccounts = this.parseTokenResponseToAccountInfo(accounts);
        let toAccount;
        if (parsedAccounts && parsedAccounts.length > 0) {
            toAccount = parsedAccounts[0].pubkey;
        }
        else {
            const newAtaTokenAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.traderPublicKey, false, spl_token_1.TOKEN_PROGRAM_ID, spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID);
            const newAtaAccountInstruction = (0, spl_token_1.createAssociatedTokenAccountInstruction)(this.traderPublicKey, newAtaTokenAccount, this.traderPublicKey, mint, spl_token_1.TOKEN_PROGRAM_ID, spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID);
            toAccount = newAtaTokenAccount;
            return {
                tokenAccountAddress: toAccount,
                accountCreationInstruction: newAtaAccountInstruction,
            };
        }
        return {
            tokenAccountAddress: toAccount,
            accountCreationInstruction: undefined,
        };
    }
    parseTokenResponseToAccountInfo(res) {
        return res.value.map((data) => {
            return {
                pubkey: data.pubkey,
                account: data.account,
            };
        });
    }
}
exports.TradeBuilder = TradeBuilder;
