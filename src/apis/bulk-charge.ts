import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { BulkChargeInitiateBody } from "../models/index.js";
import type { BulkChargeListQuery } from "../models/index.js";
import type { BulkChargeChargesQuery } from "../models/index.js";
import type { BulkChargeListData } from "../models/index.js";
import type { BulkChargeInitiateData } from "../models/index.js";
import type { BulkChargeFetchData } from "../models/index.js";
import type { BulkChargeChargesData } from "../models/index.js";

export class BulkChargeApi {
  constructor(private readonly client: ApiClient) {}

  /** List all bulk charge batches. */
  async list(query?: BulkChargeListQuery): Promise<ApiResponse<BulkChargeListData>> {
    return this.client.request("GET", "/bulkcharge", { query: query });
  }

  /** Charge multiple customers in batches */
  async initiate(payload: BulkChargeInitiateBody): Promise<ApiResponse<BulkChargeInitiateData>> {
    return this.client.request("POST", "/bulkcharge", { body: payload });
  }

  /** This endpoint retrieves a specific batch code. It also returns useful information on its progress by 
way of the `total_charges` and `pending_charges` attributes.
 */
  async fetch(code: string): Promise<ApiResponse<BulkChargeFetchData>> {
    let path = "/bulkcharge/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** This endpoint retrieves the charges associated with a specified batch code */
  async charges(code: string, query?: BulkChargeChargesQuery): Promise<ApiResponse<BulkChargeChargesData>> {
    let path = "/bulkcharge/{code}/charges";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path, { query: query });
  }

  /** Pause the processing of a charge batch */
  async pause(code: string): Promise<ApiResponse<unknown>> {
    let path = "/bulkcharge/pause/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Resume the processing of a previously paused charge batch */
  async resume(code: string): Promise<ApiResponse<unknown>> {
    let path = "/bulkcharge/resume/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }
}
