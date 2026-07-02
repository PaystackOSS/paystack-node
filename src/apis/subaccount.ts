import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { SubaccountCreateBody } from "../models/index.js";
import type { SubaccountUpdateBody } from "../models/index.js";
import type { SubaccountListQuery } from "../models/index.js";
import type { SubaccountListData } from "../models/index.js";
import type { SubaccountCreateData } from "../models/index.js";
import type { SubaccountFetchData } from "../models/index.js";
import type { SubaccountUpdateData } from "../models/index.js";

export class SubaccountApi {
  constructor(private readonly client: ApiClient) {}

  /** List subaccounts available on your integration */
  async list(query?: SubaccountListQuery): Promise<ApiResponse<SubaccountListData>> {
    return this.client.request("GET", "/subaccount", { query: query });
  }

  /** Create a subacount for a partner */
  async create(payload: SubaccountCreateBody): Promise<ApiResponse<SubaccountCreateData>> {
    return this.client.request("POST", "/subaccount", { body: payload });
  }

  /** Get details of a subaccount on your integration */
  async fetch(code: string): Promise<ApiResponse<SubaccountFetchData>> {
    let path = "/subaccount/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Update a subaccount details on your integration */
  async update(code: string, payload: SubaccountUpdateBody): Promise<ApiResponse<SubaccountUpdateData>> {
    let path = "/subaccount/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path, { body: payload });
  }
}
