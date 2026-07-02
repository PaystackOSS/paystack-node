# VirtualTerminalApi

A collection of endpoints for building in-person payments without a physical terminal

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `list` | `GET` | `/virtual_terminal` | List Virtual Terminals on your integration |
| `create` | `POST` | `/virtual_terminal` | Create a Virtual Terminal on your integration |
| `fetch` | `GET` | `/virtual_terminal/{code}` | Fetch a Virtual Terminal on your integration |
| `update` | `PUT` | `/virtual_terminal/{code}` | Update a Virtual Terminal on your integration |
| `deactivate` | `PUT` | `/virtual_terminal/{code}/deactivate` | Deactivate a Virtual Terminal on your integration |
| `destinationAssign` | `POST` | `/virtual_terminal/{code}/destination/assign` | Add a destination (WhatsApp number) to a Virtual Terminal on your integration |
| `destinationUnassign` | `POST` | `/virtual_terminal/{code}/destination/unassign` | Unassign a destination (WhatsApp Number) from a Virtual Terminal on your integration |
| `addSplitCode` | `PUT` | `/virtual_terminal/{code}/split_code` | Add Split Code to Virtual Terminal |
| `deleteSplitCode` | `DELETE` | `/virtual_terminal/{code}/split_code` | Remove Split Code from Virtual Terminal |

---

## `list`

List Virtual Terminals on your integration

```ts
async list(query?: VirtualTerminalListQuery): Promise<ApiResponse<VirtualTerminalListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `perPage` | `integer` | false | The number of records to fetch per request |
| `page` | `integer` | false | The offset to retrieve data from |

### Example

```ts
const result = await paystack.virtualTerminal.list({ /* query params */ });
console.log(result.data);
```

## `create`

Create a Virtual Terminal on your integration

```ts
async create(payload: VirtualTerminalCreateBody): Promise<ApiResponse<VirtualTerminalCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | true | The name of the virtual terminal |
| `destinations` | `Array<{ target?: string; name?: string }>` | true | Array of objects containing recipients for payment notifications for the Virtual Terminal. |
| `split_code` | `string` | false | Split code to associate with the virtual terminal |
| `metadata` | `Record<string, unknown>` | false | Additional custom data as key-value pairs |

### Example

```ts
const result = await paystack.virtualTerminal.create({ name: "name_value", destinations: [], split_code: "split_code_value" });
console.log(result.data);
```

## `fetch`

Fetch a Virtual Terminal on your integration

```ts
async fetch(code: string): Promise<ApiResponse<VirtualTerminalFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |

### Example

```ts
const result = await paystack.virtualTerminal.fetch(code);
console.log(result.data);
```

## `update`

Update a Virtual Terminal on your integration

```ts
async update(code: string, payload: VirtualTerminalUpdateBody): Promise<ApiResponse<VirtualTerminalUpdateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |
| `name` | `string` | true | Name of the virtual terminal |

### Example

```ts
const result = await paystack.virtualTerminal.update(code, { name: "name_value" });
console.log(result.data);
```

## `deactivate`

Deactivate a Virtual Terminal on your integration

```ts
async deactivate(code: string): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |

### Example

```ts
const result = await paystack.virtualTerminal.deactivate(code);
console.log(result.data);
```

## `destinationAssign`

Add a destination (WhatsApp number) to a Virtual Terminal on your integration

```ts
async destinationAssign(code: string, payload: VirtualTerminalDestinationAssignBody): Promise<ApiResponse<VirtualTerminalDestinationAssignData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |
| `destinations` | `Array<{ target?: string; name?: string }>` | true | Array of objects containing recipients for payment notifications for the Virtual Terminal. |

### Example

```ts
const result = await paystack.virtualTerminal.destinationAssign(code, { destinations: [] });
console.log(result.data);
```

## `destinationUnassign`

Unassign a destination (WhatsApp Number) from a Virtual Terminal on your integration

```ts
async destinationUnassign(code: string, payload: VirtualTerminalDestinationUnassignBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |
| `targets` | `Array<string>` | true | Array of destination targets to unassign |

### Example

```ts
const result = await paystack.virtualTerminal.destinationUnassign(code, { targets: [] });
console.log(result.data);
```

## `addSplitCode`

Add Split Code to Virtual Terminal

```ts
async addSplitCode(code: string, payload: VirtualTerminalAddSplitCodeBody): Promise<ApiResponse<VirtualTerminalAddSplitCodeData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |
| `split_code` | `string` | true | The split code to assign to the virtual terminal |

### Example

```ts
const result = await paystack.virtualTerminal.addSplitCode(code, { split_code: "split_code_value" });
console.log(result.data);
```

## `deleteSplitCode`

Remove Split Code from Virtual Terminal

```ts
async deleteSplitCode(code: string, payload: VirtualTerminalDeleteSplitCodeBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | `string` | true | Code of the Virtual Terminal |
| `split_code` | `string` | true | The split code to assign to the virtual terminal |

### Example

```ts
const result = await paystack.virtualTerminal.deleteSplitCode(code, { split_code: "split_code_value" });
console.log(result.data);
```
