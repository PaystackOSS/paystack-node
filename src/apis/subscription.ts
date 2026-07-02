import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { SubscriptionCreateBody } from "../models/index.js";
import type { SubscriptionDisableBody } from "../models/index.js";
import type { SubscriptionEnableBody } from "../models/index.js";
import type { SubscriptionListQuery } from "../models/index.js";
import type { SubscriptionListData } from "../models/index.js";
import type { SubscriptionCreateData } from "../models/index.js";
import type { SubscriptionFetchData } from "../models/index.js";
import type { SubscriptionEnableData } from "../models/index.js";
import type { SubscriptionManageLinkData } from "../models/index.js";
import type { SubscriptionManageEmailData } from "../models/index.js";

export class SubscriptionApi {
  constructor(private readonly client: ApiClient) {}

  /** List all subscriptions available on your integration */
  async list(query?: SubscriptionListQuery): Promise<ApiResponse<SubscriptionListData>> {
    return this.client.request("GET", "/subscription", { query: query });
  }

  /** Create a subscription a customer */
  async create(payload: SubscriptionCreateBody): Promise<ApiResponse<SubscriptionCreateData>> {
    return this.client.request("POST", "/subscription", { body: payload });
  }

  /** Get details of a customer's subscription */
  async fetch(code: string): Promise<ApiResponse<SubscriptionFetchData>> {
    let path = "/subscription/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Disable a subscription on your integration */
  async disable(payload: SubscriptionDisableBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/subscription/disable", { body: payload });
  }

  /** Enable a subscription on your integration */
  async enable(payload: SubscriptionEnableBody): Promise<ApiResponse<SubscriptionEnableData>> {
    return this.client.request("POST", "/subscription/enable", { body: payload });
  }

  /** Generate a link for updating the card on a subscription */
  async manageLink(code: string): Promise<ApiResponse<SubscriptionManageLinkData>> {
    let path = "/subscription/{code}/manage/link";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Email a customer a link for updating the card on their subscription */
  async manageEmail(code: string): Promise<ApiResponse<SubscriptionManageEmailData>> {
    let path = "/subscription/{code}/manage/email";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("POST", path);
  }
}
