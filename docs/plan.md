# PlanApi

A collection of endpoints for creating and managing recurring payment configuration

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/plan` | List all recurring payment plans |
| `create` | `POST` | `/plan` | Create a plan for recurring payments |
| `fetch` | `GET` | `/plan/{code}` | Get the details of a payment plan |
| `update` | `PUT` | `/plan/{code}` | Update a plan details on your integration |

---

## `list`

List all recurring payment plans

```ts
async list(query?: PlanListQuery): Promise<ApiResponse<PlanListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `interval` | `string` | false | Specify interval of the plan |
| `amount` | `integer` | false | The amount on the plans to retrieve |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.plan.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a plan for recurring payments

```ts
async create(payload: PlanCreateBody): Promise<ApiResponse<PlanCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | true | Name of plan |
| `amount` | `number` | true | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR |
| `interval` | `"daily" \| "weekly" \| "monthly" \| "biannually" \| "annually"` | true | Payment interval |
| `description` | `string` | false | A description for this plan |
| `send_invoices` | `boolean` | false | Set to false if you don't want invoices to be sent to your customers |
| `send_sms` | `boolean` | false | Set to false if you don't want text messages to be sent to your customers |
| `currency` | `string` | false | Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD |
| `invoice_limit` | `number` | false | Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing. |

### Example

```ts
const result = await paystack.plan.create({ name: "name_value", amount: 0, interval: "daily", description: "description_value" });
console.log(result.data);
```

## `fetch`

Get the details of a payment plan

```ts
async fetch(code: string): Promise<ApiResponse<PlanFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The plan code you want to fetch |

### Example

```ts
const result = await paystack.plan.fetch(code);
console.log(result.data);
```

## `update`

Update a plan details on your integration

```ts
async update(code: string, payload: PlanUpdateBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The plan code you want to fetch |
| `name` | `string` | false | Name of plan |
| `amount` | `number` | false | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR |
| `interval` | `"daily" \| "weekly" \| "monthly" \| "biannually" \| "annually"` | false | Payment interval |
| `description` | `boolean` | false | A description for this plan |
| `send_invoices` | `boolean` | false | Set to false if you don't want invoices to be sent to your customers |
| `send_sms` | `boolean` | false | Set to false if you don't want text messages to be sent to your customers |
| `currency` | `string` | false | Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD |
| `invoice_limit` | `number` | false | Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing. |

### Example

```ts
const result = await paystack.plan.update(code, { name: "name_value" });
console.log(result.data);
```
