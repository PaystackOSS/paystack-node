# BulkChargeApi

A collection of endpoints for creating and managing multiple recurring payments

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/bulkcharge` | List all bulk charge batches. |
| `initiate` | `POST` | `/bulkcharge` | Charge multiple customers in batches |
| `fetch` | `GET` | `/bulkcharge/{code}` | This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the `total_charges` and `pending_charges` attributes. |
| `charges` | `GET` | `/bulkcharge/{code}/charges` | This endpoint retrieves the charges associated with a specified batch code |
| `pause` | `GET` | `/bulkcharge/pause/{code}` | Pause the processing of a charge batch |
| `resume` | `GET` | `/bulkcharge/resume/{code}` | Resume the processing of a previously paused charge batch |

---

## `list`

List all bulk charge batches.

```ts
async list(query?: BulkChargeListQuery): Promise<ApiResponse<BulkChargeListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The offset to retrieve data from |
| `status` | `string` | false | Filter by the status of the charges |

### Example

```ts
const result = await paystack.bulkCharge.list({ /* query params */ });
console.log(result.data);
```

## `initiate`

Charge multiple customers in batches

```ts
async initiate(payload: BulkChargeInitiateBody): Promise<ApiResponse<BulkChargeInitiateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `body` | `Array<{ authorization: string; amount: number; reference?: string; attempt_partial_debit?: boolean; at_least?: number; metadata?: Record<string, unknown> }>` | true |  |

### Example

```ts
const result = await paystack.bulkCharge.initiate({ body: [] });
console.log(result.data);
```

## `fetch`

This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the `total_charges` and `pending_charges` attributes.

```ts
async fetch(code: string): Promise<ApiResponse<BulkChargeFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The code for the charge whose batches you want to retrieve |

### Example

```ts
const result = await paystack.bulkCharge.fetch(code);
console.log(result.data);
```

## `charges`

This endpoint retrieves the charges associated with a specified batch code

```ts
async charges(code: string, query?: BulkChargeChargesQuery): Promise<ApiResponse<BulkChargeChargesData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | An code for the batch whose charges you want to retrieve |
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The offset to retrieve data from |
| `status` | `string` | false | Filter by the status of the charges |

### Example

```ts
const result = await paystack.bulkCharge.charges(code, { /* query params */ });
console.log(result.data);
```

## `pause`

Pause the processing of a charge batch

```ts
async pause(code: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The batch code for the bulk charge you want to pause |

### Example

```ts
const result = await paystack.bulkCharge.pause(code);
console.log(result.data);
```

## `resume`

Resume the processing of a previously paused charge batch

```ts
async resume(code: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The batch code for the bulk charge you want to pause |

### Example

```ts
const result = await paystack.bulkCharge.resume(code);
console.log(result.data);
```
