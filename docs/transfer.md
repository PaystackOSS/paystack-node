# TransferApi

A collection of endpoints for automating sending money to beneficiaries

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/transfer` | List the transfers made on your integration |
| `initiate` | `POST` | `/transfer` | Send money to your customers |
| `finalize` | `POST` | `/transfer/finalize_transfer` | Finalize an initiated transfer |
| `bulk` | `POST` | `/transfer/bulk` | Batch multiple transfers in a single request. You need to disable the Transfers OTP requirement to use this endpoint. |
| `fetch` | `GET` | `/transfer/{code}` | Get details of a transfer on your integration |
| `verify` | `GET` | `/transfer/verify/{reference}` | Verify the status of a transfer on your integration |
| `exportTransfer` | `GET` | `/transfer/export` | Export a list of transfers carried out on your integration |
| `resendOtp` | `POST` | `/transfer/resend_otp` | Generates and send a new OTP to customer in the event they are having trouble receiving one. |
| `disableOtp` | `POST` | `/transfer/disable_otp` | This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request. |
| `disableOtpFinalize` | `POST` | `/transfer/disable_otp_finalize` | Finalize the request to disable OTP on your transfers |
| `enableOtp` | `POST` | `/transfer/enable_otp` | In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required. |

---

## `list`

List the transfers made on your integration

```ts
async list(query?: TransferListQuery): Promise<ApiResponse<TransferListData>>;
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
| `recipient` | `string` | false | Filter transfer by the recipient code |
| `status` | `string` | false | Filter transfer by status |

### Example

```ts
const result = await paystack.transfer.list({ /* query params */ });
console.log(result.data);
```

## `initiate`

Send money to your customers

```ts
async initiate(payload: TransferInitiateBody): Promise<ApiResponse<TransferInitiateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `amount` | `number` | true | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. |
| `recipient` | `string` | true | The transfer recipient's code |
| `reference` | `string` | true | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed. |
| `reason` | `string` | false | The reason or narration for the transfer. |
| `source` | `string` | true | The source of funds to send from |
| `currency` | `"NGN" \| "ZAR" \| "KES" \| "GHS"` | false | Specify the currency of the transfer. |

### Example

```ts
const result = await paystack.transfer.initiate({ amount: 0, recipient: "recipient_value", reference: "reference_value", reason: "reason_value" });
console.log(result.data);
```

## `finalize`

Finalize an initiated transfer

```ts
async finalize(payload: TransferFinalizeBody): Promise<ApiResponse<TransferFinalizeData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `transfer_code` | `string` | true | The transfer code you want to finalize |
| `otp` | `string` | true | OTP sent to business phone to verify transfer |

### Example

```ts
const result = await paystack.transfer.finalize({ transfer_code: "transfer_code_value", otp: "otp_value" });
console.log(result.data);
```

## `bulk`

Batch multiple transfers in a single request. You need to disable the Transfers OTP requirement to use this endpoint.

```ts
async bulk(payload: TransferBulkBody): Promise<ApiResponse<TransferBulkData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `source` | `string` | true | The source of funds for the transfer. |
| `currency` | `"NGN" \| "ZAR" \| "KES" \| "GHS"` | false | Specify the currency of the transfer. |
| `transfers` | `Array<{ amount: number; recipient: string; reference: string; reason?: string }>` | true | A list of transfer object |

### Example

```ts
const result = await paystack.transfer.bulk({ source: "source_value", transfers: [], currency: "NGN" });
console.log(result.data);
```

## `fetch`

Get details of a transfer on your integration

```ts
async fetch(code: string): Promise<ApiResponse<TransferFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Transfer code |

### Example

```ts
const result = await paystack.transfer.fetch(code);
console.log(result.data);
```

## `verify`

Verify the status of a transfer on your integration

```ts
async verify(reference: string): Promise<ApiResponse<TransferVerifyData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `reference` | `string` | true | Transfer reference |

### Example

```ts
const result = await paystack.transfer.verify(reference);
console.log(result.data);
```

## `exportTransfer`

Export a list of transfers carried out on your integration

```ts
async exportTransfer(query?: TransferExportTransferQuery): Promise<ApiResponse<TransferExportTransferData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `recipient` | `string` | false | Export transfer by the recipient code |
| `status` | `string` | false | Export transfer by status |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.transfer.exportTransfer({ /* query params */ });
console.log(result.data);
```

## `resendOtp`

Generates and send a new OTP to customer in the event they are having trouble receiving one.

```ts
async resendOtp(payload: TransferResendOtpBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `transfer_code` | `string` | true | The transfer code that requires an OTP validation |
| `reason` | `"disable_otp" \| "resend_otp" \| "transfer"` | true | Specify the flag to indicate the purpose of the OTP |

### Example

```ts
const result = await paystack.transfer.resendOtp({ transfer_code: "transfer_code_value", reason: "disable_otp" });
console.log(result.data);
```

## `disableOtp`

This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. No arguments required. You will get an OTP to complete the request.

```ts
async disableOtp(): Promise<ApiResponse<unknown>>;
```

### Example

```ts
const result = await paystack.transfer.disableOtp();
console.log(result.data);
```

## `disableOtpFinalize`

Finalize the request to disable OTP on your transfers

```ts
async disableOtpFinalize(payload: TransferDisableOtpFinalizeBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `otp` | `string` | true | OTP sent to business phone to verify disabling OTP requirement |

### Example

```ts
const result = await paystack.transfer.disableOtpFinalize({ otp: "otp_value" });
console.log(result.data);
```

## `enableOtp`

In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.

```ts
async enableOtp(): Promise<ApiResponse<unknown>>;
```

### Example

```ts
const result = await paystack.transfer.enableOtp();
console.log(result.data);
```
