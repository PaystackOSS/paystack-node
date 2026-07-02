# Paystack Node.js SDK

> The official Node.js SDK for the Paystack API: fully typed, dual ESM/CJS, zero dependencies.

[![npm version](https://img.shields.io/npm/v/@paystack/paystack-sdk)](https://www.npmjs.com/package/@paystack/paystack-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js ≥ 18](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)

---

## Requirements

- **Node.js 18 or later** - the SDK uses the native `fetch` API available since Node 18
- No additional runtime dependencies

---

## Installation

```bash
npm install @paystack/paystack-sdk
# or
pnpm add @paystack/paystack-sdk
```

---

## Quick Start

#### ESM + TypeScript

```ts
import { Paystack } from "@paystack/paystack-sdk";

const paystack = new Paystack({ secretKey: process.env.PAYSTACK_SECRET_KEY! });

const result = await paystack.transaction.initialize({
  amount: 100_000, // kobo
  email: "customer@example.com",
});

console.log(result.data.authorization_url);
```

#### ESM + JavaScript

```js
import { Paystack } from "@paystack/paystack-sdk";

const paystack = new Paystack({ secretKey: process.env.PAYSTACK_SECRET_KEY });

const result = await paystack.transaction.initialize({
  amount: 100_000,
  email: "customer@example.com",
});

console.log(result.data.authorization_url);
```

#### CJS + TypeScript

```ts
// TypeScript with "module": "CommonJS" - tsc compiles import to require()
import { Paystack } from "@paystack/paystack-sdk";

const paystack = new Paystack({ secretKey: process.env.PAYSTACK_SECRET_KEY! });

const result = await paystack.transaction.initialize({
  amount: 100_000,
  email: "customer@example.com",
});

console.log(result.data.authorization_url);
```

#### CJS + JavaScript

```js
const { Paystack } = require("@paystack/paystack-sdk");

const paystack = new Paystack({ secretKey: process.env.PAYSTACK_SECRET_KEY });

paystack.transaction
  .initialize({ amount: 100_000, email: "customer@example.com" })
  .then((result) => console.log(result.data.authorization_url));
```

---

## Configuration

Pass options to the `Paystack` constructor:

```ts
const paystack = new Paystack({
  secretKey: "sk_live_xxxxxxxxxxxx", // required
});
```

| Option | Type | Required | Default |
|---|---|---|---|
| `secretKey` | `string` | ✅ | N/A |

---

## Typed Responses

Every method returns `Promise<ApiResponse<T>>`, mirroring the Paystack API envelope:

```ts
interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T; // fully typed per endpoint
}
```

The `data` field is typed to the exact response shape for each endpoint:

```ts
const { data } = await paystack.transaction.initialize({ amount: 100_000, email: "..." });
//      ^? TransactionInitializeData - { authorization_url, access_code, reference }
```

Import model types directly when you need them explicitly:

```ts
import type { TransactionInitializeBody, TransactionInitializeData } from "@paystack/paystack-sdk/models";
```

---

## Typed Query Parameters

List and filter endpoints accept a strongly-typed query object instead of a generic record:

```ts
import type { TransactionListQuery } from "@paystack/paystack-sdk/models";

const query: TransactionListQuery = {
  per_page: 20,
  page: 1,
  status: "success", // "success" | "failed" | "abandoned" | "reversed"
  from: "2024-01-01",
  to: "2024-12-31",
};

const transactions = await paystack.transaction.list(query);
```

---

## Error Handling

Failed API calls throw an `ApiError` with the HTTP status, status text, and the parsed response body:

```ts
import { Paystack, ApiError } from "@paystack/paystack-sdk";

try {
  const result = await paystack.transaction.initialize({
    amount: 100_000,
    email: "customer@example.com",
  });
} catch (err) {
  if (err instanceof ApiError) {
    console.error(err.status);     // HTTP status code, e.g. 400
    console.error(err.statusText); // e.g. "Bad Request"
    console.error(err.payload);    // parsed JSON response body
  }
}
```

Requests that exceed the SDK timeout throw a native `DOMException` with `name: "AbortError"`.

---

## API Reference

The SDK exposes one property per API resource on the `Paystack` instance.

| Resource | Property | Description | Methods |
|---|---|---|---|
| [TransactionApi](./docs/transaction.md) | `paystack.transaction` | A collection of endpoints for managing payments | 9 |
| [ChargeApi](./docs/charge.md) | `paystack.charge` | A collection of endpoints for configuring and managing the payment channels when initiating a payment | 7 |
| [BulkChargeApi](./docs/bulkCharge.md) | `paystack.bulkCharge` | A collection of endpoints for creating and managing multiple recurring payments | 6 |
| [SubaccountApi](./docs/subaccount.md) | `paystack.subaccount` | A collection of endpoints for creating and managing accounts for sharing a transaction with | 4 |
| [SplitApi](./docs/split.md) | `paystack.split` | A collection of endpoints for spliting a transaction and managing the splits | 6 |
| [TerminalApi](./docs/terminal.md) | `paystack.terminal` | A collection of endpoints for building delightful in-person payment experiences | 8 |
| [VirtualTerminalApi](./docs/virtualTerminal.md) | `paystack.virtualTerminal` | A collection of endpoints for building in-person payments without a physical terminal | 9 |
| [CustomerApi](./docs/customer.md) | `paystack.customer` | A collection of endpoints for creating and managing customers on an integration | 12 |
| [DirectDebitApi](./docs/directDebit.md) | `paystack.directDebit` | A collection of endpoints for managing Direct Debit | 2 |
| [DedicatedVirtualAccountApi](./docs/dedicatedVirtualAccount.md) | `paystack.dedicatedVirtualAccount` | A collection of endpoints for creating and managing payment accounts for customers | 9 |
| [ApplePayApi](./docs/applePay.md) | `paystack.applePay` | A collection of endpoints for managing application's top-level domain or subdomain accepting payment via Apple Pay | 3 |
| [PlanApi](./docs/plan.md) | `paystack.plan` | A collection of endpoints for creating and managing recurring payment configuration | 4 |
| [SubscriptionApi](./docs/subscription.md) | `paystack.subscription` | A collection of endpoints for creating and managing recurring payments | 7 |
| [TransferRecipientApi](./docs/transferRecipient.md) | `paystack.transferRecipient` | A collection of endpoints for creating and managing beneficiaries that you send money to | 6 |
| [TransferApi](./docs/transfer.md) | `paystack.transfer` | A collection of endpoints for automating sending money to beneficiaries | 11 |
| [BalanceApi](./docs/balance.md) | `paystack.balance` | A collection of endpoints gaining insights into the amount on an integration | 2 |
| [PaymentRequestApi](./docs/paymentRequest.md) | `paystack.paymentRequest` | A collection of endpoints for managing invoices for the payment of goods and services | 9 |
| [ProductApi](./docs/product.md) | `paystack.product` | A collection of endpoints for creating and managing inventories | 5 |
| [StorefrontApi](./docs/storefront.md) | `paystack.storefront` | A collection of endpoints for creating and managing storefronts | 11 |
| [OrderApi](./docs/order.md) | `paystack.order` | A collection of endpoints for creating and managing orders | 5 |
| [PageApi](./docs/page.md) | `paystack.page` | A collection of endpoints for creating and managing links for the collection of payment for products | 6 |
| [SettlementApi](./docs/settlement.md) | `paystack.settlement` | A collection of endpoints for gaining insights into payouts | 2 |
| [IntegrationApi](./docs/integration.md) | `paystack.integration` | A collection of endpoints for managing some settings on an integration | 2 |
| [RefundApi](./docs/refund.md) | `paystack.refund` | A collection of endpoints for creating and managing transaction reimbursement | 4 |
| [DisputeApi](./docs/dispute.md) | `paystack.dispute` | A collection of endpoints for managing transactions complaint made by customers | 8 |
| [BankApi](./docs/bank.md) | `paystack.bank` | A collection of endpoints for managing bank details | 3 |
| [MiscellaneousApi](./docs/miscellaneous.md) | `paystack.miscellaneous` | A collection of endpoints that provides utility functions | 3 |

Detailed method signatures, parameters, and response types for each resource are documented in [`docs/`](./docs/).

---

## Contributing

> ⚠️ **This SDK is auto-generated** from the Paystack OpenAPI specification. Do not edit files in `src/` directly - they will be overwritten on the next generation run.

To propose a change to an API method, request body, response type, or query parameter, open an issue or pull request against the [Paystack OpenAPI specification](https://github.com/PaystackOSS/openapi).

Bug reports and documentation improvements for this SDK are welcome via [GitHub Issues](../../issues).

---

## License

MIT © Paystack
