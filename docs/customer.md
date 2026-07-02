# CustomerApi

A collection of endpoints for creating and managing customers on an integration

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/customer` | List customers on your integration |
| `create` | `POST` | `/customer` | Create a customer on your integration |
| `fetch` | `GET` | `/customer/{code}` | Get details of a customer on your integration. |
| `update` | `PUT` | `/customer/{code}` | Update a customer's details on your integration |
| `riskAction` | `POST` | `/customer/set_risk_action` | Set customer's risk action by whitelisting or blacklisting the customer |
| `validate` | `POST` | `/customer/{code}/identification` | Validate a customer's identity |
| `initializeAuthorization` | `POST` | `/customer/authorization/initialize` | Initiate a request to create a reusable authorization code for recurring transactions |
| `verifyAuthorization` | `GET` | `/customer/authorization/verify/{reference}` | Check the status of an authorization request |
| `deactivateAuthorization` | `POST` | `/customer/authorization/deactivate` | Deactivate an authorization for any payment channel. |
| `initializeDirectDebit` | `POST` | `/customer/{id}/initialize-direct-debit` | Initialize the process of linking an account to a customer for Direct Debit transactions |
| `directDebitActivationCharge` | `PUT` | `/customer/{id}/directdebit-activation-charge` | Trigger an activation charge on an inactive mandate on behalf of your customer |
| `fetchMandateAuthorizations` | `GET` | `/customer/{id}/directdebit-mandate-authorizations` | Get the list of direct debit mandates associated with a customer |

---

## `list`

List customers on your integration

```ts
async list(query?: CustomerListQuery): Promise<ApiResponse<CustomerListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `use_cursor` | `boolean` | false | A flag to indicate if cursor based pagination should be used |
| `next` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data |
| `previous` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |
| `perPage` | `string` | false | The number of records to fetch per request |
| `page` | `string` | false | The offset to retrieve data from |

### Example

```ts
const result = await paystack.customer.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a customer on your integration

```ts
async create(payload: CustomerCreateBody): Promise<ApiResponse<CustomerCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `first_name` | `string` | false | Customer's first name |
| `last_name` | `string` | false | Customer's last name |
| `phone` | `string` | false | Customer's phone number |
| `metadata` | `string` | false | Stringified JSON object of custom data |

### Example

```ts
const result = await paystack.customer.create({ email: "email_value", first_name: "first_name_value" });
console.log(result.data);
```

## `fetch`

Get details of a customer on your integration.

```ts
async fetch(code: string): Promise<ApiResponse<CustomerFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The code for the customer gotten from the response of the customer creation |

### Example

```ts
const result = await paystack.customer.fetch(code);
console.log(result.data);
```

## `update`

Update a customer's details on your integration

```ts
async update(code: string, payload: CustomerUpdateBody): Promise<ApiResponse<CustomerUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The code for the customer gotten from the response of the customer creation |
| `first_name` | `string` | false | Customer's first name |
| `last_name` | `string` | false | Customer's last name |
| `phone` | `string` | false | Customer's phone number |
| `metadata` | `string` | false | Stringified JSON object of custom data |

### Example

```ts
const result = await paystack.customer.update(code, { first_name: "first_name_value" });
console.log(result.data);
```

## `riskAction`

Set customer's risk action by whitelisting or blacklisting the customer

```ts
async riskAction(payload: CustomerRiskActionBody): Promise<ApiResponse<CustomerRiskActionData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `customer` | `string` | true | The customer code from the response of the customer creation |
| `risk_action` | `"allow" \| "deny" \| "default"` | false | This determines the fraud rules that should be applied to the customer |

### Example

```ts
const result = await paystack.customer.riskAction({ customer: "customer_value", risk_action: "allow" });
console.log(result.data);
```

## `validate`

Validate a customer's identity

```ts
async validate(code: string, payload: CustomerValidateBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The code for the customer gotten from the response of the customer creation |
| `first_name` | `string` | true | Customer's first name |
| `middle_name` | `string` | false | Customer's middle name |
| `last_name` | `string` | true | Customer's last name |
| `type` | `string` | true | Predefined types of identification. |
| `value` | `string` | false | Customer's identification number. |
| `country` | `string` | true | Two-letter country code of identification issuer |
| `bvn` | `string` | true | Customer's Bank Verification Number |
| `bank_code` | `string` | true | You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank). |
| `account_number` | `string` | true | Customer's bank account number. |

### Example

```ts
const result = await paystack.customer.validate(code, { first_name: "first_name_value", last_name: "last_name_value", type: "type_value", middle_name: "middle_name_value" });
console.log(result.data);
```

## `initializeAuthorization`

Initiate a request to create a reusable authorization code for recurring transactions

```ts
async initializeAuthorization(payload: CustomerInitializeAuthorizationBody): Promise<ApiResponse<CustomerInitializeAuthorizationData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `channel` | `"direct_debit"` | true | direct_debit is the only supported option for now |
| `callback_url` | `string` | false | Fully qualified url (e.g. https://example.com/) to redirect your customer to |
| `account` | `{ number: string; bank_code: string }` | false |  |
| `address` | `{ street: string; city: string; state: string }` | false |  |

### Example

```ts
const result = await paystack.customer.initializeAuthorization({ email: "email_value", channel: "direct_debit", callback_url: "callback_url_value" });
console.log(result.data);
```

## `verifyAuthorization`

Check the status of an authorization request

```ts
async verifyAuthorization(reference: string): Promise<ApiResponse<CustomerVerifyAuthorizationData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `reference` | `string` | true | The reference returned in the initialization response |

### Example

```ts
const result = await paystack.customer.verifyAuthorization(reference);
console.log(result.data);
```

## `deactivateAuthorization`

Deactivate an authorization for any payment channel.

```ts
async deactivateAuthorization(payload: CustomerDeactivateAuthorizationBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `authorization_code` | `string` | true | Authorization code to be deactivated |

### Example

```ts
const result = await paystack.customer.deactivateAuthorization({ authorization_code: "authorization_code_value" });
console.log(result.data);
```

## `initializeDirectDebit`

Initialize the process of linking an account to a customer for Direct Debit transactions

```ts
async initializeDirectDebit(id: string, payload: CustomerInitializeDirectDebitBody): Promise<ApiResponse<CustomerInitializeDirectDebitData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The ID of the customer to initialize the direct debit for |
| `account` | `{ number: string; bank_code: string }` | true |  |
| `address` | `{ street: string; city: string; state: string }` | true |  |

### Example

```ts
const result = await paystack.customer.initializeDirectDebit(id, { account: {}, address: {} });
console.log(result.data);
```

## `directDebitActivationCharge`

Trigger an activation charge on an inactive mandate on behalf of your customer

```ts
async directDebitActivationCharge(id: string, payload: CustomerDirectDebitActivationChargeBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The customer ID attached to the authorization |
| `authorization_id` | `number` | true | The authorization ID gotten from the initiation response |

### Example

```ts
const result = await paystack.customer.directDebitActivationCharge(id, { authorization_id: 0 });
console.log(result.data);
```

## `fetchMandateAuthorizations`

Get the list of direct debit mandates associated with a customer

```ts
async fetchMandateAuthorizations(id: string): Promise<ApiResponse<CustomerFetchMandateAuthorizationsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The customer ID for the authorizations to fetch |

### Example

```ts
const result = await paystack.customer.fetchMandateAuthorizations(id);
console.log(result.data);
```
