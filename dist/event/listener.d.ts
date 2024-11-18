import { Program } from '@coral-xyz/anchor';
import { Mome } from '../program';
import { VersionedTransactionResponse } from '@solana/web3.js';
import { MomeEvent, MomeEventListenerOptions, MomeEventName } from './types';
export declare class MomeEventListener {
    private readonly program;
    private readonly options?;
    private onLogsSubscriptionId?;
    private eventAuthority;
    private listeners;
    constructor(program: Program<Mome>, options?: MomeEventListenerOptions | undefined);
    onEvent(name: MomeEventName, callback: (event: MomeEvent) => void): void;
    removeEvent(name: string): Promise<void> | undefined;
    private subscribeLogs;
    private unsubscribeLogs;
    private hasMomeCalled;
    parseEvent(tx: VersionedTransactionResponse): Generator<MomeEvent, never[] | undefined, unknown>;
    private decodeEvent;
    private deriveEventAuthorityPda;
}
//# sourceMappingURL=listener.d.ts.map