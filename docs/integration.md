# IntegrationApi

A collection of endpoints for managing some settings on an integration

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `fetchPaymentSessionTimeout` | `GET` | `/integration/payment_session_timeout` | Fetch the session timeout of a transaction |
| `updatePaymentSessionTimeout` | `PUT` | `/integration/payment_session_timeout` | Update the session timeout of a transaction |

---

## `fetchPaymentSessionTimeout`

Fetch the session timeout of a transaction

```ts
async fetchPaymentSessionTimeout(): Promise<ApiResponse<IntegrationFetchPaymentSessionTimeoutData>>;
```

### Example

```ts
const result = await paystack.integration.fetchPaymentSessionTimeout();
console.log(result.data);
```

## `updatePaymentSessionTimeout`

Update the session timeout of a transaction

```ts
async updatePaymentSessionTimeout(payload: IntegrationUpdatePaymentSessionTimeoutBody): Promise<ApiResponse<IntegrationUpdatePaymentSessionTimeoutData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `timeout` | `number` | true | Time in seconds before a transaction becomes invalid |

### Example

```ts
const result = await paystack.integration.updatePaymentSessionTimeout({ timeout: 0 });
console.log(result.data);
```
