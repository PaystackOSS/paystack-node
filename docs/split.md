# SplitApi

A collection of endpoints for spliting a transaction and managing the splits

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/split` | List the transaction splits available on your integration |
| `create` | `POST` | `/split` | Create a split configuration for transactions |
| `fetch` | `GET` | `/split/{id}` | Get details of a split configuration for a transaction |
| `update` | `PUT` | `/split/{id}` | Update a split configuration for transactions |
| `addSubaccount` | `POST` | `/split/{id}/subaccount/add` | Add a subaccount to a split configuration, or update the share of an existing subaccount |
| `removeSubaccount` | `POST` | `/split/{id}/subaccount/remove` | Remove a subaccount from a split configuration |

---

## `list`

List the transaction splits available on your integration

```ts
async list(query?: SplitListQuery): Promise<ApiResponse<SplitListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `subaccount_code` | `string` | false | Filter by subaccount code |
| `name` | `string` | false | The name of the split |
| `active` | `boolean` | false | The status of the split |
| `per_page` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.split.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a split configuration for transactions

```ts
async create(payload: SplitCreateBody): Promise<ApiResponse<SplitCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | true | Name of the transaction split |
| `type` | `"percentage" \| "flat"` | true | The type of transaction split you want to create. |
| `subaccounts` | `Array<{ subaccount?: string; share?: number }>` | true | A list of object containing subaccount code and number of shares |
| `currency` | `"NGN" \| "GHS" \| "ZAR" \| "USD"` | true | The transaction currency |
| `bearer_type` | `"subaccount" \| "account" \| "all-proportional" \| "all"` | false | This allows you specify how the transaction charge should be processed |
| `bearer_subaccount` | `string` | false | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type |

### Example

```ts
const result = await paystack.split.create({ name: "name_value", type: "percentage", subaccounts: [], bearer_type: "subaccount" });
console.log(result.data);
```

## `fetch`

Get details of a split configuration for a transaction

```ts
async fetch(id: string): Promise<ApiResponse<SplitFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The ID of the split configuration to fetch |

### Example

```ts
const result = await paystack.split.fetch(id);
console.log(result.data);
```

## `update`

Update a split configuration for transactions

```ts
async update(id: string, payload: SplitUpdateBody): Promise<ApiResponse<SplitUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | true |  |
| `name` | `string` | false | Name of the transaction split |
| `active` | `boolean` | false | Toggle status of split. When true, the split is active, else it's inactive |
| `bearer_type` | `"subaccount" \| "account" \| "all-proportional" \| "all"` | false | This allows you specify how the transaction charge should be processed |
| `bearer_subaccount` | `string` | false | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type |

### Example

```ts
const result = await paystack.split.update(id, { name: "name_value" });
console.log(result.data);
```

## `addSubaccount`

Add a subaccount to a split configuration, or update the share of an existing subaccount

```ts
async addSubaccount(id: string, payload: SplitAddSubaccountBody): Promise<ApiResponse<SplitAddSubaccountData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The ID of the split configuration to fetch |
| `subaccount` | `string` | false | Subaccount code of the customer or partner |
| `share` | `number` | false | The percentage or flat quota of the customer or partner |

### Example

```ts
const result = await paystack.split.addSubaccount(id, { subaccount: "subaccount_value" });
console.log(result.data);
```

## `removeSubaccount`

Remove a subaccount from a split configuration

```ts
async removeSubaccount(id: string, payload: SplitRemoveSubaccountBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The ID of the split configuration to fetch |
| `subaccount` | `string` | false | Subaccount code of the customer or partner |
| `share` | `number` | false | The percentage or flat quota of the customer or partner |

### Example

```ts
const result = await paystack.split.removeSubaccount(id, { subaccount: "subaccount_value" });
console.log(result.data);
```
