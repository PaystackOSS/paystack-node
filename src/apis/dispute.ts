import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { DisputeUpdateBody } from "../models/index.js";
import type { DisputeResolveBody } from "../models/index.js";
import type { DisputeEvidenceBody } from "../models/index.js";
import type { DisputeListQuery } from "../models/index.js";
import type { DisputeDownloadQuery } from "../models/index.js";
import type { DisputeListData } from "../models/index.js";
import type { DisputeFetchData } from "../models/index.js";
import type { DisputeUpdateData } from "../models/index.js";
import type { DisputeUploadUrlData } from "../models/index.js";
import type { DisputeDownloadData } from "../models/index.js";
import type { DisputeTransactionData } from "../models/index.js";
import type { DisputeResolveData } from "../models/index.js";
import type { DisputeEvidenceData } from "../models/index.js";

export class DisputeApi {
  constructor(private readonly client: ApiClient) {}

  /** List transaction disputes filed by customers */
  async list(query?: DisputeListQuery): Promise<ApiResponse<DisputeListData>> {
    return this.client.request("GET", "/dispute", { query: query });
  }

  /** Fetch a transaction dispute */
  async fetch(id: string): Promise<ApiResponse<DisputeFetchData>> {
    let path = "/dispute/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Update a transaction dispute */
  async update(id: string, payload: DisputeUpdateBody): Promise<ApiResponse<DisputeUpdateData>> {
    let path = "/dispute/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Get the URL to upload a dispute evidence */
  async uploadUrl(id: string): Promise<ApiResponse<DisputeUploadUrlData>> {
    let path = "/dispute/{id}/upload_url";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Export the disputes available on your integration */
  async download(query?: DisputeDownloadQuery): Promise<ApiResponse<DisputeDownloadData>> {
    return this.client.request("GET", "/dispute/export", { query: query });
  }

  /** List all disputes filed for a transaction */
  async transaction(id: string): Promise<ApiResponse<DisputeTransactionData>> {
    let path = "/dispute/transaction/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Resolve a transaction dispute */
  async resolve(id: string, payload: DisputeResolveBody): Promise<ApiResponse<DisputeResolveData>> {
    let path = "/dispute/{id}/resolve";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Provide evidence for a dispute */
  async evidence(id: string, payload: DisputeEvidenceBody): Promise<ApiResponse<DisputeEvidenceData>> {
    let path = "/dispute/{id}/evidence";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }
}
