"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRawCurveAccountNormal = exports.TOKEN_METADATA_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
const util_1 = require("../util");
exports.TOKEN_METADATA_PROGRAM_ID = new web3_js_1.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
const convertRawCurveAccountNormal = (raw) => {
    const converted1 = (0, util_1.convertBNtoBigInt)(raw);
    return {
        ...converted1,
        curveType: (0, util_1.getContractEnumValue)(converted1.curveType),
        curveStatus: (0, util_1.getContractEnumValue)(converted1.curveStatus),
    };
};
exports.convertRawCurveAccountNormal = convertRawCurveAccountNormal;
