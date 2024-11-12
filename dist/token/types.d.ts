import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
export declare const SOLANA_DECIMALS = 9;
export type CurveType = 'V1';
export type CurveStatus = 'initialized' | 'prepareMigration' | 'migrated';
export type ContractEnum<T extends string> = {
    [key in T]: any;
};
export interface CurveAccount {
    bump: number;
    decimals: number;
    vReserveTokenAmount: bigint;
    vReserveSolAmount: bigint;
    creatorRewardBps: number;
    migrationFee: bigint;
    bondingCurveThreshold: bigint;
    coefB: bigint;
    mint: string;
    creator: string;
    curveType: CurveType;
    curveStatus: CurveStatus;
    createdAt: bigint;
    bannerUrl: string | null | undefined;
    airdrop: boolean;
    airDropRatioBps: number;
}
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
export interface TokenUriMetadata {
    name: string;
    symbol: string;
    description?: string;
    image?: string;
    tags?: string[];
    extensions?: Record<string, string>;
}
export interface TokenBasicInfo {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    description?: string;
    image?: string;
    tags?: string[];
    extensions?: Record<string, string>;
    status: CurveStatus;
}
//# sourceMappingURL=types.d.ts.map