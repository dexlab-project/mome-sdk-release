"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomeApi = void 0;
const client_1 = require("./client");
const MOME_API_NETWORK = process.env.MOME_API_NETWORK || 'mainnet-beta';
class MomeApi {
    async listToken(page, size, sort, order) {
        const response = await client_1.apiClient.get('/token/list', {
            params: {
                page,
                size,
                sort,
                order,
                network: MOME_API_NETWORK,
            },
        });
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error(`Failed to fetch tokens with status ${response.status} ${response.statusText}. [${JSON.stringify(response.data)}]`);
        }
    }
    async getToken(address) {
        const response = await client_1.apiClient.get(`/token/${address}`, {
            params: {
                network: MOME_API_NETWORK,
            },
        });
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error(`Failed to fetch token with status ${response.status} ${response.statusText}. [${JSON.stringify(response.data)}]`);
        }
    }
}
exports.MomeApi = MomeApi;
