import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { StorefrontCreateBody } from "../models/index.js";
import type { StorefrontUpdateBody } from "../models/index.js";
import type { StorefrontAddProductsBody } from "../models/index.js";
import type { StorefrontListQuery } from "../models/index.js";
import type { StorefrontListData } from "../models/index.js";
import type { StorefrontCreateData } from "../models/index.js";
import type { StorefrontFetchData } from "../models/index.js";
import type { StorefrontVerifySlugData } from "../models/index.js";
import type { StorefrontFetchOrdersData } from "../models/index.js";
import type { StorefrontListProductsData } from "../models/index.js";
import type { StorefrontAddProductsData } from "../models/index.js";
import type { StorefrontPublishData } from "../models/index.js";
import type { StorefrontDuplicateData } from "../models/index.js";

export class StorefrontApi {
  constructor(private readonly client: ApiClient) {}

  /** List the storefronts you previously created */
  async list(query?: StorefrontListQuery): Promise<ApiResponse<StorefrontListData>> {
    return this.client.request("GET", "/storefront", { query: query });
  }

  /** Create a digital shop to manage and display your products */
  async create(payload: StorefrontCreateBody): Promise<ApiResponse<StorefrontCreateData>> {
    return this.client.request("POST", "/storefront", { body: payload });
  }

  /** Get the details of a previously created Storefront */
  async fetch(id: string): Promise<ApiResponse<StorefrontFetchData>> {
    let path = "/storefront/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Update the details of a previously created Storefront */
  async update(id: string, payload: StorefrontUpdateBody): Promise<ApiResponse<unknown>> {
    let path = "/storefront/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Delete a previously created Storefront */
  async delete_(id: string): Promise<ApiResponse<unknown>> {
    let path = "/storefront/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("DELETE", path);
  }

  /** Verify the availability of a slug before using it for your Storefront */
  async verifySlug(slug: string): Promise<ApiResponse<StorefrontVerifySlugData>> {
    let path = "/storefront/verify/{slug}";
    path = path.replace("{slug}", encodeURIComponent(String(slug)));
    return this.client.request("GET", path);
  }

  /** Fetch all orders in your Storefront */
  async fetchOrders(id: string): Promise<ApiResponse<StorefrontFetchOrdersData>> {
    let path = "/storefront/{id}/order";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** List the products in a Storefront */
  async listProducts(id: string): Promise<ApiResponse<StorefrontListProductsData>> {
    let path = "/storefront/{id}/product";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }

  /** Add previously created products to a Storefront */
  async addProducts(id: string, payload: StorefrontAddProductsBody): Promise<ApiResponse<StorefrontAddProductsData>> {
    let path = "/storefront/{id}/product";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Make your Storefront publicly available */
  async publish(id: string): Promise<ApiResponse<StorefrontPublishData>> {
    let path = "/storefront/{id}/publish";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path);
  }

  /** Duplicate a previously created Storefront */
  async duplicate(id: string): Promise<ApiResponse<StorefrontDuplicateData>> {
    let path = "/storefront/{id}/duplicate";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path);
  }
}
