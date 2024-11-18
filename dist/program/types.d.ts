import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
export declare const SOLANA_DECIMALS = 9;
export type CurveType = 'V1';
export type CurveStatus = 'initialized' | 'prepareMigration' | 'migrated';
export type ContractEnum<T extends string> = {
    [key in T]: any;
};
export interface RawCurveAccount {
    bump: number;
    decimals: number;
    vReserveTokenAmount: BN;
    vReserveSolAmount: BN;
    creatorRewardBps: number;
    migrationFee: BN;
    bondingCurveThreshold: BN;
    coefB: BN;
    mint: PublicKey;
    creator: PublicKey;
    curveType: ContractEnum<CurveType>;
    curveStatus: ContractEnum<CurveStatus>;
    createdAt: BN;
    bannerUrl: string | null | undefined;
    airdrop: boolean;
    airDropRatioBps: number;
}
//# sourceMappingURL=types.d.ts.map