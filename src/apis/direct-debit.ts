import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { DirectDebitDirectdebitTriggerActivationChargeBody } from "../models/index.js";
import type { DirectDebitDirectdebitListMandateAuthorizationsQuery } from "../models/index.js";
import type { DirectDebitDirectdebitListMandateAuthorizationsData } from "../models/index.js";

export class DirectDebitApi {
  constructor(private readonly client: ApiClient) {}

  /** Trigger activation charge for specified customers */
  async directdebitTriggerActivationCharge(payload: DirectDebitDirectdebitTriggerActivationChargeBody): Promise<ApiResponse<unknown>> {
    return this.client.request("PUT", "/directdebit/activation-charge", { body: payload });
  }

  /** Get a list of all the direct debit mandates on your integration */
  async directdebitListMandateAuthorizations(query?: DirectDebitDirectdebitListMandateAuthorizationsQuery): Promise<ApiResponse<DirectDebitDirectdebitListMandateAuthorizationsData>> {
    return this.client.request("GET", "/directdebit/mandate-authorizations", { query: query });
  }
}
