import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { MiscellaneousAvsQuery } from "../models/index.js";
import type { MiscellaneousResolveCardBinData } from "../models/index.js";
import type { MiscellaneousListCountriesData } from "../models/index.js";
import type { MiscellaneousAvsData } from "../models/index.js";

export class MiscellaneousApi {
  constructor(private readonly client: ApiClient) {}

  /** Get the details of a card BIN */
  async resolveCardBin(bin: string): Promise<ApiResponse<MiscellaneousResolveCardBinData>> {
    let path = "/decision/bin/{bin}";
    path = path.replace("{bin}", encodeURIComponent(String(bin)));
    return this.client.request("GET", path);
  }

  /** List all supported countries on Paystack */
  async listCountries(): Promise<ApiResponse<MiscellaneousListCountriesData>> {
    return this.client.request("GET", "/country");
  }

  /** Get a list of states for a country for address verification */
  async avs(query?: MiscellaneousAvsQuery): Promise<ApiResponse<MiscellaneousAvsData>> {
    return this.client.request("GET", "/address_verification/states", { query: query });
  }
}
