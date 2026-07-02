import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { PaymentRequestCreateBody } from "../models/index.js";
import type { PaymentRequestUpdateBody } from "../models/index.js";
import type { PaymentRequestListQuery } from "../models/index.js";
import type { PaymentRequestListData } from "../models/index.js";
import type { PaymentRequestCreateData } from "../models/index.js";
import type { PaymentRequestFetchData } from "../models/index.js";
import type { PaymentRequestUpdateData } from "../models/index.js";
import type { PaymentRequestVerifyData } from "../models/index.js";
import type { PaymentRequestTotalsData } from "../models/index.js";
import type { PaymentRequestFinalizeData } from "../models/index.js";

export class PaymentRequestApi {
  constructor(private readonly client: ApiClient) {}

  /** List all previously created payment requests to your customers */
  async list(query?: PaymentRequestListQuery): Promise<ApiResponse<PaymentRequestListData>> {
    return this.client.request("GET", "/paymentrequest", { query: query });
  }

  /** Create a new payment request by issuing an invoice to a customer */
  async create(payload: PaymentRequestCreateBody): Promise<ApiResponse<PaymentRequestCreateData>> {
    return this.client.request("POST", "/paymentrequest", { body: payload });
  }

  /** Fetch a previously created payment request */
  async fetch(id: string): Promise<ApiResponse<PaymentRequestFetchData>> {
    let path = "/paymentrequest/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Update a previously created payment request */
  async update(id: string, payload: PaymentRequestUpdateBody): Promise<ApiResponse<PaymentRequestUpdateData>> {
    let path = "/paymentrequest/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Verify the status of a previously created payment request */
  async verify(id: string): Promise<ApiResponse<PaymentRequestVerifyData>> {
    let path = "/paymentrequest/verify/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Trigger an email reminder to a customer for a previously created payment request */
  async notify(id: string): Promise<ApiResponse<unknown>> {
    let path = "/paymentrequest/notify/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path);
  }

  /** Get the metric of all pending and successful payment requests */
  async totals(): Promise<ApiResponse<PaymentRequestTotalsData>> {
    return this.client.request("GET", "/paymentrequest/totals");
  }

  /** Finalise the creation of a draft payment request for a customer */
  async finalize(id: string): Promise<ApiResponse<PaymentRequestFinalizeData>> {
    let path = "/paymentrequest/finalize/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path);
  }

  /** Archive a payment request to clean up your records. An archived payment request cannot be verified and will not 
be returned when listing all previously created payment requests.
 */
  async archive(id: string): Promise<ApiResponse<unknown>> {
    let path = "/paymentrequest/archive/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path);
  }
}
