export type TokenListOrder = 'asc' | 'desc';
export type TokenListSort = 'createdAt' | 'lastCommentedAt' | 'marketCap';
export interface MomeResponse<T> {
    data?: T;
    error?: any;
}
export interface TokenResponse {
    tokenAddress: string;
    symbol: string;
    name: string;
    description?: string;
    imageUrl?: string;
    metadataUrl?: string;
    bannerImageUrl?: string;
    decimals: number;
    poolAddress: string;
    poolStatus: string;
    marketCapThreshold: string;
    createdAt: number;
    statusUpdatedAt: number;
    lastTradingAt: number;
    curveProgress: number;
    legendProgress: number;
    legendedAt: number;
    legendStatus: string;
    marketCap: string;
    lastCommentedAt: number;
    network: string;
    isBlocked?: boolean;
    migratedPoolAddress?: string;
    creator: TokenCreatorResponse;
    favoriteCount: number;
    commentCount: number;
    lastPrice?: string;
}
export type TokenCreatorResponse = {
    name: string;
    handle?: string;
    profileImage?: string;
    walletPublicKey: string;
    metrics?: {
        followingCount: number;
        followerCount: number;
        likeCount: number;
    };
} | string;
//# sourceMappingURL=types.d.ts.map