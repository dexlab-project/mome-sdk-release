import { ContractEnum } from './program';
import Decimal from 'decimal.js';
export declare const convertBNtoBigInt: (obj: any) => any;
export declare const convertPublicKeyToSting: (obj: any) => any;
export declare const toContractEnum: <T extends string>(value: T) => ContractEnum<T>;
export declare const getContractEnumValue: <T extends string>(contractEnum: ContractEnum<T>) => T;
export declare const lamportsToSol: (lamports: Decimal | bigint | number | string) => Decimal;
export declare const solToLamports: (sol: Decimal | number | string) => bigint;
export declare const toUiVolume: (volume: Decimal | bigint | number | string, decimal: number) => Decimal;
export declare const toDecimalVolume: (displayVolume: Decimal | number | string, decimal: number) => bigint;
//# sourceMappingURL=util.d.ts.map