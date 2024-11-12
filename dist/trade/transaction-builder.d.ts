import { TransactionInstruction, VersionedTransaction } from '@solana/web3.js';
import { TradeBuilder } from './trade-builder';
import { TransactionSender } from './transaction-sender';
import { ComputeUnitParam, TradeBuilderParam, TransactionMessageConfig, TransactionBundleParam } from './types';
export declare class TransactionBuilder {
    private readonly tradeBuilder;
    private readonly param;
    private computeUnitPriceIxs;
    private bundleParam?;
    private config?;
    private connection;
    private readonly traderPublicKey;
    private readonly token;
    constructor(tradeBuilder: TradeBuilder, param: TradeBuilderParam);
    setComputeUnit(param: ComputeUnitParam): this;
    setBundle(param?: TransactionBundleParam): this;
    transaction(config?: TransactionMessageConfig): TransactionSender;
    private getLatestBlockhash;
    getTransaction(config?: TransactionMessageConfig): Promise<{
        transaction: VersionedTransaction;
        blockhash: Readonly<{
            blockhash: import("@solana/web3.js").Blockhash;
            lastValidBlockHeight: number;
        }>;
    }>;
    getTradeInstructions(): Promise<TransactionInstruction[]>;
    getAllInstructions(): Promise<TransactionInstruction[]>;
    private getBundleIx;
}
//# sourceMappingURL=transaction-builder.d.ts.map