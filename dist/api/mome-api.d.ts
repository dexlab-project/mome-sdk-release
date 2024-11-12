import { TokenListOrder, TokenListSort, TokenResponse } from './types';
export declare class MomeApi {
    listToken(page: number, size: number, sort: TokenListSort, order: TokenListOrder): Promise<TokenResponse>;
    getToken(address: string): Promise<TokenResponse>;
}
//# sourceMappingURL=mome-api.d.ts.map