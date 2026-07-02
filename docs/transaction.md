# TransactionApi

A collection of endpoints for managing payments

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `initialize` | `POST` | `/transaction/initialize` | Create a new transaction |
| `chargeAuthorization` | `POST` | `/transaction/charge_authorization` | Charge all authorizations marked as reusable with this endpoint whenever you need to receive payments |
| `partialDebit` | `POST` | `/transaction/partial_debit` | Retrieve part of a payment from a customer |
| `verify` | `GET` | `/transaction/verify/{reference}` | Verify a previously initiated transaction using it's reference |
| `list` | `GET` | `/transaction` | List transactions that has occurred on your integration |
| `fetch` | `GET` | `/transaction/{id}` | Fetch a transaction to get its details |
| `timeline` | `GET` | `/transaction/timeline/{id}` | Fetch the steps taken from the initiation to the completion of a transaction |
| `totals` | `GET` | `/transaction/totals` | Get the total amount of all transactions |
| `export_` | `GET` | `/transaction/export` | Download transactions that occurred on your integration for a specific timeframe |

---

## `initialize`

Create a new transaction

```ts
async initialize(payload: TransactionInitializeBody): Promise<ApiResponse<TransactionInitializeData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `amount` | `number` | true | Amount should be in smallest denomination of the currency. |
| `currency` | `"GHS" \| "KES" \| "NGN" \| "ZAR" \| "USD"` | false | List of all support currencies |
| `reference` | `string` | false | Unique transaction reference. Only -, ., = and alphanumeric characters allowed. |
| `channels` | `Array<"apple_pay" \| "bank" \| "bank_transfer" \| "capitec_pay" \| "card" \| "eft" \| "mobile_money" \| "payattitude" \| "qr" \| "ussd">` | false | An array of payment channels to control what channels you want to make available to the user to make a payment with |
| `callback_url` | `string` | false | Fully qualified url, e.g. https://example.com/ to redirect your customers to after a successful payment. Use this to override the callback url provided on the dashboard for this transaction |
| `plan` | `string` | false | If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount |
| `invoice_limit` | `number` | false | Number of times to charge customer during subscription to plan |
| `split_code` | `string` | false | The split code of the transaction split |
| `split` | `{ name: string; type: "percentage" \| "flat"; subaccounts: Array<{ subaccount?: string; share?: number }>; currency: "NGN" \| "GHS" \| "ZAR" \| "USD"; bearer_type?: "subaccount" \| "account" \| "all-proportional" \| "all"; bearer_subaccount?: string }` | false | Split configuration for transactions |
| `subaccount` | `string` | false | The code for the subaccount that owns the payment |
| `transaction_charge` | `string` | false | A flat fee to charge the subaccount for a transaction. This overrides the split percentage set when the subaccount was created |
| `bearer` | `"account" \| "subaccount"` | false | The bearer of the transaction charge |
| `label` | `string` | false | Used to replace the email address shown on the Checkout |
| `metadata` | `Record<string, unknown>` | false | JSON object of custom data |

### Example

```ts
const result = await paystack.transaction.initialize({ email: "email_value", amount: 0, currency: "GHS" });
console.log(result.data);
```

## `chargeAuthorization`

Charge all authorizations marked as reusable with this endpoint whenever you need to receive payments

```ts
async chargeAuthorization(payload: TransactionChargeAuthorizationBody): Promise<ApiResponse<TransactionChargeAuthorizationData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `amount` | `number` | true | Amount in the lower denomination of your currency |
| `authorization_code` | `string` | true | Valid authorization code to charge |
| `reference` | `string` | false | Unique transaction reference. Only -, ., = and alphanumeric characters allowed. |
| `currency` | `"GHS" \| "KES" \| "NGN" \| "ZAR" \| "USD"` | false | List of all support currencies |
| `split_code` | `string` | false | The split code of the transaction split |
| `split` | `{ name: string; type: "percentage" \| "flat"; subaccounts: Array<{ subaccount?: string; share?: number }>; currency: "NGN" \| "GHS" \| "ZAR" \| "USD"; bearer_type?: "subaccount" \| "account" \| "all-proportional" \| "all"; bearer_subaccount?: string }` | false | Split configuration for transactions |
| `subaccount` | `string` | false | The code for the subaccount that owns the payment |
| `transaction_charge` | `string` | false | A flat fee to charge the subaccount for a transaction. This overrides the split percentage set when the subaccount was created |
| `bearer` | `"account" \| "subaccount"` | false | The bearer of the transaction charge |
| `metadata` | `string` | false | Stringified JSON object of custom data |
| `queue` | `boolean` | false | If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. |

