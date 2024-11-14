import { MomeResponse, TokenListOrder, TokenListSort, TokenResponse } from './types';
export declare class MomeApi {
    listToken(page: number, size: number, sort: TokenListSort, order: TokenListOrder): Promise<MomeResponse<TokenResponse[]>>;
    getToken(address: string): Promise<MomeResponse<TokenResponse>>;
}
//# sourceMappingURL=mome-api.d.ts.map