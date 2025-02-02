
# Mome SDK

Mome SDK is designed for developers who want to automate Mome token transactions. With this SDK, you can easily write transaction programs to view and trade tokens generated by Mome.

## Installation

```bash
yarn add @dexlab-project/mome-sdk
# or
npm install @dexlab-project/mome-sdk
```

## Usage

### Initialization

* If you want to automatically generate an anchor-provider:
  * `WALLET_PATH` is the path to your Solana CLI wallet (e.g., `~/.config/solana/id.json`).

```typescript
const sdk = MomeSDK.init(YOUR_RPC_URL, WALLET_PATH)
```

* If you want to manually set an anchor-provider:

```typescript
const connection = new Connection(YOUR_RPC_URL)
const wallet = NodeWallet.local()

const provider = new AnchorProvider(connection, wallet, {
  commitment: 'confirmed',
})

const sdk = new MomeSDK(provider)
```

### Buy Transaction

```typescript
const token = sdk.getToken('your-token-address')
const result = await token.beginTrade(wallet)
  .buy({
    amount: 100_000_000n, // 0.1 SOL
    slippageBps: 1_500,
  })
  .setComputeUnit({
    computeUnitLimit: 200_000,
    computeUnitPrice: 1_000,
  })
  .transaction({
    blockhashCommitment: 'confirmed',
  })
  .send( // you can use `sendAndConfirm` and `simulate`
    {
      skipPreflight: false,
      preflightCommitment: 'confirmed',
      commitment: 'confirmed',
    })
```

### Sell Transaction

```typescript
const token = sdk.getToken('your-token-address')
const result = await token.beginTrade(wallet)
  .sell({
    amount: 10_000_000_000n, // 10,000 tokens
    slippageBps: 1_500,
  })
  .setComputeUnitPrice(200_000n)
  .transaction({
    blockhashCommitment: 'confirmed',
  })
  .send( // you can use `sendAndConfirm` and `simulate`
    {
      skipPreflight: false,
      preflightCommitment: 'confirmed',
      commitment: 'confirmed',
    })
```

### Parameter Descriptions

| Step                 | Parameter              | Type     | Description                                                                                               |
|----------------------|------------------------|----------|-----------------------------------------------------------------------------------------------------------|
| buy/sell             | `amount`               | `bigint` | Transaction amount                                                                                        |
| buy/sell             | `slippage`             | `number` | Tolerance                                                                                                 |
| setBundle            | `lamports`             | `number` | Optional. Amount to use for Jitto bundling. If `setBundle` is declared without specifying `lamports`, it defaults to 1,000,000. |
| setComputeUnit       | `computeUnitLimit`     | `number` | Optional. Directly sets the Compute Unit.                                                                 |
| setComputeUnit       | `computeUnitPrice`     | `number` | Optional. Directly sets the Compute Unit price.                                                           |
| transaction          | `blockhashCommitment`  | `string` | Optional. Directly sets the blockhashCommitment. (default: 'confirmed')                                   |
| send/SendAndConfirm  | `ConfirmOption`        | `string` | See the Solana Web3.js documentation for more information.                                                |
| simulate             | `commitment`           | `string` | Optional. Directly sets the commitment. (default: 'confirmed')                                            |

### Using Transaction and Instruction Objects

If you want to create Instruction and Transaction objects and send them separately, you can do so as follows:

```typescript
const buyTrade = token
  .beginTrade()
  .buy({
    amount: 100_000_000n, // 0.1 SOL
    slippageBps: 1_500,
  })

const ix = await buyTrade.getTradeInstruction()
const tx = await buyTrade.getTransaction({ blockhashCommitment: 'confirmed' })
```

### Event Handling

The Mome SDK provides functionality for handling events.

```typescript
const sdk = MomeSDK.init(RPC_URL, defaultConfigPath)
const option = {
  commitment: 'confirmed',
}
const listener = sdk.createNewListener(option) // option is optional. Default is { commitment: 'confirmed' }
listener.onEvent('CurveTradeEvent', (event) => {
  console.log('event received')
})

process.on('SIGINT', () => {
  listener.close()
})
```

* The first argument of `listener.onEvent()` is the name of the event to subscribe to.
* The second argument is the callback function to execute when the event occurs.
* Event names:
  * `CurveCreateEvent`: A token is created.
  * `MigrateInitializeEvent`: Token migration is initialized.
  * `MigrateCreateEvent`: A migration pool is created.
  * `CurveTradeEvent`: A buy or sell transaction occurs.
  * `CurveStatusEvent`: The status of a token is changed.

### Using the Mome API

You can use the MOME API to view token information.

#### Usage
```typescript
const momeApi = new MomeApi()
const list = await momeApi.listToken(1, 10, 'createdAt', 'desc')
const token = await momeApi.getToken('your-token-address')
```
* listToken
  * parameters
    * `page`: Page number (starting from 1)
    * `size`: Page size (1 to 100)
    * `sort`: Sorting criteria `createdAt | lastCommentedAt | marketCap`
    * `order`: Sorting direction `asc | desc`
  * response
    * TokenResponse
* getToken
  * parameters
    * `address`: Token address
  * response
    * TokenResponse
