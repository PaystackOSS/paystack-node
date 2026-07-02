# TerminalApi

A collection of endpoints for building delightful in-person payment experiences

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `sendEvent` | `POST` | `/terminal/{id}/event` | Send an event from your application to the Paystack Terminal |
| `fetchEventStatus` | `GET` | `/terminal/{terminal_id}/event/{event_id}` | Check the status of an event sent to the Terminal |
| `fetchTerminalStatus` | `GET` | `/terminal/{terminal_id}/presence` | Check the availiability of a Terminal before sending an event to it |
| `list` | `GET` | `/terminal` | List the Terminals available on your integration |
| `fetch` | `GET` | `/terminal/{terminal_id}` | Get the details of a Terminal |
| `update` | `PUT` | `/terminal/{terminal_id}` | Update the details of a Terminal |
| `commission` | `POST` | `/terminal/commission_device` | Activate your debug device by linking it to your integration |
| `decommission` | `POST` | `/terminal/decommission_device` | Unlink your debug device from your integration |

---

## `sendEvent`

Send an event from your application to the Paystack Terminal

```ts
async sendEvent(id: string, payload: TerminalSendEventBody): Promise<ApiResponse<TerminalSendEventData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | true | The ID of the Terminal the event should be sent to. |
| `type` | `"invoice" \| "transaction"` | false | The type of event to push |
| `action` | `"process" \| "view" \| "print"` | false | The action the Terminal needs to perform. For the invoice type, the action can either be process or view. For the transaction type, the action can either be process or print. |
| `data` | `{ id?: number; reference?: string }` | false | The parameters needed to perform the specified action |

### Example

```ts
const result = await paystack.terminal.sendEvent(id, { type: "invoice" });
console.log(result.data);
```

## `fetchEventStatus`

Check the status of an event sent to the Terminal

```ts
async fetchEventStatus(terminal_id: string, event_id: string): Promise<ApiResponse<TerminalFetchEventStatusData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `terminal_id` | `string` | true | The ID of the Terminal the event should be sent to. |
| `event_id` | `string` | true | The ID of the event that was sent to the Terminal |

### Example

```ts
const result = await paystack.terminal.fetchEventStatus(terminal_id, event_id);
console.log(result.data);
```

## `fetchTerminalStatus`

Check the availiability of a Terminal before sending an event to it

```ts
async fetchTerminalStatus(terminal_id: string): Promise<ApiResponse<TerminalFetchTerminalStatusData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `terminal_id` | `string` | true | The ID of the Terminal the event should be sent to. |

### Example

```ts
const result = await paystack.terminal.fetchTerminalStatus(terminal_id);
console.log(result.data);
```

## `list`

List the Terminals available on your integration

```ts
async list(query?: TerminalListQuery): Promise<ApiResponse<TerminalListData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `next` | `string` | false | A cursor that indicates your place in the list. It can be used to fetch the next page of the list |
| `previous` | `string` | false | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request |
| `per_page` | `integer` | false | Specify how many records you want to retrieve per page |

### Example

```ts
const result = await paystack.terminal.list({ /* query params */ });
console.log(result.data);
```

## `fetch`

Get the details of a Terminal

```ts
async fetch(terminal_id: string): Promise<ApiResponse<TerminalFetchData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `terminal_id` | `string` | true | The ID of the Terminal the event should be sent to. |

### Example

```ts
const result = await paystack.terminal.fetch(terminal_id);
console.log(result.data);
```

## `update`

Update the details of a Terminal

```ts
async update(terminal_id: string, payload: TerminalUpdateBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `terminal_id` | `string` | true | The ID of the Terminal the event should be sent to. |
| `name` | `string` | false | The new name for the Terminal |
| `address` | `string` | false | The new address for the Terminal |

### Example

```ts
const result = await paystack.terminal.update(terminal_id, { name: "name_value" });
console.log(result.data);
```

## `commission`

Activate your debug device by linking it to your integration

```ts
async commission(payload: TerminalCommissionBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `serial_number` | `string` | true | Device Serial Number |

### Example

```ts
const result = await paystack.terminal.commission({ serial_number: "serial_number_value" });
console.log(result.data);
```

## `decommission`

Unlink your debug device from your integration

```ts
async decommission(payload: TerminalDecommissionBody): Promise<ApiResponse<unknown>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `serial_number` | `string` | true | Device Serial Number |

### Example

```ts
const result = await paystack.terminal.decommission({ serial_number: "serial_number_value" });
console.log(result.data);
```
