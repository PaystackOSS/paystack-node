import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { BankValidateAccountNumberBody } from "../models/index.js";
import type { BankListQuery } from "../models/index.js";
import type { BankResolveAccountNumberQuery } from "../models/index.js";
import type { BankListData } from "../models/index.js";
import type { BankResolveAccountNumberData } from "../models/index.js";
import type { BankValidateAccountNumberData } from "../models/index.js";

export class BankApi {
  constructor(private readonly client: ApiClient) {}

  /** List banks supported on Paystack */
  async list(query?: BankListQuery): Promise<ApiResponse<BankListData>> {
    return this.client.request("GET", "/bank", { query: query });
  }

  /** Resolve an account number to confirm the name associated with it */
  async resolveAccountNumber(query?: BankResolveAccountNumberQuery): Promise<ApiResponse<BankResolveAccountNumberData>> {
    return this.client.request("GET", "/bank/resolve", { query: query });
  }

  /** Confirm the authenticity of a customer's account number before sending money */
  async validateAccountNumber(payload: BankValidateAccountNumberBody): Promise<ApiResponse<BankValidateAccountNumberData>> {
    return this.client.request("POST", "/bank/validate", { body: payload });
  }
}
