# SubaccountApi

A collection of endpoints for creating and managing accounts for sharing a transaction with

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/subaccount` | List subaccounts available on your integration |
| `create` | `POST` | `/subaccount` | Create a subacount for a partner |
| `fetch` | `GET` | `/subaccount/{code}` | Get details of a subaccount on your integration |
| `update` | `PUT` | `/subaccount/{code}` | Update a subaccount details on your integration |

---

## `list`

List subaccounts available on your integration

```ts
async list(query?: SubaccountListQuery): Promise<ApiResponse<SubaccountListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |
| `active` | `boolean` | false | Filter by the state of the subaccounts |

### Example

```ts
const result = await paystack.subaccount.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a subacount for a partner

```ts
async create(payload: SubaccountCreateBody): Promise<ApiResponse<SubaccountCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `business_name` | `string` | true | Name of business for subaccount |
| `settlement_bank` | `string` | true | Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. |
| `account_number` | `string` | true | Bank account number |
| `percentage_charge` | `number` | true | Customer's phone number |
| `description` | `string` | false | A description for this subaccount |
| `primary_contact_email` | `string` | false | A contact email for the subaccount |
| `primary_contact_name` | `string` | false | The name of the contact person for this subaccount |
| `primary_contact_phone` | `string` | false | A phone number to call for this subaccount |
| `metadata` | `string` | false | Stringified JSON object of custom data |

### Example

```ts
const result = await paystack.subaccount.create({ business_name: "business_name_value", settlement_bank: "settlement_bank_value", account_number: "account_number_value", description: "description_value" });
console.log(result.data);
```

## `fetch`

Get details of a subaccount on your integration

```ts
async fetch(code: string): Promise<ApiResponse<SubaccountFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The subaccount code you want to fetch |

### Example

```ts
const result = await paystack.subaccount.fetch(code);
console.log(result.data);
```

## `update`

Update a subaccount details on your integration

```ts
async update(code: string, payload: SubaccountUpdateBody): Promise<ApiResponse<SubaccountUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The subaccount code you want to fetch |
| `business_name` | `string` | false | Name of business for subaccount |
| `settlement_bank` | `string` | false | Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. |
| `account_number` | `string` | false | Bank account number |
| `active` | `boolean` | false | Activate or deactivate a subaccount |
| `percentage_charge` | `number` | false | Customer's phone number |
| `description` | `string` | false | A description for this subaccount |
| `primary_contact_email` | `string` | false | A contact email for the subaccount |
| `primary_contact_name` | `string` | false | The name of the contact person for this subaccount |
| `primary_contact_phone` | `string` | false | A phone number to call for this subaccount |
| `metadata` | `string` | false | Stringified JSON object of custom data |

### Example

```ts
const result = await paystack.subaccount.update(code, { business_name: "business_name_value" });
console.log(result.data);
```
