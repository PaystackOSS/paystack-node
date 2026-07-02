# OrderApi

A collection of endpoints for creating and managing orders

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/order` | List the previously created orders |
| `create` | `POST` | `/order` | Create an order for selected items |
| `fetch` | `GET` | `/order/{id}` | Fetch the details of a previously created order |
| `product` | `GET` | `/order/product/{id}` | Fetch all orders for a particular product |
| `validate` | `GET` | `/order/{code}/validate` | Validate a pay for me order |

---

## `list`

List the previously created orders

```ts
async list(query?: OrderListQuery): Promise<ApiResponse<OrderListData>>;
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
const result = await paystack.order.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create an order for selected items

```ts
async create(payload: OrderCreateBody): Promise<ApiResponse<OrderCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | The email of the customer placing the order |
| `first_name` | `string` | true | The customer's first name |
| `last_name` | `string` | true | The customer's last name |
| `phone` | `string` | true | The customer's mobile number |
| `currency` | `"GHS" \| "KES" \| "NGN" \| "USD" \| "ZAR"` | true | Currency in which amount is set |
| `items` | `Array<{ item: number; type: string; quantity: number; amount: number }>` | true |  |
| `shipping` | `{ street_line: string; city: string; state: string; country: string; shipping_fee: number; delivery_note?: string }` | true | The shipping details of the order |
| `is_gift` | `boolean` | false | A flag to indicate if the order is for someone else |
| `pay_for_me` | `boolean` | false | A flag to indicate if the someone else should pay for the order |

### Example

```ts
const result = await paystack.order.create({ email: "email_value", first_name: "first_name_value", last_name: "last_name_value", is_gift: true });
console.log(result.data);
```

## `fetch`

Fetch the details of a previously created order

```ts
async fetch(id: string): Promise<ApiResponse<OrderFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the order |

### Example

```ts
const result = await paystack.order.fetch(id);
console.log(result.data);
```

## `product`

Fetch all orders for a particular product

```ts
async product(id: string): Promise<ApiResponse<OrderProductData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `integer` | true | The unique identifier of the order |

### Example

```ts
const result = await paystack.order.product(id);
console.log(result.data);
```

## `validate`

Validate a pay for me order

```ts
async validate(code: string): Promise<ApiResponse<OrderValidateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | The unique code of a previously created order |

### Example

```ts
const result = await paystack.order.validate(code);
console.log(result.data);
```
