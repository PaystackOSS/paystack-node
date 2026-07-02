# DedicatedVirtualAccountApi

A collection of endpoints for creating and managing payment accounts for customers

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `dedicatedAccountList` | `GET` | `/dedicated_account` | List dedicated virtual accounts available on your integration. |
| `dedicatedAccountCreate` | `POST` | `/dedicated_account` | Create a dedicated virtual account for an existing customer |
| `dedicatedAccountAssign` | `POST` | `/dedicated_account/assign` | With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer. |
| `dedicatedAccountFetch` | `GET` | `/dedicated_account/{id}` | Get details of a dedicated virtual account on your integration. |
| `dedicatedAccountDeactivate` | `DELETE` | `/dedicated_account/{id}` | Deactivate a dedicated virtual account on your integration. |
| `dedicatedAccountRequery` | `GET` | `/dedicated_account/requery` | Requery Dedicated Virtual Account for new transactions |
| `dedicatedAccountAddSplit` | `POST` | `/dedicated_account/split` | Split a dedicated virtual account transaction with one or more accounts |
| `dedicatedAccountRemoveSplit` | `DELETE` | `/dedicated_account/split` | If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint |
| `dedicatedAccountAvailableProviders` | `GET` | `/dedicated_account/available_providers` | Get available bank providers for a dedicated virtual account |

---

## `dedicatedAccountList`

List dedicated virtual accounts available on your integration.

```ts
async dedicatedAccountList(query?: DedicatedVirtualAccountDedicatedAccountListQuery): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `active` | `boolean` | false | Status of the dedicated virtual account |
| `customer` | `integer` | false | The customer's ID |
| `currency` | `string` | false | The currency of the dedicated virtual account |
| `provider_slug` | `string` | false | The bank's slug in lowercase, without spaces |
| `bank_id` | `string` | false | The bank's ID |
| `perPage` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountList({ /* query params */ });
console.log(result.data);
```

## `dedicatedAccountCreate`

Create a dedicated virtual account for an existing customer

```ts
async dedicatedAccountCreate(payload: DedicatedVirtualAccountDedicatedAccountCreateBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `customer` | `string` | true | The code for the previously created customer |
| `preferred_bank` | `string` | false | The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint |
| `subaccount` | `string` | false | Subaccount code of the account you want to split the transaction with |
| `split_code` | `string` | false | Split code consisting of the lists of accounts you want to split the transaction with |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountCreate({ customer: "customer_value", preferred_bank: "preferred_bank_value" });
console.log(result.data);
```

## `dedicatedAccountAssign`

With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer.

```ts
async dedicatedAccountAssign(payload: DedicatedVirtualAccountDedicatedAccountAssignBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountAssignData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `first_name` | `string` | true | Customer's first name |
| `last_name` | `string` | true | Customer's last name |
| `phone` | `string` | true | Customer's phone name |
| `preferred_bank` | `string` | true | The bank slug for preferred bank. To get a list of available banks, use the List Banks endpoint, passing `pay_with_bank_transfer=true` query parameter |
| `country` | `"NG" \| "GH"` | true | The two letter code country |
| `account_number` | `string` | false | Customer's account number |
| `bvn` | `string` | false | Customer's Bank Verification Number |
| `bank_code` | `string` | false | Customer's bank code |
| `subaccount` | `string` | false | Subaccount code of the account you want to split the transaction with |
| `split_code` | `string` | false | Split code consisting of the lists of accounts you want to split the transaction with |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountAssign({ email: "email_value", first_name: "first_name_value", last_name: "last_name_value", account_number: "account_number_value" });
console.log(result.data);
```

## `dedicatedAccountFetch`

Get details of a dedicated virtual account on your integration.

```ts
async dedicatedAccountFetch(id: string): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | true | ID of dedicated virtual account |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountFetch(id);
console.log(result.data);
```

## `dedicatedAccountDeactivate`

Deactivate a dedicated virtual account on your integration.

```ts
async dedicatedAccountDeactivate(id: string): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountDeactivateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | true | ID of dedicated virtual account |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountDeactivate(id);
console.log(result.data);
```

## `dedicatedAccountRequery`

Requery Dedicated Virtual Account for new transactions

```ts
async dedicatedAccountRequery(query?: DedicatedVirtualAccountDedicatedAccountRequeryQuery): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountRequeryData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `account_number` | `string` | false | Virtual account number to requery |
| `provider_slug` | `string` | false | The bank's slug in lowercase, without spaces. |
| `date` | `string` | false | The day the transfer was made |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountRequery({ /* query params */ });
console.log(result.data);
```

## `dedicatedAccountAddSplit`

Split a dedicated virtual account transaction with one or more accounts

```ts
async dedicatedAccountAddSplit(payload: DedicatedVirtualAccountDedicatedAccountAddSplitBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountAddSplitData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `account_number` | `string` | true | Valid Dedicated virtual account |
| `subaccount` | `string` | false | Subaccount code of the account you want to split the transaction with |
| `split_code` | `string` | false | Split code consisting of the lists of accounts you want to split the transaction with |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountAddSplit({ account_number: "account_number_value", subaccount: "subaccount_value" });
console.log(result.data);
```

## `dedicatedAccountRemoveSplit`

If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint

```ts
async dedicatedAccountRemoveSplit(payload: DedicatedVirtualAccountDedicatedAccountRemoveSplitBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountRemoveSplitData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `account_number` | `string` | true | Valid Dedicated virtual account |

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountRemoveSplit({ account_number: "account_number_value" });
console.log(result.data);
```

## `dedicatedAccountAvailableProviders`

Get available bank providers for a dedicated virtual account

```ts
async dedicatedAccountAvailableProviders(): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountAvailableProvidersData>>;
```

### Example

```ts
const result = await paystack.dedicatedVirtualAccount.dedicatedAccountAvailableProviders();
console.log(result.data);
```
