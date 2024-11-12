export type Mome = {
    "version": "0.3.0";
    "name": "mome";
    "instructions": [
        {
            "name": "initializeConfig";
            "accounts": [
                {
                    "name": "configAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mintAuthorityAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "configAuthority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "MomeConfigParams";
                    };
                }
            ];
        },
        {
            "name": "updateConfig";
            "accounts": [
                {
                    "name": "configAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "configAuthority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "MomeConfigParams";
                    };
                }
            ];
        },
        {
            "name": "createMome";
            "accounts": [
                {
                    "name": "mint";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "curveAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "metadata";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "curveTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "configAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "mintAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "payer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenMetadataProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "associatedTokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "CreateMomeParams";
                    };
                }
            ];
        },
        {
            "name": "buy";
            "accounts": [
                {
                    "name": "trader";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "traderTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "curveAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "curveTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "configAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "feeAddress";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "associatedTokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "TradeParams";
                    };
                }
            ];
        },
        {
            "name": "sell";
            "accounts": [
                {
                    "name": "trader";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "traderTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "curveAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "curveTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mint";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "configAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "feeAddress";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "associatedTokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "TradeParams";
                    };
                }
            ];
        },
        {
            "name": "initializeMigrateAccount";
            "accounts": [
                {
                    "name": "migrationAuthority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "configAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "curveAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenA";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenB";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "authorityAddress";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "creator";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tradeFee";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "collateralAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "poolTokenMint";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "poolTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "poolTokenFeeAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "swapFeeAddress";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenSwapAccount";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenSwapProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "associatedTokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "MigrateParams";
                    };
                }
            ];
        },
        {
            "name": "createMigratePool";
            "accounts": [
                {
                    "name": "migrationAuthority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "configAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "curveAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenA";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenB";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "curveTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "collateralAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenSwapAccount";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "authorityAddress";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "poolTokenMint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenAAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenBAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "lockPoolTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "poolTokenAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "poolTokenFeeAccount";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "associatedTokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "tokenSwapProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "rent";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "eventAuthority";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "program";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "params";
                    "type": {
                        "defined": "MigrateParams";
                    };
                }
            ];
        }
    ];
    "accounts": [
        {
            "name": "mintAuthority";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "mintAuthority";
                        "type": "publicKey";
                    },
                    {
                        "name": "bump";
                        "type": "u8";
                    }
                ];
            };
        },
        {
            "name": "momeConfig";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "migrationAuthority";
                        "type": "publicKey";
                    },
                    {
                        "name": "configAuthority";
                        "type": "publicKey";
                    },
                    {
                        "name": "tradeFee";
                        "type": "publicKey";
                    },
                    {
                        "name": "tradeFeeBps";
                        "type": "u16";
                    },
                    {
                        "name": "creatorRewardBps";
                        "type": "u16";
                    },
                    {
                        "name": "migrationFee";
                        "type": "u64";
                    },
                    {
                        "name": "bondingCurveThreshold";
                        "type": "u64";
                    },
                    {
                        "name": "migrateLpFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "migrateOwnerFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "coefB";
                        "type": "u64";
                    },
                    {
                        "name": "bump";
                        "type": "u8";
                    }
                ];
            };
        },
        {
            "name": "curveAccount";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "bump";
                        "type": "u8";
                    },
                    {
                        "name": "decimals";
                        "type": "u8";
                    },
                    {
                        "name": "vReserveTokenAmount";
                        "type": "u64";
                    },
                    {
                        "name": "vReserveSolAmount";
                        "type": "u64";
                    },
                    {
                        "name": "creatorRewardBps";
                        "type": "u16";
                    },
                    {
                        "name": "migrationFee";
                        "type": "u64";
                    },
                    {
                        "name": "bondingCurveThreshold";
                        "type": "u64";
                    },
                    {
                        "name": "coefB";
                        "type": "u64";
                    },
                    {
                        "name": "mint";
                        "type": "publicKey";
                    },
                    {
                        "name": "creator";
                        "type": "publicKey";
                    },
                    {
                        "name": "curveType";
                        "type": {
                            "defined": "CurveType";
                        };
                    },
                    {
                        "name": "curveStatus";
                        "type": {
                            "defined": "CurveStatus";
                        };
                    },
                    {
                        "name": "createdAt";
                        "type": "u64";
                    },
                    {
                        "name": "airdrop";
                        "type": "bool";
                    },
                    {
                        "name": "airdropRatioBps";
                        "type": "u16";
                    },
                    {
                        "name": "bannerUrl";
                        "type": {
                            "option": "string";
                        };
                    }
                ];
            };
        },
        {
            "name": "tokenSwap";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "isInitialized";
                        "type": "bool";
                    },
                    {
                        "name": "bumpSeed";
                        "type": "u8";
                    },
                    {
                        "name": "tokenProgramId";
                        "type": "publicKey";
                    },
                    {
                        "name": "tokenAAccount";
                        "type": "publicKey";
                    },
                    {
                        "name": "tokenBAccount";
                        "type": "publicKey";
                    },
                    {
                        "name": "poolMint";
                        "type": "publicKey";
                    },
                    {
                        "name": "tokenAMint";
                        "type": "publicKey";
                    },
                    {
                        "name": "tokenBMint";
                        "type": "publicKey";
                    },
                    {
                        "name": "poolFeeAccount";
                        "type": "publicKey";
                    },
                    {
                        "name": "fees";
                        "type": {
                            "defined": "Fees";
                        };
                    },
                    {
                        "name": "curve";
                        "type": {
                            "defined": "SwapCurve";
                        };
                    }
                ];
            };
        }
    ];
    "types": [
        {
            "name": "Fees";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "tradeFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "tradeFeeDenominator";
                        "type": "u64";
                    },
                    {
                        "name": "ownerTradeFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "ownerTradeFeeDenominator";
                        "type": "u64";
                    },
                    {
                        "name": "ownerWithdrawFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "ownerWithdrawFeeDenominator";
                        "type": "u64";
                    },
                    {
                        "name": "hostFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "hostFeeDenominator";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "SwapCurve";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "curveType";
                        "type": "u8";
                    },
                    {
                        "name": "calculator";
                        "type": {
                            "array": [
                                "u8",
                                32
                            ];
                        };
                    }
                ];
            };
        },
        {
            "name": "MomeConfigParams";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "migrationAuthority";
                        "type": "publicKey";
                    },
                    {
                        "name": "configAuthority";
                        "type": "publicKey";
                    },
                    {
                        "name": "tradeFee";
                        "type": "publicKey";
                    },
                    {
                        "name": "tradeFeeBps";
                        "type": "u16";
                    },
                    {
                        "name": "creatorRewardBps";
                        "type": "u16";
                    },
                    {
                        "name": "migrationFee";
                        "type": "u64";
                    },
                    {
                        "name": "migrateLpFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "migrateOwnerFeeNumerator";
                        "type": "u64";
                    },
                    {
                        "name": "bondingCurveThreshold";
                        "type": "u64";
                    },
                    {
                        "name": "coefB";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "TradeParams";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "tradeType";
                        "type": {
                            "defined": "TradeType";
                        };
                    },
                    {
                        "name": "amount";
                        "type": "u64";
                    },
                    {
                        "name": "collateralAmount";
                        "type": "u64";
                    }
                ];
            };
        },
        {
            "name": "MigrateParams";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "curveMint";
                        "type": "publicKey";
                    }
                ];
            };
        },
        {
            "name": "CreateMomeParams";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "name";
                        "type": "string";
                    },
                    {
                        "name": "symbol";
                        "type": "string";
                    },
                    {
                        "name": "uri";
                        "type": "string";
                    },
                    {
                        "name": "curveType";
                        "type": {
                            "defined": "CurveType";
                        };
                    },
                    {
                        "name": "bannerUrl";
                        "type": {
                            "option": "string";
                        };
                    }
                ];
            };
        },
        {
            "name": "CurveType";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "V1";
                    }
                ];
            };
        },
        {
            "name": "CurveStatus";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "Initialized";
                    },
                    {
                        "name": "PrepareMigration";
                    },
                    {
                        "name": "MigrationReady";
                    },
                    {
                        "name": "Migrated";
                    }
                ];
            };
        },
        {
            "name": "TradeType";
            "type": {
                "kind": "enum";
                "variants": [
                    {
                        "name": "Buy";
                    },
                    {
                        "name": "Sell";
                    }
                ];
            };
        }
    ];
    "events": [
        {
            "name": "MigrateInitializeEvent";
            "fields": [
                {
                    "name": "curveAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "curveStatus";
                    "type": {
                        "defined": "CurveStatus";
                    };
                    "index": false;
                },
                {
                    "name": "tokenA";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "tokenB";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "authorityAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "creatorAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "collateralAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "poolTokenAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "poolTokenAccountAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "poolTokenFeeAccountAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "tokenSwapAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "tokenSwapProgramAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "timestamp";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "MigrateCreateEvent";
            "fields": [
                {
                    "name": "curveAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "curveStatus";
                    "type": {
                        "defined": "CurveStatus";
                    };
                    "index": false;
                },
                {
                    "name": "tokenAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "migratedLpTokenAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "migratedPoolAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "migratedLockLpTokenAccountAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "migratedProgramAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "timestamp";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "CurveTradeEvent";
            "fields": [
                {
                    "name": "curveAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "vReserveTokenAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "vReserveSolAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "tradeType";
                    "type": {
                        "defined": "TradeType";
                    };
                    "index": false;
                },
                {
                    "name": "tokenAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "traderTokenAccountAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "paidAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "receivedAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "timestamp";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "CurveStatusEvent";
            "fields": [
                {
                    "name": "curveAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "preStatus";
                    "type": {
                        "defined": "CurveStatus";
                    };
                    "index": false;
                },
                {
                    "name": "postStatus";
                    "type": {
                        "defined": "CurveStatus";
                    };
                    "index": false;
                },
                {
                    "name": "timestamp";
                    "type": "u64";
                    "index": false;
                }
            ];
        },
        {
            "name": "CurveCreateEvent";
            "fields": [
                {
                    "name": "creatorAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "creatorRewardBps";
                    "type": "u16";
                    "index": false;
                },
                {
                    "name": "curveStatus";
                    "type": {
                        "defined": "CurveStatus";
                    };
                    "index": false;
                },
                {
                    "name": "curveAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "curveTokenAccountAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "bondingCurveThreshold";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "migrationFee";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "airdrop";
                    "type": "bool";
                    "index": false;
                },
                {
                    "name": "airdropRatioBps";
                    "type": "u16";
                    "index": false;
                },
                {
                    "name": "coefficientB";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "tokenAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "name";
                    "type": "string";
                    "index": false;
                },
                {
                    "name": "symbol";
                    "type": "string";
                    "index": false;
                },
                {
                    "name": "uri";
                    "type": "string";
                    "index": false;
                },
                {
                    "name": "bannerUrl";
                    "type": {
                        "option": "string";
                    };
                    "index": false;
                },
                {
                    "name": "decimals";
                    "type": "u8";
                    "index": false;
                },
                {
                    "name": "tokenProgramAddress";
                    "type": "publicKey";
                    "index": false;
                },
                {
                    "name": "totalSupplyAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "curveType";
                    "type": {
                        "defined": "CurveType";
                    };
                    "index": false;
                },
                {
                    "name": "vReserveTokenAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "vReserveSolAmount";
                    "type": "u64";
                    "index": false;
                },
                {
                    "name": "timestamp";
                    "type": "u64";
                    "index": false;
                }
            ];
        }
    ];
    "errors": [
        {
            "code": 6000;
            "name": "TradeThresholdMet";
            "msg": "Trade threshold met";
        },
        {
            "code": 6001;
            "name": "EmptySupply";
            "msg": "Input account empty";
        },
        {
            "code": 6002;
            "name": "SlippageExceeded";
            "msg": "Slippage Exceeded";
        },
        {
            "code": 6003;
            "name": "InvalidTokenAddress";
            "msg": "Invalid token address";
        },
        {
            "code": 6004;
            "name": "UnAcceptableCurveType";
            "msg": "Invalid curve type";
        },
        {
            "code": 6005;
            "name": "BannerUrlTooLong";
            "msg": "Max banner url is 200 characters";
        },
        {
            "code": 6006;
            "name": "BumpNotFound";
            "msg": "Bump not found";
        },
        {
            "code": 6007;
            "name": "SwapAccountAlreadyExists";
            "msg": "Swap account already exists";
        },
        {
            "code": 6008;
            "name": "InvalidSwapFeeAccount";
            "msg": "Invalid Swap fee account";
        },
        {
            "code": 6009;
            "name": "UnAcceptableQuoteMint";
            "msg": "Unacceptable quote mint";
        },
        {
            "code": 6010;
            "name": "InvalidCurveStatus";
            "msg": "Invalid curve status passed";
        },
        {
            "code": 6011;
            "name": "NotEnoughFunds";
            "msg": "Not enough funds";
        },
        {
            "code": 6012;
            "name": "InvalidConfigAccount";
            "msg": "Invalid Config Account";
        },
        {
            "code": 6013;
            "name": "InvalidAmmProgramId";
            "msg": "Invalid AMM Program ID";
        },
        {
            "code": 6014;
            "name": "MigrationCriteriaNotMet";
            "msg": "Migration criteria were not met.";
        },
        {
            "code": 6015;
            "name": "InvalidCurve";
            "msg": "This curve can't be used for this trade";
        },
        {
            "code": 6016;
            "name": "CalculationFailure";
            "msg": "Calculation failure";
        },
        {
            "code": 6017;
            "name": "ConversionFailure";
            "msg": "Conversion failure";
        },
        {
            "code": 6018;
            "name": "Overflow";
            "msg": "Overflow";
        },
        {
            "code": 6019;
            "name": "DivideByZero";
            "msg": "Divide by zero";
        },
        {
            "code": 6020;
            "name": "UnAcceptableTotalSupply";
            "msg": "Unacceptable total supply";
        },
        {
            "code": 6021;
            "name": "InvalidTimestampConversion";
            "msg": "Invalid timestamp conversion";
        },
        {
            "code": 6022;
            "name": "TokenSupplyOverflow";
            "msg": "Token supply has overflowed";
        },
        {
            "code": 6023;
            "name": "ConfigNotInitialized";
            "msg": "Config not initialized";
        },
        {
            "code": 6024;
            "name": "UnsupportedTradeType";
            "msg": "Unsupported trade type";
        },
        {
            "code": 6025;
            "name": "InvalidAmount";
            "msg": "invalid amount";
        },
        {
            "code": 6026;
            "name": "InvalidInitConfigAuthority";
            "msg": "init config authority must be signer";
        },
        {
            "code": 6027;
            "name": "ConfigAlreadyInitialized";
            "msg": "config already initialized";
        },
        {
            "code": 6028;
            "name": "InvalidParams";
            "msg": "invalid params";
        },
        {
            "code": 6029;
            "name": "InvalidDecimals";
            "msg": "invalid decimals";
        },
        {
            "code": 6030;
            "name": "ExceededMaxFeeBps";
            "msg": "exceeded max fee bps";
        },
        {
            "code": 6031;
            "name": "InvalidSupportedDecimals";
            "msg": "min_supported_decimal_places must be less than or equal to max_supported_decimal_places";
        },
        {
            "code": 6032;
            "name": "InvalidSupportedTotalSupply";
            "msg": "min_supported_token_supply must be less than or equal to max_supported_token_supply";
        },
        {
            "code": 6033;
            "name": "InvalidCoefB";
            "msg": "coef_b must be greater than equal 20";
        },
        {
            "code": 6034;
            "name": "CommonError";
            "msg": "Common error";
        }
    ];
};
export declare const IDL: Mome;
//# sourceMappingURL=mome-idl.d.ts.map