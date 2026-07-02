# BalanceApi

A collection of endpoints gaining insights into the amount on an integration

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `fetch` | `GET` | `/balance` | Fetch the available balance on your integration |
| `ledger` | `GET` | `/balance/ledger` | Fetch all pay-ins and pay-outs that occured on your integration |

---

## `fetch`

Fetch the available balance on your integration

```ts
async fetch(): Promise<ApiResponse<BalanceFetchData>>;
```

### Example

```ts
const result = await paystack.balance.fetch();
console.log(result.data);
```

## `ledger`

Fetch all pay-ins and pay-outs that occured on your integration

```ts
async ledger(query?: BalanceLedgerQuery): Promise<ApiResponse<BalanceLedgerData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.balance.ledger({ /* query params */ });
console.log(result.data);
```
