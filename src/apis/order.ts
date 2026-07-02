import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { OrderCreateBody } from "../models/index.js";
import type { OrderListQuery } from "../models/index.js";
import type { OrderListData } from "../models/index.js";
import type { OrderCreateData } from "../models/index.js";
import type { OrderFetchData } from "../models/index.js";
import type { OrderProductData } from "../models/index.js";
import type { OrderValidateData } from "../models/index.js";

export class OrderApi {
  constructor(private readonly client: ApiClient) {}

  /** List the previously created orders */
  async list(query?: OrderListQuery): Promise<ApiResponse<OrderListData>> {
    return this.client.request("GET", "/order", { query: query });
  }

  /** Create an order for selected items */
  async create(payload: OrderCreateBody): Promise<ApiResponse<OrderCreateData>> {
    return this.client.request("POST", "/order", { body: payload });
  }

  /** Fetch the details of a previously created order */
  async fetch(id: string): Promise<ApiResponse<OrderFetchData>> {
    let path = "/order/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Fetch all orders for a particular product */
  async product(id: string): Promise<ApiResponse<OrderProductData>> {
    let path = "/order/product/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Validate a pay for me order */
  async validate(code: string): Promise<ApiResponse<OrderValidateData>> {
    let path = "/order/{code}/validate";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }
}
