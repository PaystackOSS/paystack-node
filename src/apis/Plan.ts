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

export interface CreateRequest {
    name: string;
    amount: number;
    interval: string;
    description?: string;
    send_invoices?: boolean;
    send_sms?: boolean;
    currency?: string;
    invoice_limit?: number;
}

export interface FetchRequest {
    code: string;
}

export interface ListRequest {
    perPage?: number;
    page?: number;
    interval?: string;
    amount?: number;
    from?: Date;
    to?: Date;
}

export interface UpdateRequest {
    code: string;
    name?: string;
    amount?: number;
    interval?: string;
    description?: boolean;
    send_invoices?: boolean;
    send_sms?: boolean;
    currency?: string;
    invoice_limit?: number;
}

/**
 * 
 */
export class Plan extends BaseAPI {

    /**
     * Create Plan
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling create.');
        }
        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new RequiredError('amount','Required parameter amount was null or undefined when calling create.');
        }
        if (requestParameters.interval === null || requestParameters.interval === undefined) {
            throw new RequiredError('interval','Required parameter interval was null or undefined when calling create.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.amount !== undefined) {
            formParams['amount'] = requestParameters.amount;
        }

        if (requestParameters.interval !== undefined) {
            formParams['interval'] = requestParameters.interval;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.send_invoices !== undefined) {
            formParams['send_invoices'] = requestParameters.send_invoices;
        }

        if (requestParameters.send_sms !== undefined) {
            formParams['send_sms'] = requestParameters.send_sms;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.invoice_limit !== undefined) {
            formParams['invoice_limit'] = requestParameters.invoice_limit;
        }


        const response = await this.request({
            path: `/plan`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Plan
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling fetch.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/plan/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List Plans
     */
    async list(requestParameters: ListRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.interval !== undefined) {
            queryParameters['interval'] = requestParameters.interval;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }


        const response = await this.request({
            path: `/plan`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Update Plan
     */
    async update(requestParameters: UpdateRequest): Promise<Response> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling update.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.amount !== undefined) {
            formParams['amount'] = requestParameters.amount;
        }

        if (requestParameters.interval !== undefined) {
            formParams['interval'] = requestParameters.interval;
        }

        if (requestParameters.description !== undefined) {
            formParams['description'] = requestParameters.description;
        }

        if (requestParameters.send_invoices !== undefined) {
            formParams['send_invoices'] = requestParameters.send_invoices;
        }

        if (requestParameters.send_sms !== undefined) {
            formParams['send_sms'] = requestParameters.send_sms;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.invoice_limit !== undefined) {
            formParams['invoice_limit'] = requestParameters.invoice_limit;
        }


        const response = await this.request({
            path: `/plan/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

}
