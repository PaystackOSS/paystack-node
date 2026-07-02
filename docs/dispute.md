# DisputeApi

A collection of endpoints for managing transactions complaint made by customers

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/dispute` | List transaction disputes filed by customers |
| `fetch` | `GET` | `/dispute/{id}` | Fetch a transaction dispute |
| `update` | `PUT` | `/dispute/{id}` | Update a transaction dispute |
| `uploadUrl` | `GET` | `/dispute/{id}/upload_url` | Get the URL to upload a dispute evidence |
| `download` | `GET` | `/dispute/export` | Export the disputes available on your integration |
| `transaction` | `GET` | `/dispute/transaction/{id}` | List all disputes filed for a transaction |
| `resolve` | `PUT` | `/dispute/{id}/resolve` | Resolve a transaction dispute |
| `evidence` | `POST` | `/dispute/{id}/evidence` | Provide evidence for a dispute |

---

## `list`

List transaction disputes filed by customers

```ts
async list(query?: DisputeListQuery): Promise<ApiResponse<DisputeListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `status` | `string` | false | Dispute status |
| `transaction` | `string` | false | Transaction ID |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.dispute.list({ /* query params */ });
console.log(result.data);
```

## `fetch`

Fetch a transaction dispute

```ts
async fetch(id: string): Promise<ApiResponse<DisputeFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the dispute |

### Example

```ts
const result = await paystack.dispute.fetch(id);
console.log(result.data);
```

## `update`

Update a transaction dispute

```ts
async update(id: string, payload: DisputeUpdateBody): Promise<ApiResponse<DisputeUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the dispute |
| `refund_amount` | `number` | true | The amount to refund, in the subunit of your currency |
| `uploaded_filename` | `string` | false | Filename of attachment returned via response from the Dispute upload URL |

### Example

```ts
const result = await paystack.dispute.update(id, { refund_amount: 0, uploaded_filename: "uploaded_filename_value" });
console.log(result.data);
```

## `uploadUrl`

Get the URL to upload a dispute evidence

```ts
async uploadUrl(id: string): Promise<ApiResponse<DisputeUploadUrlData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the dispute |

### Example

```ts
const result = await paystack.dispute.uploadUrl(id);
console.log(result.data);
```

## `download`

Export the disputes available on your integration

```ts
async download(query?: DisputeDownloadQuery): Promise<ApiResponse<DisputeDownloadData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `status` | `string` | false |  |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.dispute.download({ /* query params */ });
console.log(result.data);
```

## `transaction`

List all disputes filed for a transaction

```ts
async transaction(id: string): Promise<ApiResponse<DisputeTransactionData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the transaction |

### Example

```ts
const result = await paystack.dispute.transaction(id);
console.log(result.data);
```

## `resolve`

Resolve a transaction dispute

```ts
async resolve(id: string, payload: DisputeResolveBody): Promise<ApiResponse<DisputeResolveData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the dispute |
| `resolution` | `string` | true | Dispute resolution. Accepted values, merchant-accepted, declined |
| `message` | `string` | true | Reason for resolving |
| `refund_amount` | `number` | true | The amount to refund, in the subunit of your integration currency |
| `uploaded_filename` | `string` | true | Filename of attachment returned via response from the Dispute upload URL |
| `evidence` | `number` | false | Evidence Id for fraud claims |

### Example

```ts
const result = await paystack.dispute.resolve(id, { resolution: "resolution_value", message: "message_value", refund_amount: 0, evidence: 0 });
console.log(result.data);
```

## `evidence`

Provide evidence for a dispute

```ts
async evidence(id: string, payload: DisputeEvidenceBody): Promise<ApiResponse<DisputeEvidenceData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the dispute |
| `customer_email` | `string` | true | Customer email |
| `customer_name` | `string` | true | Customer name |
| `customer_phone` | `string` | true | Customer mobile number |
| `service_details` | `string` | true | Details of service offered |
| `delivery_address` | `string` | false | Delivery address |
| `delivery_date` | `string` | false | ISO 8601 representation of delivery date (YYYY-MM-DD) |

### Example

```ts
const result = await paystack.dispute.evidence(id, { customer_email: "customer_email_value", customer_name: "customer_name_value", customer_phone: "customer_phone_value", delivery_address: "delivery_address_value" });
console.log(result.data);
```
