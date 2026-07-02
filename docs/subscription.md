# SubscriptionApi

A collection of endpoints for creating and managing recurring payments

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/subscription` | List all subscriptions available on your integration |
| `create` | `POST` | `/subscription` | Create a subscription a customer |
| `fetch` | `GET` | `/subscription/{code}` | Get details of a customer's subscription |
| `disable` | `POST` | `/subscription/disable` | Disable a subscription on your integration |
| `enable` | `POST` | `/subscription/enable` | Enable a subscription on your integration |
| `manageLink` | `GET` | `/subscription/{code}/manage/link` | Generate a link for updating the card on a subscription |
| `manageEmail` | `POST` | `/subscription/{code}/manage/email` | Email a customer a link for updating the card on their subscription |

---

## `list`

List all subscriptions available on your integration

```ts
async list(query?: SubscriptionListQuery): Promise<ApiResponse<SubscriptionListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `plan` | `integer` | false | Plan ID |
| `customer` | `string` | false | Customer ID |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.subscription.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a subscription a customer

```ts
async create(payload: SubscriptionCreateBody): Promise<ApiResponse<SubscriptionCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `customer` | `string` | true | Customer's email address or customer code |
| `plan` | `string` | true | Plan code |
| `authorization` | `string` | false | If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer's most recent authorization would be used |
| `start_date` | `string` | false | Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 |

### Example

```ts
const result = await paystack.subscription.create({ customer: "customer_value", plan: "plan_value", authorization: "authorization_value" });
console.log(result.data);
```

## `fetch`

Get details of a customer's subscription

```ts
async fetch(code: string): Promise<ApiResponse<SubscriptionFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The subscription code for the subscription you want to fetch |

### Example

```ts
const result = await paystack.subscription.fetch(code);
console.log(result.data);
```

## `disable`

Disable a subscription on your integration

```ts
async disable(payload: SubscriptionDisableBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Subscription code |
| `token` | `string` | true | Email token |

### Example

```ts
const result = await paystack.subscription.disable({ code: "code_value", token: "token_value" });
console.log(result.data);
```

## `enable`

Enable a subscription on your integration

```ts
async enable(payload: SubscriptionEnableBody): Promise<ApiResponse<SubscriptionEnableData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Subscription code |
| `token` | `string` | true | Email token |

### Example

```ts
const result = await paystack.subscription.enable({ code: "code_value", token: "token_value" });
console.log(result.data);
```

## `manageLink`

Generate a link for updating the card on a subscription

```ts
async manageLink(code: string): Promise<ApiResponse<SubscriptionManageLinkData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Subscription code |

### Example

```ts
const result = await paystack.subscription.manageLink(code);
console.log(result.data);
```

## `manageEmail`

Email a customer a link for updating the card on their subscription

```ts
async manageEmail(code: string): Promise<ApiResponse<SubscriptionManageEmailData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Subscription code |

### Example

```ts
const result = await paystack.subscription.manageEmail(code);
console.log(result.data);
```
