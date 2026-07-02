import { ApiClient } from "../core/api-client.js";
import { ApiResponse } from "../core/types.js";
import type { CustomerCreateBody } from "../models/index.js";
import type { CustomerUpdateBody } from "../models/index.js";
import type { CustomerRiskActionBody } from "../models/index.js";
import type { CustomerValidateBody } from "../models/index.js";
import type { CustomerInitializeAuthorizationBody } from "../models/index.js";
import type { CustomerDeactivateAuthorizationBody } from "../models/index.js";
import type { CustomerInitializeDirectDebitBody } from "../models/index.js";
import type { CustomerDirectDebitActivationChargeBody } from "../models/index.js";
import type { CustomerListQuery } from "../models/index.js";
import type { CustomerListData } from "../models/index.js";
import type { CustomerCreateData } from "../models/index.js";
import type { CustomerFetchData } from "../models/index.js";
import type { CustomerUpdateData } from "../models/index.js";
import type { CustomerRiskActionData } from "../models/index.js";
import type { CustomerInitializeAuthorizationData } from "../models/index.js";
import type { CustomerVerifyAuthorizationData } from "../models/index.js";
import type { CustomerInitializeDirectDebitData } from "../models/index.js";
import type { CustomerFetchMandateAuthorizationsData } from "../models/index.js";

export class CustomerApi {
  constructor(private readonly client: ApiClient) {}

  /** List customers on your integration */
  async list(query?: CustomerListQuery): Promise<ApiResponse<CustomerListData>> {
    return this.client.request("GET", "/customer", { query: query });
  }

  /** Create a customer on your integration */
  async create(payload: CustomerCreateBody): Promise<ApiResponse<CustomerCreateData>> {
    return this.client.request("POST", "/customer", { body: payload });
  }

  /** Get details of a customer on your integration. */
  async fetch(code: string): Promise<ApiResponse<CustomerFetchData>> {
    let path = "/customer/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("GET", path);
  }

  /** Update a customer's details on your integration */
  async update(code: string, payload: CustomerUpdateBody): Promise<ApiResponse<CustomerUpdateData>> {
    let path = "/customer/{code}";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Set customer's risk action by whitelisting or blacklisting the customer */
  async riskAction(payload: CustomerRiskActionBody): Promise<ApiResponse<CustomerRiskActionData>> {
    return this.client.request("POST", "/customer/set_risk_action", { body: payload });
  }

  /** Validate a customer's identity */
  async validate(code: string, payload: CustomerValidateBody): Promise<ApiResponse<unknown>> {
    let path = "/customer/{code}/identification";
    path = path.replace("{code}", encodeURIComponent(String(code)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Initiate a request to create a reusable authorization code for recurring transactions */
  async initializeAuthorization(payload: CustomerInitializeAuthorizationBody): Promise<ApiResponse<CustomerInitializeAuthorizationData>> {
    return this.client.request("POST", "/customer/authorization/initialize", { body: payload });
  }

  /** Check the status of an authorization request */
  async verifyAuthorization(reference: string): Promise<ApiResponse<CustomerVerifyAuthorizationData>> {
    let path = "/customer/authorization/verify/{reference}";
    path = path.replace("{reference}", encodeURIComponent(String(reference)));
    return this.client.request("GET", path);
  }

  /** Deactivate an authorization for any payment channel. */
  async deactivateAuthorization(payload: CustomerDeactivateAuthorizationBody): Promise<ApiResponse<unknown>> {
    return this.client.request("POST", "/customer/authorization/deactivate", { body: payload });
  }

  /** Initialize the process of linking an account to a customer for Direct Debit transactions */
  async initializeDirectDebit(id: string, payload: CustomerInitializeDirectDebitBody): Promise<ApiResponse<CustomerInitializeDirectDebitData>> {
    let path = "/customer/{id}/initialize-direct-debit";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("POST", path, { body: payload });
  }

  /** Trigger an activation charge on an inactive mandate on behalf of your customer */
  async directDebitActivationCharge(id: string, payload: CustomerDirectDebitActivationChargeBody): Promise<ApiResponse<unknown>> {
    let path = "/customer/{id}/directdebit-activation-charge";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("PUT", path, { body: payload });
  }

  /** Get the list of direct debit mandates associated with a customer */
  async fetchMandateAuthorizations(id: string): Promise<ApiResponse<CustomerFetchMandateAuthorizationsData>> {
    let path = "/customer/{id}/directdebit-mandate-authorizations";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    return this.client.request("GET", path);
  }
}
