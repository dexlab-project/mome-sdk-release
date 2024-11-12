import { PublicKey } from '@solana/web3.js';
import { ContractEnum, CurveAccount, RawCurveAccount } from './types';
import Decimal from 'decimal.js';
export declare const convertRawCurveAccountNormal: (raw: RawCurveAccount) => CurveAccount;
export declare const convertBNtoBigInt: (obj: any) => any;
export declare const convertPublicKeyToSting: (obj: any) => any;
export declare const getContractEnumValue: <T extends string>(contractEnum: ContractEnum<T>) => T;
export declare const lamportsToSol: (lamports: Decimal | bigint | number | string) => Decimal;
export declare const solToLamports: (sol: Decimal | number | string) => bigint;
export declare const toUiVolume: (volume: Decimal | bigint | number | string, decimal: number) => Decimal;
export declare const toDecimalVolume: (displayVolume: Decimal | number | string, decimal: number) => bigint;
export declare const TOKEN_METADATA_PROGRAM_ID: PublicKey;
//# sourceMappingURL=util.d.ts.map