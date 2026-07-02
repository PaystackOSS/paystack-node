# RefundApi

A collection of endpoints for creating and managing transaction reimbursement

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/refund` | List previously created refunds |
| `create` | `POST` | `/refund` | Initiate a refund for a previously completed transaction |
| `retry` | `POST` | `/refund/retry_with_customer_details/{id}` | Retry a refund with a `needs-attention` status by providing the bank account details of a customer. |
| `fetch` | `GET` | `/refund/{id}` | Get a previously created refund |

---

## `list`

List previously created refunds

```ts
async list(query?: RefundListQuery): Promise<ApiResponse<RefundListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.refund.list({ /* query params */ });
console.log(result.data);
```

## `create`

Initiate a refund for a previously completed transaction

```ts
async create(payload: RefundCreateBody): Promise<ApiResponse<RefundCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `transaction` | `string` | true | The reference of a previosuly completed transaction |
| `amount` | `number` | false | Amount to be refunded to the customer. It cannot be more than the original transaction amount |
| `currency` | `"GHS" \| "KES" \| "NGN" \| "USD" \| "ZAR"` | false | Three-letter ISO currency |
| `customer_note` | `string` | false | Customer reason |
| `merchant_note` | `string` | false | Merchant reason |

### Example

```ts
const result = await paystack.refund.create({ transaction: "transaction_value", amount: 0 });
console.log(result.data);
```

## `retry`

Retry a refund with a `needs-attention` status by providing the bank account details of a customer.

```ts
async retry(id: string, payload: RefundRetryBody): Promise<ApiResponse<RefundRetryData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The identifier of the refund |
| `refund_account_details` | `{ currency: string; account_number: string; bank_id: string }` | true | An object that contains the customer’s account details for refund |

### Example

```ts
const result = await paystack.refund.retry(id, { refund_account_details: {} });
console.log(result.data);
```

## `fetch`

Get a previously created refund

```ts
async fetch(id: string): Promise<ApiResponse<RefundFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The identifier of the refund |

### Example

```ts
const result = await paystack.refund.fetch(id);
console.log(result.data);
```
