import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { DedicatedVirtualAccountDedicatedAccountCreateBody } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountAssignBody } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountAddSplitBody } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountRemoveSplitBody } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountListQuery } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountRequeryQuery } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountListData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountCreateData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountAssignData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountFetchData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountDeactivateData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountRequeryData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountAddSplitData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountRemoveSplitData } from "../models/index.js";
import type { DedicatedVirtualAccountDedicatedAccountAvailableProvidersData } from "../models/index.js";

export class DedicatedVirtualAccountApi {
  constructor(private readonly client: ApiClient) {}

  /** List dedicated virtual accounts available on your integration. */
  async dedicatedAccountList(query?: DedicatedVirtualAccountDedicatedAccountListQuery): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountListData>> {
    return this.client.request("GET", "/dedicated_account", { query: query });
  }

  /** Create a dedicated virtual account for an existing customer */
  async dedicatedAccountCreate(payload: DedicatedVirtualAccountDedicatedAccountCreateBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountCreateData>> {
    return this.client.request("POST", "/dedicated_account", { body: payload });
  }

  /** With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer. */
  async dedicatedAccountAssign(payload: DedicatedVirtualAccountDedicatedAccountAssignBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountAssignData>> {
    return this.client.request("POST", "/dedicated_account/assign", { body: payload });
  }

  /** Get details of a dedicated virtual account on your integration. */
  async dedicatedAccountFetch(id: string): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountFetchData>> {
    let path = "/dedicated_account/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Deactivate a dedicated virtual account on your integration. */
  async dedicatedAccountDeactivate(id: string): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountDeactivateData>> {
    let path = "/dedicated_account/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("DELETE", path);
  }

  /** Requery Dedicated Virtual Account for new transactions */
  async dedicatedAccountRequery(query?: DedicatedVirtualAccountDedicatedAccountRequeryQuery): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountRequeryData>> {
    return this.client.request("GET", "/dedicated_account/requery", { query: query });
  }

  /** Split a dedicated virtual account transaction with one or more accounts */
  async dedicatedAccountAddSplit(payload: DedicatedVirtualAccountDedicatedAccountAddSplitBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountAddSplitData>> {
    return this.client.request("POST", "/dedicated_account/split", { body: payload });
  }

  /** If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint */
  async dedicatedAccountRemoveSplit(payload: DedicatedVirtualAccountDedicatedAccountRemoveSplitBody): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountRemoveSplitData>> {
    return this.client.request("DELETE", "/dedicated_account/split", { body: payload });
  }

  /** Get available bank providers for a dedicated virtual account */
  async dedicatedAccountAvailableProviders(): Promise<ApiResponse<DedicatedVirtualAccountDedicatedAccountAvailableProvidersData>> {
    return this.client.request("GET", "/dedicated_account/available_providers");
  }
}
