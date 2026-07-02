import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { SettlementSettlementsFetchQuery } from "../models/index.js";
import type { SettlementSettlementsFetchData } from "../models/index.js";
import type { SettlementSettlementsTransactionData } from "../models/index.js";

export class SettlementApi {
  constructor(private readonly client: ApiClient) {}

  /** List settlements made to your settlement accounts */
  async settlementsFetch(query?: SettlementSettlementsFetchQuery): Promise<ApiResponse<SettlementSettlementsFetchData>> {
    return this.client.request("GET", "/settlement", { query: query });
  }

  /** Get the transactions that make up a particular settlement */
  async settlementsTransaction(id: string): Promise<ApiResponse<SettlementSettlementsTransactionData>> {
    let path = "/settlement/{id}/transactions";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }
}
