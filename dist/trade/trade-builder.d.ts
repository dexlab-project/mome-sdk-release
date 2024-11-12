import { AccountInfo, Keypair, ParsedAccountData, PublicKey, RpcResponseAndContext, TransactionInstruction } from '@solana/web3.js';
import { Program, Wallet } from '@coral-xyz/anchor';
import { TransactionBuilder } from './transaction-builder';
import { Mome } from '../program';
import { TradeParam, TradeType } from './types';
import { Token } from '../token';
export declare class TradeBuilder {
    private readonly program;
    private readonly token;
    private readonly trader;
    private readonly traderPublicKey;
    private tradeParam?;
    private tradeType?;
    constructor(program: Program<Mome>, token: Token, trader: Wallet | Keypair | PublicKey);
    buy(param: TradeParam): TransactionBuilder;
    sell(param: TradeParam): TransactionBuilder;
    setTrade(tradeType: TradeType, param: TradeParam): void;
    transactionBuilder(): TransactionBuilder;
    getTradeInstructions(token: Token): Promise<TransactionInstruction[]>;
    private getAccounts;
    findOrCreateAssociatedTokenAccountByMint(): Promise<{
        tokenAccountAddress: PublicKey;
        accountCreationInstruction: TransactionInstruction | undefined;
    }>;
    parseTokenResponseToAccountInfo(res: RpcResponseAndContext<Array<{
        pubkey: PublicKey;
        account: AccountInfo<ParsedAccountData>;
    }>>): {
        pubkey: PublicKey;
        account: AccountInfo<ParsedAccountData>;
    }[];
}
//# sourceMappingURL=trade-builder.d.ts.map