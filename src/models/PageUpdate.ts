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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PageUpdate
 */
export interface PageUpdate {
    /**
     * Name of page
     * @type {string}
     * @memberof PageUpdate
     */
    name?: string;
    /**
     * The description of the page
     * @type {string}
     * @memberof PageUpdate
     */
    description?: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof PageUpdate
     */
    amount?: number;
    /**
     * Set to false to deactivate page url
     * @type {boolean}
     * @memberof PageUpdate
     */
    active?: boolean;
}

export function PageUpdateFromJSON(json: any): PageUpdate {
    return PageUpdateFromJSONTyped(json, false);
}

export function PageUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function PageUpdateToJSON(value?: PageUpdate | null): any {
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
        'active': value.active,
    };
}


