# ProductApi

A collection of endpoints for creating and managing inventories

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/product` | List all previously created products |
| `create` | `POST` | `/product` | Create a new product on your integration |
| `fetch` | `GET` | `/product/{id}` | Fetch a previously created product |
| `update` | `PUT` | `/product/{id}` | Update a previously created product |
| `delete_` | `DELETE` | `/product/{id}` | Delete a previously created product |

---

## `list`

List all previously created products

```ts
async list(query?: ProductListQuery): Promise<ApiResponse<ProductListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per page |
| `page` | `integer` | false | The section to retrieve |
| `active` | `boolean` | false | The state of the product |
| `from` | `string` | false | The start date |
| `to` | `string` | false | The end date |

### Example

```ts
const result = await paystack.product.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a new product on your integration

```ts
async create(payload: ProductCreateBody): Promise<ApiResponse<ProductCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | true | Name of product |
| `description` | `string` | true | The description of the product |
| `price` | `number` | true | Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR |
| `currency` | `string` | true | Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD |
| `unlimited` | `boolean` | false | Set to true if the product has unlimited stock. Leave as false if the product has limited stock |
| `quantity` | `number` | false | Number of products in stock. Use if limited is true |
| `split_code` | `string` | false | The split code if sharing the transaction with partners |
| `metadata` | `string` | false | Stringified JSON object of custom data |

### Example

```ts
const result = await paystack.product.create({ name: "name_value", description: "description_value", price: 0, unlimited: true });
console.log(result.data);
```

## `fetch`

Fetch a previously created product

```ts
async fetch(id: string): Promise<ApiResponse<ProductFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the product |

### Example

```ts
const result = await paystack.product.fetch(id);
console.log(result.data);
```

## `update`

Update a previously created product

```ts
async update(id: string, payload: ProductUpdateBody): Promise<ApiResponse<ProductUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the product |
| `name` | `string` | false | Name of product |
| `description` | `string` | false | The description of the product |
| `price` | `number` | false | Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR |
| `currency` | `string` | false | Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD |
| `unlimited` | `boolean` | false | Set to true if the product has unlimited stock. Leave as false if the product has limited stock |
| `quantity` | `number` | false | Number of products in stock. Use if limited is true |
| `split_code` | `string` | false | The split code if sharing the transaction with partners |
| `metadata` | `Record<string, unknown>` | false | JSON object of custom data |

### Example

```ts
const result = await paystack.product.update(id, { name: "name_value" });
console.log(result.data);
```

## `delete_`

Delete a previously created product

```ts
async delete_(id: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the product |

### Example

```ts
const result = await paystack.product.delete_(id);
console.log(result.data);
```
