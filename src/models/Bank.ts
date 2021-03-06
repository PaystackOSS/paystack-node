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
 * @interface Bank
 */
export interface Bank {
    /**
     * Customer's bank code
     * @type {string}
     * @memberof Bank
     */
    code?: string;
    /**
     * Customer's account number
     * @type {string}
     * @memberof Bank
     */
    accountNumber?: string;
}

export function BankFromJSON(json: any): Bank {
    return BankFromJSONTyped(json, false);
}

export function BankFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bank {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'accountNumber': !exists(json, 'account_number') ? undefined : json['account_number'],
    };
}

export function BankToJSON(value?: Bank | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'account_number': value.accountNumber,
    };
}


