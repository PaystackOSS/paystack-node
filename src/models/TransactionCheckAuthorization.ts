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
 * @interface TransactionCheckAuthorization
 */
export interface TransactionCheckAuthorization {
    /**
     * Customer's email address
     * @type {string}
     * @memberof TransactionCheckAuthorization
     */
    email: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof TransactionCheckAuthorization
     */
    amount: number;
    /**
     * Valid authorization code to charge
     * @type {string}
     * @memberof TransactionCheckAuthorization
     */
    authorizationCode?: string;
    /**
     * The transaction currency
     * @type {string}
     * @memberof TransactionCheckAuthorization
     */
    currency?: string;
}

export function TransactionCheckAuthorizationFromJSON(json: any): TransactionCheckAuthorization {
    return TransactionCheckAuthorizationFromJSONTyped(json, false);
}

export function TransactionCheckAuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCheckAuthorization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'amount': json['amount'],
        'authorizationCode': !exists(json, 'authorization_code') ? undefined : json['authorization_code'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
    };
}

export function TransactionCheckAuthorizationToJSON(value?: TransactionCheckAuthorization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'amount': value.amount,
        'authorization_code': value.authorizationCode,
        'currency': value.currency,
    };
}


