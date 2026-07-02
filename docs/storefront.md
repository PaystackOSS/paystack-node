# StorefrontApi

A collection of endpoints for creating and managing storefronts

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/storefront` | List the storefronts you previously created |
| `create` | `POST` | `/storefront` | Create a digital shop to manage and display your products |
| `fetch` | `GET` | `/storefront/{id}` | Get the details of a previously created Storefront |
| `update` | `PUT` | `/storefront/{id}` | Update the details of a previously created Storefront |
| `delete_` | `DELETE` | `/storefront/{id}` | Delete a previously created Storefront |
| `verifySlug` | `GET` | `/storefront/verify/{slug}` | Verify the availability of a slug before using it for your Storefront |
| `fetchOrders` | `GET` | `/storefront/{id}/order` | Fetch all orders in your Storefront |
| `listProducts` | `GET` | `/storefront/{id}/product` | List the products in a Storefront |
| `addProducts` | `POST` | `/storefront/{id}/product` | Add previously created products to a Storefront |
| `publish` | `POST` | `/storefront/{id}/publish` | Make your Storefront publicly available |
| `duplicate` | `POST` | `/storefront/{id}/duplicate` | Duplicate a previously created Storefront |

---

## `list`

List the storefronts you previously created

```ts
async list(query?: StorefrontListQuery): Promise<ApiResponse<StorefrontListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | Number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |
| `status` | `string` | false |  |

### Example

```ts
const result = await paystack.storefront.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a digital shop to manage and display your products

```ts
async create(payload: StorefrontCreateBody): Promise<ApiResponse<StorefrontCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | true | Name of the storefront |
| `slug` | `string` | true | A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug |
| `currency` | `"GHS" \| "KES" \| "NGN" \| "USD" \| "ZAR"` | true | Currency for prices of products in your storefront. |
| `description` | `string` | false | The description of the storefront |

### Example

```ts
const result = await paystack.storefront.create({ name: "name_value", slug: "slug_value", currency: "GHS", description: "description_value" });
console.log(result.data);
```

## `fetch`

Get the details of a previously created Storefront

```ts
async fetch(id: string): Promise<ApiResponse<StorefrontFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |

### Example

```ts
const result = await paystack.storefront.fetch(id);
console.log(result.data);
```

## `update`

Update the details of a previously created Storefront

```ts
async update(id: string, payload: StorefrontUpdateBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |
| `name` | `string` | false | Name of the storefront |
| `slug` | `string` | false | A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug |
| `description` | `string` | false | The description of the storefront |

### Example

```ts
const result = await paystack.storefront.update(id, { name: "name_value" });
console.log(result.data);
```

## `delete_`

Delete a previously created Storefront

```ts
async delete_(id: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |

### Example

```ts
const result = await paystack.storefront.delete_(id);
console.log(result.data);
```

## `verifySlug`

Verify the availability of a slug before using it for your Storefront

```ts
async verifySlug(slug: string): Promise<ApiResponse<StorefrontVerifySlugData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | `string` | true | The custom slug to check |

### Example

```ts
const result = await paystack.storefront.verifySlug(slug);
console.log(result.data);
```

## `fetchOrders`

Fetch all orders in your Storefront

```ts
async fetchOrders(id: string): Promise<ApiResponse<StorefrontFetchOrdersData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |

### Example

```ts
const result = await paystack.storefront.fetchOrders(id);
console.log(result.data);
```

## `listProducts`

List the products in a Storefront

```ts
async listProducts(id: string): Promise<ApiResponse<StorefrontListProductsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |

### Example

```ts
const result = await paystack.storefront.listProducts(id);
console.log(result.data);
```

## `addProducts`

Add previously created products to a Storefront

```ts
async addProducts(id: string, payload: StorefrontAddProductsBody): Promise<ApiResponse<StorefrontAddProductsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |
| `products` | `Array<number>` | true | An array of product IDs |

### Example

```ts
const result = await paystack.storefront.addProducts(id, { products: [] });
console.log(result.data);
```

## `publish`

Make your Storefront publicly available

```ts
async publish(id: string): Promise<ApiResponse<StorefrontPublishData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |

### Example

```ts
const result = await paystack.storefront.publish(id);
console.log(result.data);
```

## `duplicate`

Duplicate a previously created Storefront

```ts
async duplicate(id: string): Promise<ApiResponse<StorefrontDuplicateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the Storefront |

### Example

```ts
const result = await paystack.storefront.duplicate(id);
console.log(result.data);
```
