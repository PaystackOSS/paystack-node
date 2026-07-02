# TransferRecipientApi

A collection of endpoints for creating and managing beneficiaries that you send money to

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `transferrecipientList` | `GET` | `/transferrecipient` | List transfer recipients available on your integration |
| `transferrecipientCreate` | `POST` | `/transferrecipient` | Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record. |
| `transferrecipientBulk` | `POST` | `/transferrecipient/bulk` | Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record. |
| `transferrecipientFetch` | `GET` | `/transferrecipient/{code}` | Fetch the details of a transfer recipient |
| `transferrecipientUpdate` | `PUT` | `/transferrecipient/{code}` | Update the details of a transfer recipient |
| `transferrecipientDelete` | `DELETE` | `/transferrecipient/{code}` | Delete a transfer recipient (sets the transfer recipient to inactive) |

---

## `transferrecipientList`

List transfer recipients available on your integration

```ts
async transferrecipientList(query?: TransferRecipientTransferrecipientListQuery): Promise<ApiResponse<TransferRecipientTransferrecipientListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `use_cursor` | `boolean` | false | A flag to indicate if cursor based pagination should be used |
| `next` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data |
| `previous` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data |
| `per_page` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |

### Example

```ts
const result = await paystack.transferRecipient.transferrecipientList({ /* query params */ });
console.log(result.data);
```

## `transferrecipientCreate`

Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.

```ts
async transferrecipientCreate(payload: TransferRecipientTransferrecipientCreateBody): Promise<ApiResponse<TransferRecipientTransferrecipientCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `type` | `"nuban" \| "ghipss" \| "mobile_money" \| "basa" \| "authorization"` | true | Recipient Type |
| `name` | `string` | true | The recipient's name according to their account registration. |
| `account_number` | `string` | true | Recipient's bank account number |
| `bank_code` | `string` | true | Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint |
| `description` | `string` | false | A description for this recipient |
| `currency` | `string` | false | Currency for the account receiving the transfer |
| `authorization_code` | `string` | false | An authorization code from a previous transaction |
| `metadata` | `Record<string, unknown>` | false | JSON object of custom data |

### Example

```ts
const result = await paystack.transferRecipient.transferrecipientCreate({ type: "nuban", name: "name_value", account_number: "account_number_value", description: "description_value" });
console.log(result.data);
```

## `transferrecipientBulk`

Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record.

```ts
async transferrecipientBulk(payload: TransferRecipientTransferrecipientBulkBody): Promise<ApiResponse<TransferRecipientTransferrecipientBulkData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `batch` | `Array<{ type: "nuban" \| "ghipss" \| "mobile_money" \| "basa" \| "authorization"; name: string; account_number: string; bank_code: string; description?: string; currency?: string; authorization_code?: string; metadata?: Record<string, unknown> }>` | true | A list of transfer recipient object. |

### Example

```ts
const result = await paystack.transferRecipient.transferrecipientBulk({ batch: [] });
console.log(result.data);
```

## `transferrecipientFetch`

Fetch the details of a transfer recipient

```ts
async transferrecipientFetch(code: string): Promise<ApiResponse<TransferRecipientTransferrecipientFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Transfer recipient code |

### Example

```ts
const result = await paystack.transferRecipient.transferrecipientFetch(code);
console.log(result.data);
```

## `transferrecipientUpdate`

Update the details of a transfer recipient

```ts
async transferrecipientUpdate(code: string, payload: TransferRecipientTransferrecipientUpdateBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Transfer recipient code |
| `name` | `string` | false | Recipient's name |
| `email` | `string` | false | Recipient's email address |

### Example

```ts
const result = await paystack.transferRecipient.transferrecipientUpdate(code, { name: "name_value" });
console.log(result.data);
```

## `transferrecipientDelete`

Delete a transfer recipient (sets the transfer recipient to inactive)

```ts
async transferrecipientDelete(code: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Transfer recipient code |

### Example

```ts
const result = await paystack.transferRecipient.transferrecipientDelete(code);
console.log(result.data);
```
