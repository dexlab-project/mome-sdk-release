"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBundleAccount = void 0;
const axios_1 = __importDefault(require("axios"));
const jitoUrl = 'https://mainnet.block-engine.jito.wtf/api';
const getTipAccounts = async () => {
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const payload = {
        jsonrpc: '2.0',
        id: Number(id),
        method: 'getTipAccounts',
        params: [],
    };
    try {
        const response = await axios_1.default.post(`${jitoUrl}/v1/bundles`, payload, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data.result;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
const getBundleAccount = async () => {
    const jitoTipAccounts = await getTipAccounts();
    return jitoTipAccounts[Math.floor(Math.random() * jitoTipAccounts.length)];
};
exports.getBundleAccount = getBundleAccount;
