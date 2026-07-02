import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { ChargeCreateBody } from "../models/index.js";
import type { ChargeSubmitPinBody } from "../models/index.js";
import type { ChargeSubmitOtpBody } from "../models/index.js";
import type { ChargeSubmitPhoneBody } from "../models/index.js";
import type { ChargeSubmitBirthdayBody } from "../models/index.js";
import type { ChargeSubmitAddressBody } from "../models/index.js";
import type { ChargeCreateData } from "../models/index.js";
import type { ChargeSubmitPinData } from "../models/index.js";
import type { ChargeSubmitOtpData } from "../models/index.js";
import type { ChargeSubmitPhoneData } from "../models/index.js";
import type { ChargeSubmitBirthdayData } from "../models/index.js";
import type { ChargeSubmitAddressData } from "../models/index.js";
import type { ChargeCheckData } from "../models/index.js";

export class ChargeApi {
  constructor(private readonly client: ApiClient) {}

  /** Initiate a payment by integrating the payment channel of your choice. */
  async create(payload: ChargeCreateBody): Promise<ApiResponse<ChargeCreateData>> {
    return this.client.request("POST", "/charge", { body: payload });
  }

  /** Submit PIN to continue a charge */
  async submitPin(payload: ChargeSubmitPinBody): Promise<ApiResponse<ChargeSubmitPinData>> {
    return this.client.request("POST", "/charge/submit_pin", { body: payload });
  }

  /** Submit OTP to complete a charge */
  async submitOtp(payload: ChargeSubmitOtpBody): Promise<ApiResponse<ChargeSubmitOtpData>> {
    return this.client.request("POST", "/charge/submit_otp", { body: payload });
  }

  /** Submit phone number when requested */
  async submitPhone(payload: ChargeSubmitPhoneBody): Promise<ApiResponse<ChargeSubmitPhoneData>> {
    return this.client.request("POST", "/charge/submit_phone", { body: payload });
  }

  /** Submit the customer's birthday when requested */
  async submitBirthday(payload: ChargeSubmitBirthdayBody): Promise<ApiResponse<ChargeSubmitBirthdayData>> {
    return this.client.request("POST", "/charge/submit_birthday", { body: payload });
  }

  /** Send the details of the customer's address for address verification */
  async submitAddress(payload: ChargeSubmitAddressBody): Promise<ApiResponse<ChargeSubmitAddressData>> {
    return this.client.request("POST", "/charge/submit_address", { body: payload });
  }

  /** When you get `pending` as a charge status or if there was an exception when calling any of the `/charge` endpoints, wait 10 seconds or more, then make a check to see if its status has changed. Don't call too early as you may get a lot more pending than you should.
 */
  async check(reference: string): Promise<ApiResponse<ChargeCheckData>> {
    let path = "/charge/{reference}";
    path = path.replace("{reference}", encodeURIComponent(String(reference)));
    return this.client.request("GET", path);
  }
}
