import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { TerminalSendEventBody } from "../models/index.js";
import type { TerminalUpdateBody } from "../models/index.js";
import type { TerminalCommissionBody } from "../models/index.js";
import type { TerminalDecommissionBody } from "../models/index.js";
import type { TerminalListQuery } from "../models/index.js";
import type { TerminalSendEventData } from "../models/index.js";
import type { TerminalFetchEventStatusData } from "../models/index.js";
import type { TerminalFetchTerminalStatusData } from "../models/index.js";
import type { TerminalListData } from "../models/index.js";
import type { TerminalFetchData } from "../models/index.js";

export class TerminalApi {
  constructor(private readonly client: ApiClient) {}

  /** Send an event from your application to the Paystack Terminal */
  async sendEvent(id: string, payload: TerminalSendEventBody): Promise<ApiResponse<TerminalSendEventData>> {
    let path = "/terminal/{id}/event";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Check the status of an event sent to the Terminal */
  async fetchEventStatus(terminal_id: string, event_id: string): Promise<ApiResponse<TerminalFetchEventStatusData>> {
    let path = "/terminal/{terminal_id}/event/{event_id}";
    path = path.replace("{terminal_id}", encodeURIComponent(String(terminal_id)));
    path = path.replace("{event_id}", encodeURIComponent(String(event_id)));
    return this.client.request("GET", path);
  }

  /** Check the availiability of a Terminal before sending an event to it */
  async fetchTerminalStatus(terminal_id: string): Promise<ApiResponse<TerminalFetchTerminalStatusData>> {
    let path = "/terminal/{terminal_id}/presence";
    path = path.replace("{terminal_id}", encodeURIComponent(String(terminal_id)));
    return this.client.request("GET", path);
  }

  /** List the Terminals available on your integration */
  async list(query?: TerminalListQuery): Promise<ApiResponse<TerminalListData>> {
    return this.client.request("GET", "/terminal", { query: query });
  }

  /** Get the details of a Terminal */
  async fetch(terminal_id: string): Promise<ApiResponse<TerminalFetchData>> {
    let path = "/terminal/{terminal_id}";
    path = path.replace("{terminal_id}", encodeURIComponent(String(terminal_id)));
    return this.client.request("GET", path);
  }

  /** Update the details of a Terminal */
  async update(terminal_id: string, payload: TerminalUpdateBody): Promise<ApiResponse<unknown>> {
    let path = "/terminal/{terminal_id}";
    path = path.replace("{terminal_id}", encodeURIComponent(String(terminal_id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Activate your debug device by linking it to your integration */
  async commission(payload: TerminalCommissionBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/terminal/commission_device", { body: payload });
  }

  /** Unlink your debug device from your integration */
  async decommission(payload: TerminalDecommissionBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/terminal/decommission_device", { body: payload });
  }
}
