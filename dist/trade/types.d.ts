import BN from 'bn.js';
import { Program, Wallet } from '@coral-xyz/anchor';
import { Commitment, Keypair, PublicKey } from '@solana/web3.js';
import { ContractEnum, Mome } from '../program';
import { Token } from '../token';
export type TradeType = 'buy' | 'sell';
export type TradeParam = {
    amount: bigint;
    slippageBps: number;
};
export type TradeBuilderParam = {
    token: Token;
    trader: Wallet | Keypair | PublicKey;
    program: Program<Mome>;
};
export type ComputeUnitParam = {
    computeUnitLimit?: number;
    computeUnitPrice?: number;
};
export type TransactionBundleParam = {
    lamports?: number | bigint;
};
export interface TransactionExecuteResult {
    signature: string;
    transactionBlockhash: TransactionBlockhash;
}
export interface TransactionBlockhash {
    blockhash: string;
    lastValidBlockHeight: number;
}
export interface TransactionMessageConfig {
    blockhashCommitment?: Commitment;
}
export interface RawTradeParam {
    tradeType: ContractEnum<TradeType>;
    amount: BN;
    collateralAmount: BN;
    slippageBps: BN;
}
export interface TradeSimulateResult {
    inAmount: bigint;
    expectedAmount: bigint;
    expectedUiAmount: string;
    expectedMinimumAmountWithSlippage: bigint;
    expectedUiMinimumAmountWithSlippage: string;
}
//# sourceMappingURL=types.d.ts.map