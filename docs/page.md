# PageApi

A collection of endpoints for creating and managing links for the collection of payment for products

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/page` | List all previously created payment pages |
| `create` | `POST` | `/page` | Create a webpage to receive payments |
| `fetch` | `GET` | `/page/{id}` | Get a previously created payment page |
| `update` | `PUT` | `/page/{id}` | Update a previously created payment page |
| `checkSlugAvailability` | `GET` | `/page/check_slug_availability/{slug}` | Check if a custom slug is available for use when creating a payment page |
| `addProducts` | `POST` | `/page/{id}/product` | Add products to a previously created payment page. You can only add products to pages that was created with a `product` type. |

---

## `list`

List all previously created payment pages

```ts
async list(query?: PageListQuery): Promise<ApiResponse<PageListData>>;
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
const result = await paystack.page.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a webpage to receive payments

```ts
async create(payload: PageCreateBody): Promise<ApiResponse<PageCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | true | Name of page |
| `description` | `string` | false | The description of the page |
| `amount` | `number` | false | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR |
| `currency` | `"NGN" \| "GHS" \| "ZAR" \| "KES" \| "USD"` | false | The transaction currency. Defaults to your integration currency. |
| `slug` | `string` | false | URL slug you would like to be associated with this page. Page will be accessible at `https://paystack.com/pay/[slug]` |
| `type` | `"payment" \| "subscription" \| "product" \| "plan"` | false | The type of payment page to create. Defaults to `payment` if no type is specified. |
| `plan` | `string` | false | The ID of the plan to subscribe customers on this payment page to when `type` is set to `subscription`. |
| `fixed_amount` | `boolean` | false | Specifies whether to collect a fixed amount on the payment page. If true, `amount` must be passed. |
| `split_code` | `string` | false | The split code of the transaction split. e.g. `SPL_98WF13Eb3w` |
| `metadata` | `Record<string, unknown>` | false | JSON object of custom data |
| `redirect_url` | `string` | false | If you would like Paystack to redirect to a URL upon successful payment, specify the URL here. |
| `success_message` | `string` | false | A success message to display to the customer after a successful transaction |
| `notification_email` | `string` | false | An email address that will receive transaction notifications for this payment page |
| `collect_phone` | `boolean` | false | Specify whether to collect phone numbers on the payment page |
| `custom_fields` | `Array<Record<string, unknown>>` | false | If you would like to accept custom fields, specify them here. |

### Example

```ts
const result = await paystack.page.create({ name: "name_value", description: "description_value" });
console.log(result.data);
```

## `fetch`

Get a previously created payment page

```ts
async fetch(id: string): Promise<ApiResponse<PageFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a payment page |

### Example

```ts
const result = await paystack.page.fetch(id);
console.log(result.data);
```

## `update`

Update a previously created payment page

```ts
async update(id: string, payload: PageUpdateBody): Promise<ApiResponse<PageUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of a payment page |
| `name` | `string` | false | Name of page |
| `description` | `string` | false | The description of the page |
| `amount` | `number` | false | Amount should be in the subunit of the currency |
| `active` | `boolean` | false | Set to false to deactivate page url |

### Example

```ts
const result = await paystack.page.update(id, { name: "name_value" });
console.log(result.data);
```

## `checkSlugAvailability`

Check if a custom slug is available for use when creating a payment page

```ts
async checkSlugAvailability(slug: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | `string` | true | The custom slug to check |

### Example

```ts
const result = await paystack.page.checkSlugAvailability(slug);
console.log(result.data);
```

## `addProducts`

Add products to a previously created payment page. You can only add products to pages that was created with a `product` type.

```ts
async addProducts(id: string, payload: PageAddProductsBody): Promise<ApiResponse<PageAddProductsData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | true |  |
| `products` | `Array<number>` | true | A list of IDs of products to add to a page. |

### Example

```ts
const result = await paystack.page.addProducts(id, { products: [] });
console.log(result.data);
```
