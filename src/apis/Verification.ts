/* tslint:disable */
/* eslint-disable */
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


import { BaseAPI, RequiredError } from '../runtime';
import {
    Response,
    ResponseFromJSON
} from '../models';

export interface AvsRequest {
    type?: string;
    country?: string;
    currency?: string;
}

export interface FetchBanksRequest {
    country?: string;
    pay_with_bank_transfer?: boolean;
    use_cursor?: boolean;
    perPage?: number;
    next?: string;
    previous?: string;
    gateway?: string;
}

export interface ResolveAccountNumberRequest {
    account_number?: number;
    bank_code?: number;
}

export interface ResolveCardBinRequest {
    bin: string;
}

/**
 * 
 */
export class Verification extends BaseAPI {

    /**
     * List States (AVS)
     */
    async avs(requestParameters: AvsRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
        }


        const response = await this.request({
            path: `/address_verification/states`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Banks
     */
    async fetchBanks(requestParameters: FetchBanksRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.pay_with_bank_transfer !== undefined) {
            queryParameters['pay_with_bank_transfer'] = requestParameters.pay_with_bank_transfer;
        }

        if (requestParameters.use_cursor !== undefined) {
            queryParameters['use_cursor'] = requestParameters.use_cursor;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.next !== undefined) {
            queryParameters['next'] = requestParameters.next;
        }

        if (requestParameters.previous !== undefined) {
            queryParameters['previous'] = requestParameters.previous;
        }

        if (requestParameters.gateway !== undefined) {
            queryParameters['gateway'] = requestParameters.gateway;
        }


        const response = await this.request({
            path: `/bank`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Countries
     */
    async listCountries(): Promise<Response> {
        const queryParameters: any = {};


        const response = await this.request({
            path: `/country`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Resolve Account Number
     */
    async resolveAccountNumber(requestParameters: ResolveAccountNumberRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.account_number !== undefined) {
            queryParameters['account_number'] = requestParameters.account_number;
        }

        if (requestParameters.bank_code !== undefined) {
            queryParameters['bank_code'] = requestParameters.bank_code;
        }


        const response = await this.request({
            path: `/bank/resolve`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Resolve Card BIN
     */
    async resolveCardBin(requestParameters: ResolveCardBinRequest): Promise<Response> {
        if (requestParameters.bin === null || requestParameters.bin === undefined) {
            throw new RequiredError('bin','Required parameter bin was null or undefined when calling resolveCardBin.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/decision/bin/{bin}`.replace(`{${"bin"}}`, encodeURIComponent(String(requestParameters.bin))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

}
