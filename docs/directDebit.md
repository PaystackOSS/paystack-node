# DirectDebitApi

A collection of endpoints for managing Direct Debit

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `directdebitTriggerActivationCharge` | `PUT` | `/directdebit/activation-charge` | Trigger activation charge for specified customers |
| `directdebitListMandateAuthorizations` | `GET` | `/directdebit/mandate-authorizations` | Get a list of all the direct debit mandates on your integration |

---

## `directdebitTriggerActivationCharge`

Trigger activation charge for specified customers

```ts
async directdebitTriggerActivationCharge(payload: DirectDebitDirectdebitTriggerActivationChargeBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `customer_ids` | `Array<number>` | true | Array of customer IDs to trigger activation charge for |

### Example

```ts
const result = await paystack.directDebit.directdebitTriggerActivationCharge({ customer_ids: [] });
console.log(result.data);
```

## `directdebitListMandateAuthorizations`

Get a list of all the direct debit mandates on your integration

```ts
async directdebitListMandateAuthorizations(query?: DirectDebitDirectdebitListMandateAuthorizationsQuery): Promise<ApiResponse<DirectDebitDirectdebitListMandateAuthorizationsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `cursor` | `string` | false | The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response |
| `status` | `string` | false | Filter by the authorization status |
| `per_page` | `integer` | false | The number of authorizations to fetch per request |

### Example

```ts
const result = await paystack.directDebit.directdebitListMandateAuthorizations({ /* query params */ });
console.log(result.data);
```
