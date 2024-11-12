import { Commitment, Keypair, PublicKey } from '@solana/web3.js';
import { Program, Wallet } from '@coral-xyz/anchor';
import { Mome } from '../program';
import { TradeBuilder } from '../trade';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { TokenBasicInfo, TokenUriMetadata } from './types';
export declare class Token {
    private readonly program;
    readonly pubkey: PublicKey;
    constructor(address: string, program: Program<Mome>);
    getInfo(): Promise<TokenBasicInfo>;
    deriveCurveAccountPublicKey(): PublicKey;
    getCurveAccount(commitment?: Commitment): Promise<import("./types").CurveAccount>;
    getCurrentPrice(commitment?: Commitment): Promise<string>;
    beginTrade(wallet?: Wallet | Keypair): TradeBuilder;
    getMetadata(): Promise<Metadata | null>;
    getUriMetadata(metadata?: Metadata | null): Promise<TokenUriMetadata | null>;
    private findTokenMetadataPda;
}
//# sourceMappingURL=token.d.ts.map