"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const MOME_API_URL = process.env.MOME_API_URL || 'https://service-api.mome.space/';
exports.apiClient = axios_1.default.create({
    baseURL: MOME_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
