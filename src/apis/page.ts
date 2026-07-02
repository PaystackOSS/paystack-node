import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { PageCreateBody } from "../models/index.js";
import type { PageUpdateBody } from "../models/index.js";
import type { PageAddProductsBody } from "../models/index.js";
import type { PageListQuery } from "../models/index.js";
import type { PageListData } from "../models/index.js";
import type { PageCreateData } from "../models/index.js";
import type { PageFetchData } from "../models/index.js";
import type { PageUpdateData } from "../models/index.js";
import type { PageAddProductsData } from "../models/index.js";

export class PageApi {
  constructor(private readonly client: ApiClient) {}

  /** List all previously created payment pages */
  async list(query?: PageListQuery): Promise<ApiResponse<PageListData>> {
    return this.client.request("GET", "/page", { query: query });
  }

  /** Create a webpage to receive payments */
  async create(payload: PageCreateBody): Promise<ApiResponse<PageCreateData>> {
    return this.client.request("POST", "/page", { body: payload });
  }

  /** Get a previously created payment page */
  async fetch(id: string): Promise<ApiResponse<PageFetchData>> {
    let path = "/page/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Update a previously created payment page */
  async update(id: string, payload: PageUpdateBody): Promise<ApiResponse<PageUpdateData>> {
    let path = "/page/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Check if a custom slug is available for use when creating a payment page */
  async checkSlugAvailability(slug: string): Promise<ApiResponse<unknown>> {
    let path = "/page/check_slug_availability/{slug}";
    path = path.replace("{slug}", encodeURIComponent(String(slug)));
    return this.client.request("GET", path);
  }

  /** Add products to a previously created payment page. You can only add products to pages
that was created with a `product` type.
 */
  async addProducts(id: string, payload: PageAddProductsBody): Promise<ApiResponse<PageAddProductsData>> {
    let path = "/page/{id}/product";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }
}
