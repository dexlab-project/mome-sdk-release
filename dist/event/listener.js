"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomeEventListener = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const program_1 = require("../program");
const web3_js_1 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));
const util_1 = require("../util");
class MomeEventListener {
    constructor(program, options) {
        this.program = program;
        this.options = options;
        this.onLogsSubscriptionId = null;
        this.eventAuthority = this.deriveEventAuthorityPda();
        this.listeners = new Map();
        this.decodeEvent = (data) => {
            const bs58Data = bs58_1.default.decode(data);
            const bs64Data = anchor_1.utils.bytes.base64.encode(Buffer.from(bs58Data.subarray(8)));
            return this.program.coder.events.decode(bs64Data);
        };
    }
    onEvent(name, callback) {
        this.listeners.set(name, callback);
        if (!this.onLogsSubscriptionId) {
            this.subscribeLogs();
        }
    }
    removeEvent(name) {
        this.listeners.delete(name);
        if (this.listeners.size === 0) {
            return this.unsubscribeLogs();
        }
    }
    subscribeLogs() {
        if (this.onLogsSubscriptionId) {
            return;
        }
        const connection = this.program.provider.connection;
        this.onLogsSubscriptionId = connection.onLogs(this.eventAuthority, async (logs, ctx) => {
            if (logs.err) {
                return;
            }
            if (!this.hasMomeCalled(logs)) {
                return;
            }
            const connection = this.program.provider.connection;
            const tx = await connection.getTransaction(logs.signature, {
                commitment: this.options?.commitment || 'confirmed',
                maxSupportedTransactionVersion: 0,
            });
            if (!tx) {
                return;
            }
            for (const event of this.parseEvent(tx)) {
                const listener = this.listeners.get(event.name);
                if (listener) {
                    listener(event);
                }
            }
        }, this.options?.commitment || 'confirmed');
    }
    unsubscribeLogs() {
        if (!this.onLogsSubscriptionId) {
            return;
        }
        const connection = this.program.provider.connection;
        return connection.removeOnLogsListener(this.onLogsSubscriptionId);
    }
    hasMomeCalled(logs) {
        return logs.logs.some((log) => log.startsWith(`Program ${this.program.programId.toString()} invoke`));
    }
    *parseEvent(tx) {
        const programIdIndex = tx.transaction.message.staticAccountKeys.findIndex((key) => key.equals(this.program.programId));
        const eventAuthorityAccountIndex = tx.transaction.message.staticAccountKeys.findIndex((key) => key.equals(this.eventAuthority));
        if (eventAuthorityAccountIndex === -1) {
            return [];
        }
        const eventInstructions = tx.meta?.innerInstructions
            ?.flatMap((inner) => inner.instructions)
            ?.filter((instruction) => instruction.programIdIndex === programIdIndex && instruction.accounts.includes(eventAuthorityAccountIndex));
        if (!eventInstructions || eventInstructions.length === 0) {
            return [];
        }
        for (const ix of eventInstructions) {
            const rawEvent = this.decodeEvent(ix.data);
            if (!(rawEvent?.data)) {
                continue;
            }
            let eventData;
            switch (rawEvent.name) {
                case 'MigrateInitializeEvent':
                    const migrateInitializeEventData = rawEvent.data;
                    eventData = {
                        ...rawEvent.data,
                        curveStatus: (0, util_1.getContractEnumValue)(migrateInitializeEventData.curveStatus),
                    };
                    break;
                case 'MigrateCreateEvent':
                    const migrateCreateEventData = rawEvent.data;
                    eventData = {
                        ...rawEvent.data,
                        curveStatus: (0, util_1.getContractEnumValue)(migrateCreateEventData.curveStatus),
                    };
                    break;
                case 'CurveTradeEvent':
                    const curveTradeEventData = rawEvent.data;
                    eventData = {
                        ...rawEvent.data,
                        tradeType: (0, util_1.getContractEnumValue)(curveTradeEventData.tradeType),
                    };
                    break;
                case 'CurveStatusEvent':
                    const curveStatusEventData = rawEvent.data;
                    eventData = {
                        ...rawEvent.data,
                        preStatus: (0, util_1.getContractEnumValue)(curveStatusEventData.preStatus),
                        postStatus: (0, util_1.getContractEnumValue)(curveStatusEventData.postStatus),
                    };
                    break;
                case 'CurveCreateEvent':
                    const rawData = rawEvent.data;
                    eventData = {
                        ...rawEvent.data,
                        curveStatus: (0, util_1.getContractEnumValue)(rawData.curveStatus),
                        curveType: (0, util_1.getContractEnumValue)(rawData.curveType),
                    };
                    break;
                default:
                    throw new Error(`Unknown event name: ${rawEvent.name}`);
            }
            const convertBigint = (0, util_1.convertBNtoBigInt)(eventData);
            yield {
                name: rawEvent.name,
                data: convertBigint,
            };
        }
    }
    deriveEventAuthorityPda() {
        return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(program_1.EVENT_AUTHORITY_SEED)], this.program.programId)[0];
    }
}
exports.MomeEventListener = MomeEventListener;
