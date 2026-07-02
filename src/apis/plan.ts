import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { PlanCreateBody } from "../models/index.js";
import type { PlanUpdateBody } from "../models/index.js";
import type { PlanListQuery } from "../models/index.js";
import type { PlanListData } from "../models/index.js";
import type { PlanCreateData } from "../models/index.js";
import type { PlanFetchData } from "../models/index.js";

export class PlanApi {
  constructor(private readonly client: ApiClient) {}

  /** List all recurring payment plans */
  async list(query?: PlanListQuery): Promise<ApiResponse<PlanListData>> {
    return this.client.request("GET", "/plan", { query: query });
  }

  /** Create a plan for recurring payments */
  async create(payload: PlanCreateBody): Promise<ApiResponse<PlanCreateData>> {
    return this.client.request("POST", "/plan", { body: payload });
  }

  /** Get the details of a payment plan */
  async fetch(code: string): Promise<ApiResponse<PlanFetchData>> {
    let path = "/plan/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Update a plan details on your integration */
  async update(code: string, payload: PlanUpdateBody): Promise<ApiResponse<unknown>> {
    let path = "/plan/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path, { body: payload });
  }
}
