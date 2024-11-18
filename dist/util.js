"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDecimalVolume = exports.toUiVolume = exports.solToLamports = exports.lamportsToSol = exports.getContractEnumValue = exports.toContractEnum = exports.convertPublicKeyToSting = exports.convertBNtoBigInt = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const web3_js_1 = require("@solana/web3.js");
const program_1 = require("./program");
const decimal_js_1 = __importDefault(require("decimal.js"));
const convertBNtoBigInt = (obj) => {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof bn_js_1.default) {
                newObj[key] = BigInt(obj[key].toString());
            }
            else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
};
exports.convertBNtoBigInt = convertBNtoBigInt;
const convertPublicKeyToSting = (obj) => {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof web3_js_1.PublicKey) {
                newObj[key] = obj[key].toString();
            }
            else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
};
exports.convertPublicKeyToSting = convertPublicKeyToSting;
const toContractEnum = (value) => {
    return {
        [value]: {},
    };
};
exports.toContractEnum = toContractEnum;
const getContractEnumValue = (contractEnum) => {
    const value = Object.keys(contractEnum)[0];
    if (!value) {
        throw new Error('Invalid contract enum');
    }
    return value;
};
exports.getContractEnumValue = getContractEnumValue;
const lamportsToSol = (lamports) => {
    return (0, exports.toUiVolume)(lamports, program_1.SOLANA_DECIMALS);
};
exports.lamportsToSol = lamportsToSol;
const solToLamports = (sol) => {
    return (0, exports.toDecimalVolume)(sol, program_1.SOLANA_DECIMALS);
};
exports.solToLamports = solToLamports;
const toUiVolume = (volume, decimal) => {
    let v;
    if (volume instanceof decimal_js_1.default) {
        v = volume;
    }
    else {
        v = new decimal_js_1.default(volume.toString());
    }
    return v.div(10 ** decimal).toDecimalPlaces(decimal);
};
exports.toUiVolume = toUiVolume;
const toDecimalVolume = (displayVolume, decimal) => {
    let v;
    if (displayVolume instanceof decimal_js_1.default) {
        v = displayVolume;
    }
    else {
        v = new decimal_js_1.default(displayVolume.toString());
    }
    return BigInt(v.times(10 ** decimal).round().toString());
};
exports.toDecimalVolume = toDecimalVolume;
