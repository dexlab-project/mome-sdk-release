import { Finality, PublicKey } from '@solana/web3.js';
import { TradeType } from '../trade';
import { ContractEnum, CurveStatus, CurveType } from '../program';
import BN from 'bn.js';
export type MomeEventListenerOptions = {
    commitment?: Finality;
};
export type MomeEventName = 'MigrateInitializeEvent' | 'MigrateCreateEvent' | 'CurveTradeEvent' | 'CurveStatusEvent' | 'CurveCreateEvent';
export type MomeEventDataType = CurveStatusEvent | CurveTradeEvent | CurveCreateEvent | MigrateInitializeEvent | MigrateCreateEvent;
export type MomeEvent = {
    name: MomeEventName;
    data: MomeEventDataType;
};
export interface RawCurveStatusEvent {
    curveAddress: PublicKey;
    preStatus: ContractEnum<CurveStatus>;
    postStatus: ContractEnum<CurveStatus>;
    timestamp: BN;
}
export interface RawCurveTradeEvent {
    curveAddress: PublicKey;
    vReserveSolAmount: BN;
    vReserveTokenAmount: BN;
    tradeType: ContractEnum<TradeType>;
    tokenAddress: PublicKey;
    traderTokenAccountAddress: PublicKey;
    paidAmount: BN;
    receivedAmount: BN;
    timestamp: BN;
}
export interface RawCurveCreateEvent {
    creatorAddress: PublicKey;
    creatorRewardBps: BN;
    curveStatus: ContractEnum<CurveStatus>;
    curveAddress: PublicKey;
    curveTokenAccountAddress: PublicKey;
    bondingCurveThreshold: BN;
    migrationFee: BN;
    airdrop: BN;
    airdropRatioBps: number;
    coefficientB: BN;
    tokenAddress: PublicKey;
    name: string;
    symbol: string;
    uri: string;
    bannerUrl?: string;
    decimals: number;
    tokenProgramAddress: PublicKey;
    totalSupplyAmount: BN;
    curveType: ContractEnum<CurveType>;
    vReserveTokenAmount: BN;
    vReserveSolAmount: BN;
    timestamp: BN;
}
export interface RawMigrateInitializeEvent {
    curveAddress: PublicKey;
    curveStatus: ContractEnum<CurveStatus>;
    tokenA: PublicKey;
    tokenB: PublicKey;
    authorityAddress: PublicKey;
    creatorAddress: PublicKey;
    collateralAddress: PublicKey;
    poolTokenAddress: PublicKey;
    poolTokenAccountAddress: PublicKey;
    poolTokenFeeAccountAddress: PublicKey;
    tokenSwapAddress: PublicKey;
    tokenSwapProgramAddress: PublicKey;
    timestamp: BN;
}
export interface RawMigrateCreateEvent {
    curveAddress: PublicKey;
    curveStatus: ContractEnum<CurveStatus>;
    tokenAddress: PublicKey;
    migratedLpTokenAddress: PublicKey;
    migratedPoolAddress: PublicKey;
    migratedLockLpTokenAccountAddress: PublicKey;
    migratedProgramAddress: PublicKey;
    timestamp: BN;
}
export interface CurveStatusEvent {
    curveAddress: PublicKey;
    preStatus: CurveStatus;
    postStatus: CurveStatus;
    timestamp: bigint;
}
export interface CurveTradeEvent {
    curveAddress: PublicKey;
    vReserveSolAmount: bigint;
    vReserveTokenAmount: bigint;
    tradeType: TradeType;
    tokenAddress: PublicKey;
    traderTokenAccountAddress: PublicKey;
    paidAmount: bigint;
    receivedAmount: bigint;
    timestamp: bigint;
}
export interface CurveCreateEvent {
    creatorAddress: PublicKey;
    creatorRewardBps: number;
    curveStatus: CurveStatus;
    curveAddress: PublicKey;
    curveTokenAccountAddress: PublicKey;
    bondingCurveThreshold: bigint;
    migrationFee: bigint;
    airdrop: boolean;
    airdropRatioBps: number;
    coefficientB: bigint;
    tokenAddress: PublicKey;
    name: string;
    symbol: string;
    uri: string;
    bannerUrl?: string;
    decimals: number;
    tokenProgramAddress: PublicKey;
    totalSupplyAmount: bigint;
    curveType: CurveType;
    vReserveTokenAmount: bigint;
    vReserveSolAmount: bigint;
    timestamp: bigint;
}
export interface MigrateInitializeEvent {
    curveAddress: PublicKey;
    curveStatus: CurveStatus;
    tokenA: PublicKey;
    tokenB: PublicKey;
    authorityAddress: PublicKey;
    creatorAddress: PublicKey;
    collateralAddress: PublicKey;
    poolTokenAddress: PublicKey;
    poolTokenAccountAddress: PublicKey;
    poolTokenFeeAccountAddress: PublicKey;
    tokenSwapAddress: PublicKey;
    tokenSwapProgramAddress: PublicKey;
    timestamp: bigint;
}
export interface MigrateCreateEvent {
    curveAddress: PublicKey;
    curveStatus: CurveStatus;
    tokenAddress: PublicKey;
    migratedLpTokenAddress: PublicKey;
    migratedPoolAddress: PublicKey;
    migratedLockLpTokenAccountAddress: PublicKey;
    migratedProgramAddress: PublicKey;
    timestamp: bigint;
}
//# sourceMappingURL=types.d.ts.map