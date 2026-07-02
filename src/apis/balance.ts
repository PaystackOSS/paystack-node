import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { BalanceLedgerQuery } from "../models/index.js";
import type { BalanceFetchData } from "../models/index.js";
import type { BalanceLedgerData } from "../models/index.js";

export class BalanceApi {
  constructor(private readonly client: ApiClient) {}

  /** Fetch the available balance on your integration */
  async fetch(): Promise<ApiResponse<BalanceFetchData>> {
    return this.client.request("GET", "/balance");
  }

  /** Fetch all pay-ins and pay-outs that occured on your integration */
  async ledger(query?: BalanceLedgerQuery): Promise<ApiResponse<BalanceLedgerData>> {
    return this.client.request("GET", "/balance/ledger", { query: query });
  }
}
