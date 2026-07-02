# MiscellaneousApi

A collection of endpoints that provides utility functions

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `resolveCardBin` | `GET` | `/decision/bin/{bin}` | Get the details of a card BIN |
| `listCountries` | `GET` | `/country` | List all supported countries on Paystack |
| `avs` | `GET` | `/address_verification/states` | Get a list of states for a country for address verification |

---

## `resolveCardBin`

Get the details of a card BIN

```ts
async resolveCardBin(bin: string): Promise<ApiResponse<MiscellaneousResolveCardBinData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `bin` | `integer` | true | The card bank identification number |

### Example

```ts
const result = await paystack.miscellaneous.resolveCardBin(bin);
console.log(result.data);
```

## `listCountries`

List all supported countries on Paystack

```ts
async listCountries(): Promise<ApiResponse<MiscellaneousListCountriesData>>;
```

### Example

```ts
const result = await paystack.miscellaneous.listCountries();
console.log(result.data);
```

## `avs`

Get a list of states for a country for address verification

```ts
async avs(query?: MiscellaneousAvsQuery): Promise<ApiResponse<MiscellaneousAvsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `country` | `string` | false | The country code of the states to list. It is gotten after the charge request |

### Example

```ts
const result = await paystack.miscellaneous.avs({ /* query params */ });
console.log(result.data);
```
