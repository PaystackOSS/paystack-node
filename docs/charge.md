# ChargeApi

A collection of endpoints for configuring and managing the payment channels when initiating a payment

## Methods

| Method | HTTP | Path | Summary |
|---|---|---|---|
| `create` | `POST` | `/charge` | Initiate a payment by integrating the payment channel of your choice. |
| `submitPin` | `POST` | `/charge/submit_pin` | Submit PIN to continue a charge |
| `submitOtp` | `POST` | `/charge/submit_otp` | Submit OTP to complete a charge |
| `submitPhone` | `POST` | `/charge/submit_phone` | Submit phone number when requested |
| `submitBirthday` | `POST` | `/charge/submit_birthday` | Submit the customer's birthday when requested |
| `submitAddress` | `POST` | `/charge/submit_address` | Send the details of the customer's address for address verification |
| `check` | `GET` | `/charge/{reference}` | When you get `pending` as a charge status or if there was an exception when calling any of the `/charge` endpoints, wait 10 seconds or more, then make a check to see if its status has changed. Don't call too early as you may get a lot more pending than you should. |

---

## `create`

Initiate a payment by integrating the payment channel of your choice.

```ts
async create(payload: ChargeCreateBody): Promise<ApiResponse<ChargeCreateData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | true | Customer's email address |
| `amount` | `number` | true | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR |
| `authorization_code` | `string` | false | An authorization code to charge. |
| `pin` | `string` | false | 4-digit PIN (send with a non-reusable authorization code) |
| `reference` | `string` | false | Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. |
| `birthday` | `string` | false | The customer's birthday in the format YYYY-MM-DD e.g 2017-05-16 |
| `device_id` | `string` | false | This is the unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters are allowed. |
| `metadata` | `Record<string, unknown>` | false | JSON object of custom data |
| `bank` | `{ code?: string; account_number?: string }` | false | The bank object if charging a bank account |
| `mobile_money` | `{ phone?: string; provider?: string }` | false | Details of the mobile service provider |
| `ussd` | `{ type?: "737" \| "919" \| "822" \| "966" }` | false | The USSD code for the provider to charge |
| `eft` | `{ provider?: string }` | false | Details of the EFT provider |

### Example

```ts
const result = await paystack.charge.create({ email: "email_value", amount: 0, authorization_code: "authorization_code_value" });
console.log(result.data);
```

## `submitPin`

Submit PIN to continue a charge

```ts
async submitPin(payload: ChargeSubmitPinBody): Promise<ApiResponse<ChargeSubmitPinData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `pin` | `string` | true | Customer's PIN for the ongoing transaction |
| `reference` | `string` | true | Transaction reference that requires the PIN |

### Example

```ts
const result = await paystack.charge.submitPin({ pin: "pin_value", reference: "reference_value" });
console.log(result.data);
```

## `submitOtp`

Submit OTP to complete a charge

```ts
async submitOtp(payload: ChargeSubmitOtpBody): Promise<ApiResponse<ChargeSubmitOtpData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `otp` | `string` | true | Customer's OTP for ongoing transaction |
| `reference` | `string` | true | The reference of the ongoing transaction |

### Example

```ts
const result = await paystack.charge.submitOtp({ otp: "otp_value", reference: "reference_value" });
console.log(result.data);
```

## `submitPhone`

Submit phone number when requested

```ts
async submitPhone(payload: ChargeSubmitPhoneBody): Promise<ApiResponse<ChargeSubmitPhoneData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `phone` | `string` | true | Customer's mobile number |
| `reference` | `string` | true | The reference of the ongoing transaction |

### Example

```ts
const result = await paystack.charge.submitPhone({ phone: "phone_value", reference: "reference_value" });
console.log(result.data);
```

## `submitBirthday`

Submit the customer's birthday when requested

```ts
async submitBirthday(payload: ChargeSubmitBirthdayBody): Promise<ApiResponse<ChargeSubmitBirthdayData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `birthday` | `string` | true | Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21 |
| `reference` | `string` | true | The reference of the ongoing transaction |

### Example

```ts
const result = await paystack.charge.submitBirthday({ birthday: "birthday_value", reference: "reference_value" });
console.log(result.data);
```

## `submitAddress`

Send the details of the customer's address for address verification

```ts
async submitAddress(payload: ChargeSubmitAddressBody): Promise<ApiResponse<ChargeSubmitAddressData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `address` | `string` | true | Customer's address |
| `city` | `string` | true | Customer's city |
| `state` | `string` | true | Customer's state |
| `zip_code` | `string` | true | Customer's zipcode |
| `reference` | `string` | true | The reference of the ongoing transaction |

### Example

```ts
const result = await paystack.charge.submitAddress({ address: "address_value", city: "city_value", state: "state_value" });
console.log(result.data);
```

## `check`

When you get `pending` as a charge status or if there was an exception when calling any of the `/charge` endpoints, wait 10 seconds or more, then make a check to see if its status has changed. Don't call too early as you may get a lot more pending than you should.

```ts
async check(reference: string): Promise<ApiResponse<ChargeCheckData>>;
```

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `reference` | `string` | true | The reference of the ongoing transaction |

### Example

```ts
const result = await paystack.charge.check(reference);
console.log(result.data);
```
