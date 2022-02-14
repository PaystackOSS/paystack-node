/**
 * Paystack
 * The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.
 *
 * The version of the Paystack Node library: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BaseAPI } from '../runtime';
import { Response } from '../models';
export interface CreateRequest {
    transaction: string;
    amount?: number;
    currency?: string;
    customer_note?: string;
    merchant_note?: string;
}
export interface FetchRequest {
    id: string;
}
export interface ListRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}
/**
 *
 */
export declare class Refund extends BaseAPI {
    /**
     * Create Refund
     */
    create(requestParameters: CreateRequest): Promise<Response>;
    /**
     * Fetch Refund
     */
    fetch(requestParameters: FetchRequest): Promise<Response>;
    /**
     * List Refunds
     */
    list(requestParameters: ListRequest): Promise<Response>;
}
