import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { SplitCreateBody } from "../models/index.js";
import type { SplitUpdateBody } from "../models/index.js";
import type { SplitAddSubaccountBody } from "../models/index.js";
import type { SplitRemoveSubaccountBody } from "../models/index.js";
import type { SplitListQuery } from "../models/index.js";
import type { SplitListData } from "../models/index.js";
import type { SplitCreateData } from "../models/index.js";
import type { SplitFetchData } from "../models/index.js";
import type { SplitUpdateData } from "../models/index.js";
import type { SplitAddSubaccountData } from "../models/index.js";

export class SplitApi {
  constructor(private readonly client: ApiClient) {}

  /** List the transaction splits available on your integration */
  async list(query?: SplitListQuery): Promise<ApiResponse<SplitListData>> {
    return this.client.request("GET", "/split", { query: query });
  }

  /** Create a split configuration for transactions */
  async create(payload: SplitCreateBody): Promise<ApiResponse<SplitCreateData>> {
    return this.client.request("POST", "/split", { body: payload });
  }

  /** Get details of a split configuration for a transaction */
  async fetch(id: string): Promise<ApiResponse<SplitFetchData>> {
    let path = "/split/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Update a split configuration for transactions */
  async update(id: string, payload: SplitUpdateBody): Promise<ApiResponse<SplitUpdateData>> {
    let path = "/split/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Add a subaccount to a split configuration, or update the share of an existing subaccount */
  async addSubaccount(id: string, payload: SplitAddSubaccountBody): Promise<ApiResponse<SplitAddSubaccountData>> {
    let path = "/split/{id}/subaccount/add";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Remove a subaccount from a split configuration */
  async removeSubaccount(id: string, payload: SplitRemoveSubaccountBody): Promise<ApiResponse<unknown>> {
    let path = "/split/{id}/subaccount/remove";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }
}
