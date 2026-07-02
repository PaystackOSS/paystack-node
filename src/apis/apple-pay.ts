import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { ApplePayRegisterDomainBody } from "../models/index.js";
import type { ApplePayUnregisterDomainBody } from "../models/index.js";
import type { ApplePayListDomainQuery } from "../models/index.js";
import type { ApplePayListDomainData } from "../models/index.js";
import type { ApplePayUnregisterDomainData } from "../models/index.js";

export class ApplePayApi {
  constructor(private readonly client: ApiClient) {}

  /** Lists all registered domains on your integration. Returns an empty array if no domains have been added. */
  async listDomain(query?: ApplePayListDomainQuery): Promise<ApiResponse<ApplePayListDomainData>> {
    return this.client.request("GET", "/apple-pay/domain", { query: query });
  }

  /** Register a top-level domain or subdomain for your Apple Pay integration.

> This endpoint can only be called with one domain or subdomain at a time.
 */
  async registerDomain(payload: ApplePayRegisterDomainBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/apple-pay/domain", { body: payload });
  }

  /** Unregister a top-level domain or subdomain previously used for your Apple
Pay integration.
 */
  async unregisterDomain(payload: ApplePayUnregisterDomainBody): Promise<ApiResponse<ApplePayUnregisterDomainData>> {
    return this.client.request("DELETE", "/apple-pay/domain", { body: payload });
  }
}
