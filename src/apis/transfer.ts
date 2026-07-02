import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { TransferInitiateBody } from "../models/index.js";
import type { TransferFinalizeBody } from "../models/index.js";
import type { TransferBulkBody } from "../models/index.js";
import type { TransferResendOtpBody } from "../models/index.js";
import type { TransferDisableOtpFinalizeBody } from "../models/index.js";
import type { TransferListQuery } from "../models/index.js";
import type { TransferExportTransferQuery } from "../models/index.js";
import type { TransferListData } from "../models/index.js";
import type { TransferInitiateData } from "../models/index.js";
import type { TransferFinalizeData } from "../models/index.js";
import type { TransferBulkData } from "../models/index.js";
import type { TransferFetchData } from "../models/index.js";
import type { TransferVerifyData } from "../models/index.js";
import type { TransferExportTransferData } from "../models/index.js";

export class TransferApi {
  constructor(private readonly client: ApiClient) {}

  /** List the transfers made on your integration */
  async list(query?: TransferListQuery): Promise<ApiResponse<TransferListData>> {
    return this.client.request("GET", "/transfer", { query: query });
  }

  /** Send money to your customers */
  async initiate(payload: TransferInitiateBody): Promise<ApiResponse<TransferInitiateData>> {
    return this.client.request("POST", "/transfer", { body: payload });
  }

  /** Finalize an initiated transfer */
  async finalize(payload: TransferFinalizeBody): Promise<ApiResponse<TransferFinalizeData>> {
    return this.client.request("POST", "/transfer/finalize_transfer", { body: payload });
  }

  /** Batch multiple transfers in a single request.

You need to disable the Transfers OTP requirement to use this endpoint.
 */
  async bulk(payload: TransferBulkBody): Promise<ApiResponse<TransferBulkData>> {
    return this.client.request("POST", "/transfer/bulk", { body: payload });
  }

  /** Get details of a transfer on your integration */
  async fetch(code: string): Promise<ApiResponse<TransferFetchData>> {
    let path = "/transfer/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Verify the status of a transfer on your integration */
  async verify(reference: string): Promise<ApiResponse<TransferVerifyData>> {
    let path = "/transfer/verify/{reference}";
    path = path.replace("{reference}", encodeURIComponent(String(reference)));
    return this.client.request("GET", path);
  }

  /** Export a list of transfers carried out on your integration */
  async exportTransfer(query?: TransferExportTransferQuery): Promise<ApiResponse<TransferExportTransferData>> {
    return this.client.request("GET", "/transfer/export", { query: query });
  }

  /** Generates and send a new OTP to customer in the event they are having trouble receiving one. */
  async resendOtp(payload: TransferResendOtpBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/transfer/resend_otp", { body: payload });
  }

  /** This is used in the event that you want to be able to complete transfers programmatically without use of OTPs. 
No arguments required. You will get an OTP to complete the request.
 */
  async disableOtp(): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/transfer/disable_otp");
  }

  /** Finalize the request to disable OTP on your transfers */
  async disableOtpFinalize(payload: TransferDisableOtpFinalizeBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/transfer/disable_otp_finalize", { body: payload });
  }

  /** In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. 
No arguments required.
 */
  async enableOtp(): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/transfer/enable_otp");
  }
}