### Example

```ts
const result = await paystack.transaction.chargeAuthorization({ email: "email_value", amount: 0, authorization_code: "authorization_code_value", reference: "reference_value" });
console.log(result.data);
```

## `partialDebit`

Retrieve part of a payment from a customer

```ts
async partialDebit(payload: TransactionPartialDebitBody): Promise<ApiResponse<TransactionPartialDebitData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `amount` | `number` | true | Specified in the lowest denomination of your currency |
| `authorization_code` | `string` | true | Valid authorization code to charge |
| `currency` | `"GHS" \| "KES" \| "NGN" \| "ZAR" \| "USD"` | true | List of all support currencies |
| `at_least` | `string` | false | Minimum amount to charge |
| `reference` | `string` | false | Unique transaction reference. Only -, ., = and alphanumeric characters allowed. |

### Example

```ts
const result = await paystack.transaction.partialDebit({ email: "email_value", amount: 0, authorization_code: "authorization_code_value", at_least: "at_least_value" });
console.log(result.data);
```

## `verify`

Verify a previously initiated transaction using it's reference

```ts
async verify(reference: string): Promise<ApiResponse<TransactionVerifyData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `reference` | `string` | true | The transaction reference to verify |

### Example

```ts
const result = await paystack.transaction.verify(reference);
console.log(result.data);
```

## `list`

List transactions that has occurred on your integration

```ts
async list(query?: TransactionListQuery): Promise<ApiResponse<TransactionListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `use_cursor` | `boolean` | false | A flag to indicate if cursor based pagination should be used |
| `next` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data |
| `previous` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data |
| `per_page` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |
| `status` | `string` | false | Filter transaction by status |
| `source` | `string` | false | The origin of the payment |
| `terminal_id` | `string` | false | Filter transactions by a terminal ID |
| `virtual_account_number` | `string` | false | Filter transactions by a virtual account number |
| `customer_code` | `string` | false | Filter transactions by a customer code |
| `amount` | `integer` | false | Filter transactions by a specific amount |
| `settlement` | `integer` | false | The settlement ID to filter for settled transactions |
| `channel` | `string` | false | The payment method the customer used to complete the transaction |
| `subaccount_code` | `string` | false | Filter transaction by subaccount code |
| `split_code` | `string` | false | Filter transaction by split code |

### Example

```ts
const result = await paystack.transaction.list({ /* query params */ });
console.log(result.data);
```

## `fetch`

Fetch a transaction to get its details

```ts
async fetch(id: string): Promise<ApiResponse<TransactionFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The ID of the transaction to fetch |

### Example

```ts
const result = await paystack.transaction.fetch(id);
console.log(result.data);
```

## `timeline`

Fetch the steps taken from the initiation to the completion of a transaction

```ts
async timeline(id: string): Promise<ApiResponse<TransactionTimelineData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The ID of the transaction to fetch |

### Example

```ts
const result = await paystack.transaction.timeline(id);
console.log(result.data);
```

## `totals`

Get the total amount of all transactions

```ts
async totals(query?: TransactionTotalsQuery): Promise<ApiResponse<TransactionTotalsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.transaction.totals({ /* query params */ });
console.log(result.data);
```

## `export_`

Download transactions that occurred on your integration for a specific timeframe

```ts
async export_(query?: TransactionExportQuery): Promise<ApiResponse<TransactionExportData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |
| `status` | `string` | false | Filter by the status of the transaction |
| `customer` | `number` | false | Filter by customer ID |
| `subaccount_code` | `string` | false | Filter by subaccount code |
| `settlement` | `integer` | false | Filter by the settlement ID |

### Example

```ts
const result = await paystack.transaction.export_({ /* query params */ });
console.log(result.data);
```
