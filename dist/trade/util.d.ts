import { RawTradeParam, TradeParam, TradeSimulateResult, TradeType } from './types';
import { CurveAccount } from '../token';
export declare const toRawTradeParam: (curveAccount: CurveAccount, tradeType: TradeType, tradeParam: TradeParam) => RawTradeParam;
export declare const calculateCurve: (amount: bigint, solReserveAmount: bigint, tokenReserveAmount: bigint, tradeType: TradeType, slippageBps: number) => TradeSimulateResult;
//# sourceMappingURL=util.d.ts.map