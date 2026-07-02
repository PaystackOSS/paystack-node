# ApplePayApi

A collection of endpoints for managing application's top-level domain or subdomain accepting payment via Apple Pay

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `listDomain` | `GET` | `/apple-pay/domain` | Lists all registered domains on your integration. Returns an empty array if no domains have been added. |
| `registerDomain` | `POST` | `/apple-pay/domain` | Register a top-level domain or subdomain for your Apple Pay integration. > This endpoint can only be called with one domain or subdomain at a time. |
| `unregisterDomain` | `DELETE` | `/apple-pay/domain` | Unregister a top-level domain or subdomain previously used for your Apple Pay integration. |

---

## `listDomain`

Lists all registered domains on your integration. Returns an empty array if no domains have been added.

```ts
async listDomain(query?: ApplePayListDomainQuery): Promise<ApiResponse<ApplePayListDomainData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `use_cursor` | `boolean` | false | A flag to indicate if cursor based pagination should be used |
| `next` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data |
| `previous` | `string` | false | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data |

### Example

```ts
const result = await paystack.applePay.listDomain({ /* query params */ });
console.log(result.data);
```

## `registerDomain`

Register a top-level domain or subdomain for your Apple Pay integration. > This endpoint can only be called with one domain or subdomain at a time.

```ts
async registerDomain(payload: ApplePayRegisterDomainBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domainName` | `string` | true | The domain or subdomain for your application |

### Example

```ts
const result = await paystack.applePay.registerDomain({ domainName: "domainName_value" });
console.log(result.data);
```

## `unregisterDomain`

Unregister a top-level domain or subdomain previously used for your Apple Pay integration.

```ts
async unregisterDomain(payload: ApplePayUnregisterDomainBody): Promise<ApiResponse<ApplePayUnregisterDomainData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domainName` | `string` | true | The domain or subdomain for your application |

### Example

```ts
const result = await paystack.applePay.unregisterDomain({ domainName: "domainName_value" });
console.log(result.data);
```
