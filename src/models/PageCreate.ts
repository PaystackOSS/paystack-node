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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PageCreate
 */
export interface PageCreate {
    /**
     * Name of page
     * @type {string}
     * @memberof PageCreate
     */
    name: string;
    /**
     * The description of the page
     * @type {string}
     * @memberof PageCreate
     */
    description?: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof PageCreate
     */
    amount?: number;
    /**
     * URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]
     * @type {string}
     * @memberof PageCreate
     */
    slug?: string;
    /**
     * Stringified JSON object of custom data
     * @type {string}
     * @memberof PageCreate
     */
    metadata?: string;
    /**
     * If you would like Paystack to redirect to a URL upon successful payment, specify the URL here.
     * @type {string}
     * @memberof PageCreate
     */
    redirectUrl?: string;
    /**
     * If you would like to accept custom fields, specify them here.
     * @type {Array<object>}
     * @memberof PageCreate
     */
    customFields?: Array<object>;
}

export function PageCreateFromJSON(json: any): PageCreate {
    return PageCreateFromJSONTyped(json, false);
}

export function PageCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'redirectUrl': !exists(json, 'redirect_url') ? undefined : json['redirect_url'],
        'customFields': !exists(json, 'custom_fields') ? undefined : json['custom_fields'],
    };
}

export function PageCreateToJSON(value?: PageCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'amount': value.amount,
        'slug': value.slug,
        'metadata': value.metadata,
        'redirect_url': value.redirectUrl,
        'custom_fields': value.customFields,
    };
}


