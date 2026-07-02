import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { TransferRecipientTransferrecipientCreateBody } from "../models/index.js";
import type { TransferRecipientTransferrecipientBulkBody } from "../models/index.js";
import type { TransferRecipientTransferrecipientUpdateBody } from "../models/index.js";
import type { TransferRecipientTransferrecipientListQuery } from "../models/index.js";
import type { TransferRecipientTransferrecipientListData } from "../models/index.js";
import type { TransferRecipientTransferrecipientCreateData } from "../models/index.js";
import type { TransferRecipientTransferrecipientBulkData } from "../models/index.js";
import type { TransferRecipientTransferrecipientFetchData } from "../models/index.js";

export class TransferRecipientApi {
  constructor(private readonly client: ApiClient) {}

  /** List transfer recipients available on your integration */
  async transferrecipientList(query?: TransferRecipientTransferrecipientListQuery): Promise<ApiResponse<TransferRecipientTransferrecipientListData>> {
    return this.client.request("GET", "/transferrecipient", { query: query });
  }

  /** Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record. */
  async transferrecipientCreate(payload: TransferRecipientTransferrecipientCreateBody): Promise<ApiResponse<TransferRecipientTransferrecipientCreateData>> {
    return this.client.request("POST", "/transferrecipient", { body: payload });
  }

  /** Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record.
 */
  async transferrecipientBulk(payload: TransferRecipientTransferrecipientBulkBody): Promise<ApiResponse<TransferRecipientTransferrecipientBulkData>> {
    return this.client.request("POST", "/transferrecipient/bulk", { body: payload });
  }

  /** Fetch the details of a transfer recipient */
  async transferrecipientFetch(code: string): Promise<ApiResponse<TransferRecipientTransferrecipientFetchData>> {
    let path = "/transferrecipient/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Update the details of a transfer recipient */
  async transferrecipientUpdate(code: string, payload: TransferRecipientTransferrecipientUpdateBody): Promise<ApiResponse<unknown>> {
    let path = "/transferrecipient/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Delete a transfer recipient (sets the transfer recipient to inactive) */
  async transferrecipientDelete(code: string): Promise<ApiResponse<unknown>> {
    let path = "/transferrecipient/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("DELETE", path);
  }
}
