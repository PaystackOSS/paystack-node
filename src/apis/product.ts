import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { ProductCreateBody } from "../models/index.js";
import type { ProductUpdateBody } from "../models/index.js";
import type { ProductListQuery } from "../models/index.js";
import type { ProductListData } from "../models/index.js";
import type { ProductCreateData } from "../models/index.js";
import type { ProductFetchData } from "../models/index.js";
import type { ProductUpdateData } from "../models/index.js";

export class ProductApi {
  constructor(private readonly client: ApiClient) {}

  /** List all previously created products */
  async list(query?: ProductListQuery): Promise<ApiResponse<ProductListData>> {
    return this.client.request("GET", "/product", { query: query });
  }

  /** Create a new product on your integration */
  async create(payload: ProductCreateBody): Promise<ApiResponse<ProductCreateData>> {
    return this.client.request("POST", "/product", { body: payload });
  }

  /** Fetch a previously created product */
  async fetch(id: string): Promise<ApiResponse<ProductFetchData>> {
    let path = "/product/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Update a previously created product */
  async update(id: string, payload: ProductUpdateBody): Promise<ApiResponse<ProductUpdateData>> {
    let path = "/product/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Delete a previously created product */
  async delete_(id: string): Promise<ApiResponse<unknown>> {
    let path = "/product/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("DELETE", path);
  }
}
