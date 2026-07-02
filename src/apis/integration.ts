import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { IntegrationUpdatePaymentSessionTimeoutBody } from "../models/index.js";
import type { IntegrationFetchPaymentSessionTimeoutData } from "../models/index.js";
import type { IntegrationUpdatePaymentSessionTimeoutData } from "../models/index.js";

export class IntegrationApi {
  constructor(private readonly client: ApiClient) {}

  /** Fetch the session timeout of a transaction */
  async fetchPaymentSessionTimeout(): Promise<ApiResponse<IntegrationFetchPaymentSessionTimeoutData>> {
    return this.client.request("GET", "/integration/payment_session_timeout");
  }

  /** Update the session timeout of a transaction */
  async updatePaymentSessionTimeout(payload: IntegrationUpdatePaymentSessionTimeoutBody): Promise<ApiResponse<IntegrationUpdatePaymentSessionTimeoutData>> {
    return this.client.request("PUT", "/integration/payment_session_timeout", { body: payload });
  }
}
