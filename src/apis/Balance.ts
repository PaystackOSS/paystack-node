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

export interface LedgerRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}

/**
 * 
 */
export class Balance extends BaseAPI {

    /**
     * You can only transfer from what you have
     * Fetch Balance
     */
    async fetch(): Promise<Response> {
        const queryParameters: any = {};


        const response = await this.request({
            path: `/balance`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Balance Ledger
     */
    async ledger(requestParameters: LedgerRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }


        const response = await this.request({
            path: `/balance/ledger`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

}
