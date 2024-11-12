import { TransactionBuilder } from './transaction-builder';
import { Commitment, ConfirmOptions } from '@solana/web3.js';
import { TradeBuilderParam, TransactionExecuteResult } from './types';
export declare class TransactionSender {
    private readonly transactionBuilder;
    private readonly param;
    constructor(transactionBuilder: TransactionBuilder, param: TradeBuilderParam);
    sendAndConfirm(confirmOptions?: ConfirmOptions): Promise<TransactionExecuteResult>;
    send(confirmOptions?: ConfirmOptions): Promise<TransactionExecuteResult>;
    simulate(commitment?: Commitment): Promise<import("@coral-xyz/anchor/dist/cjs/utils/rpc").SuccessfulTxSimulationResponse>;
    private sign;
}
//# sourceMappingURL=transaction-sender.d.ts.map