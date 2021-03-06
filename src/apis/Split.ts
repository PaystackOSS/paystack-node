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
    SplitSubaccounts,
    ResponseFromJSON
} from '../models';

export interface AddSubaccountRequest {
    id: string;
    subaccount?: string;
    share?: string;
}

export interface CreateRequest {
    name: string;
    type: string;
    subaccounts: Array<SplitSubaccounts>;
    currency: string;
    bearer_type?: string;
    bearer_subaccount?: string;
}

export interface FetchRequest {
    id: string;
}

export interface ListRequest {
    name?: string;
    active?: string;
    sort_by?: string;
    from?: string;
    to?: string;
    perPage?: string;
    page?: string;
}

export interface RemoveSubaccountRequest {
    id: string;
    subaccount?: string;
    share?: string;
}

export interface UpdateRequest {
    id: string;
    name?: string;
    active?: boolean;
    bearer_type?: string;
    bearer_subaccount?: string;
}

/**
 * 
 */
export class Split extends BaseAPI {

    /**
     * Add Subaccount to Split
     */
    async addSubaccount(requestParameters: AddSubaccountRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling addSubaccount.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.subaccount !== undefined) {
            formParams['subaccount'] = requestParameters.subaccount;
        }

        if (requestParameters.share !== undefined) {
            formParams['share'] = requestParameters.share;
        }


        const response = await this.request({
            path: `/split/{id}/subaccount/add`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Create Split
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling create.');
        }
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling create.');
        }
        if (requestParameters.subaccounts === null || requestParameters.subaccounts === undefined) {
            throw new RequiredError('subaccounts','Required parameter subaccounts was null or undefined when calling create.');
        }
        if (requestParameters.currency === null || requestParameters.currency === undefined) {
            throw new RequiredError('currency','Required parameter currency was null or undefined when calling create.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.type !== undefined) {
            formParams['type'] = requestParameters.type;
        }

        if (requestParameters.subaccounts) {
            formParams['subaccounts'] = requestParameters.subaccounts;
        }

        if (requestParameters.currency !== undefined) {
            formParams['currency'] = requestParameters.currency;
        }

        if (requestParameters.bearer_type !== undefined) {
            formParams['bearer_type'] = requestParameters.bearer_type;
        }

        if (requestParameters.bearer_subaccount !== undefined) {
            formParams['bearer_subaccount'] = requestParameters.bearer_subaccount;
        }


        const response = await this.request({
            path: `/split`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Fetch Split
     */
    async fetch(requestParameters: FetchRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling fetch.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/split/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * List/Search Splits
     */
    async list(requestParameters: ListRequest): Promise<Response> {
        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        if (requestParameters.sort_by !== undefined) {
            queryParameters['sort_by'] = requestParameters.sort_by;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }


        const response = await this.request({
            path: `/split`,
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Remove Subaccount from split
     */
    async removeSubaccount(requestParameters: RemoveSubaccountRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling removeSubaccount.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.subaccount !== undefined) {
            formParams['subaccount'] = requestParameters.subaccount;
        }

        if (requestParameters.share !== undefined) {
            formParams['share'] = requestParameters.share;
        }


        const response = await this.request({
            path: `/split/{id}/subaccount/remove`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Update Split
     */
    async update(requestParameters: UpdateRequest): Promise<Response> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling update.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.name !== undefined) {
            formParams['name'] = requestParameters.name;
        }

        if (requestParameters.active !== undefined) {
            formParams['active'] = requestParameters.active;
        }

        if (requestParameters.bearer_type !== undefined) {
            formParams['bearer_type'] = requestParameters.bearer_type;
        }

        if (requestParameters.bearer_subaccount !== undefined) {
            formParams['bearer_subaccount'] = requestParameters.bearer_subaccount;
        }


        const response = await this.request({
            path: `/split/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

}
