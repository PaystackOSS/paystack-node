# BankApi

A collection of endpoints for managing bank details

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/bank` | List banks supported on Paystack |
| `resolveAccountNumber` | `GET` | `/bank/resolve` | Resolve an account number to confirm the name associated with it |
| `validateAccountNumber` | `POST` | `/bank/validate` | Confirm the authenticity of a customer's account number before sending money |

---

## `list`

List banks supported on Paystack

```ts
async list(query?: BankListQuery): Promise<ApiResponse<BankListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `country` | `string` | false | The country from which to obtain the list of supported banks |
| `currency` | `string` | false | The country from which to obtain the list of supported banks |
| `use_cursor` | `boolean` | false | A flag to indicate if cursor based pagination should be used |
| `perPage` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |
| `next` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data |
| `previous` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data |
| `pay_with_bank_transfer` | `boolean` | false | A flag to filter for available banks a customer can make a transfer to complete a payment |
| `pay_with_bank` | `boolean` | false | A flag to filter for banks a customer can pay directly from |
| `enabled_for_verification` | `boolean` | false | A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the `currency` or `country` filter. |
| `gateway` | `string` | false | The type of gateway for a Nigerian bank |
| `type` | `string` | false | Type of financial channel |
| `include_nip_sort_code` | `boolean` | false | A flag that returns Nigerian banks with their NIP institution code. The returned value can be used in identifying institutions on NIP. |

### Example

```ts
const result = await paystack.bank.list({ /* query params */ });
console.log(result.data);
```

## `resolveAccountNumber`

Resolve an account number to confirm the name associated with it

```ts
async resolveAccountNumber(query?: BankResolveAccountNumberQuery): Promise<ApiResponse<BankResolveAccountNumberData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `account_number` | `integer` | false | The account number of interest |
| `bank_code` | `integer` | false | The bank code associated with the account number |

### Example

```ts
const result = await paystack.bank.resolveAccountNumber({ /* query params */ });
console.log(result.data);
```

## `validateAccountNumber`

Confirm the authenticity of a customer's account number before sending money

```ts
async validateAccountNumber(payload: BankValidateAccountNumberBody): Promise<ApiResponse<BankValidateAccountNumberData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `account_name` | `string` | true | Customer's first and last name registered with their bank |
| `account_number` | `string` | true | Customer's account number |
| `account_type` | `"personal" \| "business"` | true | The type of the customer's account number |
| `bank_code` | `string` | true | The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint |
| `country_code` | `string` | true | The two digit ISO code of the customer’s bank |
| `document_type` | `"identityNumber" \| "passportNumber" \| "businessRegistrationNumber"` | true | Customer’s mode of identity |
| `document_number` | `string` | false | Customer’s mode of identity number |

### Example

```ts
const result = await paystack.bank.validateAccountNumber({ account_name: "account_name_value", account_number: "account_number_value", account_type: "personal", document_number: "document_number_value" });
console.log(result.data);
```
