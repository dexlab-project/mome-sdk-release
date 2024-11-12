import { Provider } from '@coral-xyz/anchor';
import { Token } from './token';
import { Commitment } from '@solana/web3.js';
import { TransactionBlockhash } from './trade';
export declare class MomeSDK {
    private readonly program;
    constructor(provider: Provider);
    static init(rpcUrl: string, walletPath: string, options?: {
        connectionCommitment?: Commitment;
    }): MomeSDK;
    getToken(address: string): Token;
    getTokenBalance(address: string): Promise<bigint>;
    getLamports(): Promise<bigint>;
    waitForConfirmation(signature: string, txBlockhash: TransactionBlockhash): Promise<import("@solana/web3.js").RpcResponseAndContext<import("@solana/web3.js").SignatureResult>>;
}
//# sourceMappingURL=mome.d.ts.map