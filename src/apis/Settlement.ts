/* tslint:disable */
/* eslint-disable */
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


import { BaseAPI, RequiredError } from '../runtime';
import {
    Response,
    ResponseFromJSON
} from '../models';

export interface FetchRequest {
    perPage?: number;
    page?: number;
}

export interface TransactionRequest {
    id: string;
}

/**
 * 
 */
export class Settlement extends BaseAPI {

    /**
     * Fetch Settlements
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }


        const response = await this.request({
            path: `/settlement`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Settlement Transactions
     */
    async transaction(requestParameters: TransactionRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling transaction.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/settlement/{id}/transaction`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

}
