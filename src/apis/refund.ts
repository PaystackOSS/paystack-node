import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { RefundCreateBody } from "../models/index.js";
import type { RefundRetryBody } from "../models/index.js";
import type { RefundListQuery } from "../models/index.js";
import type { RefundListData } from "../models/index.js";
import type { RefundCreateData } from "../models/index.js";
import type { RefundRetryData } from "../models/index.js";
import type { RefundFetchData } from "../models/index.js";

export class RefundApi {
  constructor(private readonly client: ApiClient) {}

  /** List previously created refunds */
  async list(query?: RefundListQuery): Promise<ApiResponse<RefundListData>> {
    return this.client.request("GET", "/refund", { query: query });
  }

  /** Initiate a refund for a previously completed transaction */
  async create(payload: RefundCreateBody): Promise<ApiResponse<RefundCreateData>> {
    return this.client.request("POST", "/refund", { body: payload });
  }

  /** Retry a refund with a `needs-attention` status by providing the bank account details of a customer. */
  async retry(id: string, payload: RefundRetryBody): Promise<ApiResponse<RefundRetryData>> {
    let path = "/refund/retry_with_customer_details/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Get a previously created refund */
  async fetch(id: string): Promise<ApiResponse<RefundFetchData>> {
    let path = "/refund/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }
}
