import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { TransactionInitializeBody } from "../models/index.js";
import type { TransactionChargeAuthorizationBody } from "../models/index.js";
import type { TransactionPartialDebitBody } from "../models/index.js";
import type { TransactionListQuery } from "../models/index.js";
import type { TransactionTotalsQuery } from "../models/index.js";
import type { TransactionExportQuery } from "../models/index.js";
import type { TransactionInitializeData } from "../models/index.js";
import type { TransactionChargeAuthorizationData } from "../models/index.js";
import type { TransactionPartialDebitData } from "../models/index.js";
import type { TransactionVerifyData } from "../models/index.js";
import type { TransactionListData } from "../models/index.js";
import type { TransactionFetchData } from "../models/index.js";
import type { TransactionTimelineData } from "../models/index.js";
import type { TransactionTotalsData } from "../models/index.js";
import type { TransactionExportData } from "../models/index.js";

export class TransactionApi {
  constructor(private readonly client: ApiClient) {}

  /** Create a new transaction */
  async initialize(payload: TransactionInitializeBody): Promise<ApiResponse<TransactionInitializeData>> {
    return this.client.request("POST", "/transaction/initialize", { body: payload });
  }

  /** Charge all authorizations marked as reusable with this endpoint whenever you need to receive payments */
  async chargeAuthorization(payload: TransactionChargeAuthorizationBody): Promise<ApiResponse<TransactionChargeAuthorizationData>> {
    return this.client.request("POST", "/transaction/charge_authorization", { body: payload });
  }

  /** Retrieve part of a payment from a customer */
  async partialDebit(payload: TransactionPartialDebitBody): Promise<ApiResponse<TransactionPartialDebitData>> {
    return this.client.request("POST", "/transaction/partial_debit", { body: payload });
  }

  /** Verify a previously initiated transaction using it's reference */
  async verify(reference: string): Promise<ApiResponse<TransactionVerifyData>> {
    let path = "/transaction/verify/{reference}";
    path = path.replace("{reference}", encodeURIComponent(String(reference)));
    return this.client.request("GET", path);
  }

  /** List transactions that has occurred on your integration */
  async list(query?: TransactionListQuery): Promise<ApiResponse<TransactionListData>> {
    return this.client.request("GET", "/transaction", { query: query });
  }

  /** Fetch a transaction to get its details */
  async fetch(id: string): Promise<ApiResponse<TransactionFetchData>> {
    let path = "/transaction/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Fetch the steps taken from the initiation to the completion of a transaction */
  async timeline(id: string): Promise<ApiResponse<TransactionTimelineData>> {
    let path = "/transaction/timeline/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Get the total amount of all transactions */
  async totals(query?: TransactionTotalsQuery): Promise<ApiResponse<TransactionTotalsData>> {
    return this.client.request("GET", "/transaction/totals", { query: query });
  }

  /** Download transactions that occurred on your integration for a specific timeframe */
  async export_(query?: TransactionExportQuery): Promise<ApiResponse<TransactionExportData>> {
    return this.client.request("GET", "/transaction/export", { query: query });
  }
}
