"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCurve = exports.toRawTradeParam = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const util_1 = require("../util");
const toRawTradeParam = (curveAccount, tradeType, tradeParam) => {
    let amount;
    let collateralAmount;
    if (tradeType === 'buy') {
        const simulated = (0, exports.calculateCurve)(tradeParam.amount, curveAccount.vReserveSolAmount, curveAccount.vReserveTokenAmount, tradeType, tradeParam.slippageBps);
        amount = simulated.expectedMinimumAmountWithSlippage;
        collateralAmount = tradeParam.amount;
    }
    else if (tradeType === 'sell') {
        const simulated = (0, exports.calculateCurve)(tradeParam.amount, curveAccount.vReserveSolAmount, curveAccount.vReserveTokenAmount, tradeType, tradeParam.slippageBps);
        amount = tradeParam.amount;
        collateralAmount = simulated.expectedMinimumAmountWithSlippage;
    }
    else {
        throw new Error(`Invalid trade type: ${tradeType}`);
    }
    return {
        tradeType: (0, util_1.toContractEnum)(tradeType),
        amount: new bn_js_1.default(amount.toString()),
        collateralAmount: new bn_js_1.default(collateralAmount.toString()),
        slippageBps: new bn_js_1.default(tradeParam.slippageBps),
    };
};
exports.toRawTradeParam = toRawTradeParam;
const calculateCurve = (amount, solReserveAmount, tokenReserveAmount, tradeType, slippageBps) => {
    let expectedAmount = BigInt(0);
    let expectedUiAmount = '0';
    let expectedMinimumAmountWithSlippage = BigInt(0);
    let expectedUiMinimumAmountWithSlippage = '0';
    if (solReserveAmount > 0 && tokenReserveAmount > 0) {
        const tokenVaultAmount = BigInt(tokenReserveAmount.toString());
        const solanaVaultAmount = BigInt(solReserveAmount.toString());
        const invariant = BigInt(tokenVaultAmount * solanaVaultAmount);
        if (tradeType === 'buy') {
            const newSwapSourceAmount = solanaVaultAmount + amount;
            expectedAmount = tokenVaultAmount - BigInt(Math.ceil(Number(invariant) / Number(newSwapSourceAmount)));
            expectedUiAmount = (Number(expectedAmount) / Math.pow(10, 6)).toString();
            expectedMinimumAmountWithSlippage = BigInt(Math.floor(Number(expectedAmount) * (1 - slippageBps / 10000)));
            expectedUiMinimumAmountWithSlippage = (Number(expectedMinimumAmountWithSlippage) / Math.pow(10, 6)).toString();
        }
        else if (tradeType === 'sell') {
            const newSwapSourceAmount = tokenVaultAmount + amount;
            expectedAmount = solanaVaultAmount - BigInt(Math.ceil(Number(invariant) / Number(newSwapSourceAmount)));
            expectedUiAmount = (Number(expectedAmount) / Math.pow(10, 9)).toString();
            expectedMinimumAmountWithSlippage = BigInt(Math.floor(Number(expectedAmount) * (1 - slippageBps / 10000)));
            expectedUiMinimumAmountWithSlippage = (Number(expectedMinimumAmountWithSlippage) / Math.pow(10, 9)).toString();
        }
        else {
            throw new Error(`Invalid trade type: ${tradeType}`);
        }
    }
    return {
        inAmount: amount,
        expectedAmount,
        expectedUiAmount,
        expectedMinimumAmountWithSlippage,
        expectedUiMinimumAmountWithSlippage,
    };
};
exports.calculateCurve = calculateCurve;
