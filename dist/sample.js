"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mome_1 = require("./mome");
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const api_1 = require("./api");
const RPC_URL = process.env.RPC_URL || 'https://api.devnet.solana.com';
const tokenAddress = '6xUbc5LC45gpj7pgUa3VffzUf725WZuxZ5pcjYF1NL7c';
const defaultConfigPath = path_1.default.join(os_1.default.homedir(), '.config', 'solana', 'id.json');
const buy = async () => {
    const sdk = mome_1.MomeSDK.init(RPC_URL, defaultConfigPath);
    const token = sdk.getToken(tokenAddress);
    return await token.beginTrade()
        .buy({
        amount: 1000000n,
        slippageBps: 1500,
    })
        .setComputeUnit({
        computeUnitLimit: 200000,
        computeUnitPrice: 1000,
    })
        .setBundle({ lamports: 1000000 })
        .transaction({
        blockhashCommitment: 'confirmed',
    })
        .sendAndConfirm({
        skipPreflight: false,
        preflightCommitment: 'confirmed',
        commitment: 'confirmed',
    });
};
const sell = async () => {
    const sdk = mome_1.MomeSDK.init(RPC_URL, defaultConfigPath);
    const token = sdk.getToken(tokenAddress);
    return await token.beginTrade()
        .sell({
        amount: 39998666711n,
        slippageBps: 1500,
    })
        .transaction({
        blockhashCommitment: 'confirmed',
    })
        .sendAndConfirm({
        skipPreflight: false,
        preflightCommitment: 'confirmed',
        commitment: 'confirmed',
    });
};
const printCurveAccount = async () => {
    const sdk = mome_1.MomeSDK.init(RPC_URL, defaultConfigPath);
    const token = sdk.getToken(tokenAddress);
    const curveAccount = await token.getCurveAccount();
    console.log(`${JSON.stringify(curveAccount, (key, value) => typeof value === 'bigint'
        ? value.toString()
        : value)}`);
};
const printCurrentPrice = async () => {
    const sdk = mome_1.MomeSDK.init(RPC_URL, defaultConfigPath);
    const token = sdk.getToken(tokenAddress);
    const price = await token.getCurrentPrice();
    console.log(`price=${price}`);
};
const printBalance = async () => {
    const sdk = mome_1.MomeSDK.init(RPC_URL, defaultConfigPath);
    const balance = await sdk.getTokenBalance(tokenAddress);
    console.log(`balance=${balance.toString()}`);
};
const main = async () => {
    const apiClient = new api_1.MomeApi();
    const list = await apiClient.listToken(1, 10, 'createdAt', 'desc');
    console.log(`${JSON.stringify(list)}`);
};
main().finally();
