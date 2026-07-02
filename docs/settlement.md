# SettlementApi

A collection of endpoints for gaining insights into payouts

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `settlementsFetch` | `GET` | `/settlement` | List settlements made to your settlement accounts |
| `settlementsTransaction` | `GET` | `/settlement/{id}/transactions` | Get the transactions that make up a particular settlement |

---

## `settlementsFetch`

List settlements made to your settlement accounts

```ts
async settlementsFetch(query?: SettlementSettlementsFetchQuery): Promise<ApiResponse<SettlementSettlementsFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |

### Example

```ts
const result = await paystack.settlement.settlementsFetch({ /* query params */ });
console.log(result.data);
```

## `settlementsTransaction`

Get the transactions that make up a particular settlement

```ts
async settlementsTransaction(id: string): Promise<ApiResponse<SettlementSettlementsTransactionData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The settlement ID in which you want to fetch its transactions |

### Example

```ts
const result = await paystack.settlement.settlementsTransaction(id);
console.log(result.data);
```
