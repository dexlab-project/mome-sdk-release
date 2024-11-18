import { CurveStatus, CurveType } from '../program';
import { PublicKey } from '@solana/web3.js';
export interface CurveAccount {
    bump: number;
    decimals: number;
    vReserveTokenAmount: bigint;
    vReserveSolAmount: bigint;
    creatorRewardBps: number;
    migrationFee: bigint;
    bondingCurveThreshold: bigint;
    coefB: bigint;
    mint: PublicKey;
    creator: PublicKey;
    curveType: CurveType;
    curveStatus: CurveStatus;
    createdAt: bigint;
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