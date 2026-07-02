# PaymentRequestApi

A collection of endpoints for managing invoices for the payment of goods and services

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/paymentrequest` | List all previously created payment requests to your customers |
| `create` | `POST` | `/paymentrequest` | Create a new payment request by issuing an invoice to a customer |
| `fetch` | `GET` | `/paymentrequest/{id}` | Fetch a previously created payment request |
| `update` | `PUT` | `/paymentrequest/{id}` | Update a previously created payment request |
| `verify` | `GET` | `/paymentrequest/verify/{id}` | Verify the status of a previously created payment request |
| `notify` | `POST` | `/paymentrequest/notify/{id}` | Trigger an email reminder to a customer for a previously created payment request |
| `totals` | `GET` | `/paymentrequest/totals` | Get the metric of all pending and successful payment requests |
| `finalize` | `POST` | `/paymentrequest/finalize/{id}` | Finalise the creation of a draft payment request for a customer |
| `archive` | `POST` | `/paymentrequest/archive/{id}` | Archive a payment request to clean up your records. An archived payment request cannot be verified and will not be returned when listing all previously created payment requests. |

---

## `list`

List all previously created payment requests to your customers

```ts
async list(query?: PaymentRequestListQuery): Promise<ApiResponse<PaymentRequestListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `customer` | `string` | false | Customer ID |
| `status` | `string` | false | Invoice status to filter |
| `currency` | `string` | false | If your integration supports more than one currency, choose the one to filter |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.paymentRequest.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a new payment request by issuing an invoice to a customer

```ts
async create(payload: PaymentRequestCreateBody): Promise<ApiResponse<PaymentRequestCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `customer` | `string` | true | Customer id or code |
| `amount` | `number` | true | Payment request amount. Only useful if line items and tax values are ignored. The endpoint will throw a friendly warning if neither is available. |
| `currency` | `string` | false | Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN |
| `due_date` | `string` | false | ISO 8601 representation of request due date |
| `description` | `string` | false | A short description of the payment request |
| `line_items` | `Array<Record<string, unknown>>` | false | Array of line items |
| `tax` | `Array<Record<string, unknown>>` | false | Array of taxes |
| `send_notification` | `boolean` | false | Indicates whether Paystack sends an email notification to customer. Defaults to true |
| `draft` | `boolean` | false | Indicate if request should be saved as draft. Defaults to false and overrides send_notification |
| `has_invoice` | `boolean` | false | Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed |
| `invoice_number` | `number` | false | Numeric value of invoice. Invoice will start from 1 and auto increment from there.  This field is to help override whatever value Paystack decides. Auto increment for  subsequent invoices continue from this point. |
| `split_code` | `string` | false | The split code of the transaction split. |

### Example

```ts
const result = await paystack.paymentRequest.create({ customer: "customer_value", amount: 0, currency: "currency_value" });
console.log(result.data);
```

## `fetch`

Fetch a previously created payment request

```ts
async fetch(id: string): Promise<ApiResponse<PaymentRequestFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a previously created payment request |

### Example

```ts
const result = await paystack.paymentRequest.fetch(id);
console.log(result.data);
```

## `update`

Update a previously created payment request

```ts
async update(id: string, payload: PaymentRequestUpdateBody): Promise<ApiResponse<PaymentRequestUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a previously created payment request |
| `customer` | `string` | false | Customer id or code |
| `amount` | `number` | false | Payment request amount. Only useful if line items and tax values are ignored. The endpoint will throw a friendly warning if neither is available. |
| `currency` | `string` | false | Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN |
| `due_date` | `string` | false | ISO 8601 representation of request due date |
| `description` | `string` | false | A short description of the payment request |
| `line_items` | `Array<Record<string, unknown>>` | false | Array of line items |
| `tax` | `Array<Record<string, unknown>>` | false | Array of taxes |
| `send_notification` | `boolean` | false | Indicates whether Paystack sends an email notification to customer. Defaults to true |
| `draft` | `boolean` | false | Indicate if request should be saved as draft. Defaults to false and overrides send_notification |
| `has_invoice` | `boolean` | false | Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed |
| `invoice_number` | `number` | false | Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides.  Auto increment for subsequent invoices continue from this point. |
| `split_code` | `string` | false | The split code of the transaction split. |

### Example

```ts
const result = await paystack.paymentRequest.update(id, { customer: "customer_value" });
console.log(result.data);
```

## `verify`

Verify the status of a previously created payment request

```ts
async verify(id: string): Promise<ApiResponse<PaymentRequestVerifyData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a previously created payment request |

### Example

```ts
const result = await paystack.paymentRequest.verify(id);
console.log(result.data);
```

## `notify`

Trigger an email reminder to a customer for a previously created payment request

```ts
async notify(id: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a previously created payment request |

### Example

```ts
const result = await paystack.paymentRequest.notify(id);
console.log(result.data);
```

## `totals`

Get the metric of all pending and successful payment requests

```ts
async totals(): Promise<ApiResponse<PaymentRequestTotalsData>>;
```

### Example

```ts
const result = await paystack.paymentRequest.totals();
console.log(result.data);
```

## `finalize`

Finalise the creation of a draft payment request for a customer

```ts
async finalize(id: string): Promise<ApiResponse<PaymentRequestFinalizeData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a draft payment request |

### Example

```ts
const result = await paystack.paymentRequest.finalize(id);
console.log(result.data);
```

## `archive`

Archive a payment request to clean up your records. An archived payment request cannot be verified and will not be returned when listing all previously created payment requests.

```ts
async archive(id: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a previously created payment request |

### Example

```ts
const result = await paystack.paymentRequest.archive(id);
console.log(result.data);
```
