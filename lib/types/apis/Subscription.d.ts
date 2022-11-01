/**
 * Paystack
 * The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.
 *
 * The version of the Paystack Node library: 1.0.0
 * Contact: techsupport@paystack.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BaseAPI } from '../runtime';
import { Response } from '../models';
export interface CreateRequest {
    customer: string;
    plan: string;
    authorization?: string;
    start_date?: Date;
}
export interface DisableRequest {
    code: string;
    token: string;
}
export interface EnableRequest {
    code: string;
    token: string;
}
export interface FetchRequest {
    code: string;
}
export interface ListRequest {
    perPage?: number;
    page?: number;
    plan?: string;
    customer?: string;
    from?: Date;
    to?: Date;
}
export interface ManageEmailRequest {
    code: string;
}
export interface ManageLinkRequest {
    code: string;
}
/**
 *
 */
export declare class Subscription extends BaseAPI {
    /**
     * Create Subscription
     */
    create(requestParameters: CreateRequest): Promise<Response>;
    /**
     * Disable Subscription
     */
    disable(requestParameters: DisableRequest): Promise<Response>;
    /**
     * Enable Subscription
     */
    enable(requestParameters: EnableRequest): Promise<Response>;
    /**
     * Fetch Subscription
     */
    fetch(requestParameters: FetchRequest): Promise<Response>;
    /**
     * List Subscriptions
     */
    list(requestParameters: ListRequest): Promise<Response>;
    /**
     * Send Update Subscription Link
     */
    manageEmail(requestParameters: ManageEmailRequest): Promise<Response>;
    /**
     * Generate Update Subscription Link
     */
    manageLink(requestParameters: ManageLinkRequest): Promise<Response>;
}