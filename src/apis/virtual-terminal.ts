import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { VirtualTerminalCreateBody } from "../models/index.js";
import type { VirtualTerminalUpdateBody } from "../models/index.js";
import type { VirtualTerminalDestinationAssignBody } from "../models/index.js";
import type { VirtualTerminalDestinationUnassignBody } from "../models/index.js";
import type { VirtualTerminalAddSplitCodeBody } from "../models/index.js";
import type { VirtualTerminalDeleteSplitCodeBody } from "../models/index.js";
import type { VirtualTerminalListQuery } from "../models/index.js";
import type { VirtualTerminalListData } from "../models/index.js";
import type { VirtualTerminalCreateData } from "../models/index.js";
import type { VirtualTerminalFetchData } from "../models/index.js";
import type { VirtualTerminalUpdateData } from "../models/index.js";
import type { VirtualTerminalDestinationAssignData } from "../models/index.js";
import type { VirtualTerminalAddSplitCodeData } from "../models/index.js";

export class VirtualTerminalApi {
  constructor(private readonly client: ApiClient) {}

  /** List Virtual Terminals on your integration */
  async list(query?: VirtualTerminalListQuery): Promise<ApiResponse<VirtualTerminalListData>> {
    return this.client.request("GET", "/virtual_terminal", { query: query });
  }

  /** Create a Virtual Terminal on your integration */
  async create(payload: VirtualTerminalCreateBody): Promise<ApiResponse<VirtualTerminalCreateData>> {
    return this.client.request("POST", "/virtual_terminal", { body: payload });
  }

  /** Fetch a Virtual Terminal on your integration */
  async fetch(code: string): Promise<ApiResponse<VirtualTerminalFetchData>> {
    let path = "/virtual_terminal/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Update a Virtual Terminal on your integration */
  async update(code: string, payload: VirtualTerminalUpdateBody): Promise<ApiResponse<VirtualTerminalUpdateData>> {
    let path = "/virtual_terminal/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Deactivate a Virtual Terminal on your integration */
  async deactivate(code: string): Promise<ApiResponse<unknown>> {
    let path = "/virtual_terminal/{code}/deactivate";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path);
  }

  /** Add a destination (WhatsApp number) to a Virtual Terminal on your integration */
  async destinationAssign(code: string, payload: VirtualTerminalDestinationAssignBody): Promise<ApiResponse<VirtualTerminalDestinationAssignData>> {
    let path = "/virtual_terminal/{code}/destination/assign";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Unassign a destination (WhatsApp Number) from a Virtual Terminal on your integration */
  async destinationUnassign(code: string, payload: VirtualTerminalDestinationUnassignBody): Promise<ApiResponse<unknown>> {
    let path = "/virtual_terminal/{code}/destination/unassign";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Add Split Code to Virtual Terminal */
  async addSplitCode(code: string, payload: VirtualTerminalAddSplitCodeBody): Promise<ApiResponse<VirtualTerminalAddSplitCodeData>> {
    let path = "/virtual_terminal/{code}/split_code";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Remove Split Code from Virtual Terminal */
  async deleteSplitCode(code: string, payload: VirtualTerminalDeleteSplitCodeBody): Promise<ApiResponse<unknown>> {
    let path = "/virtual_terminal/{code}/split_code";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("DELETE", path, { body: payload });
  }
}
