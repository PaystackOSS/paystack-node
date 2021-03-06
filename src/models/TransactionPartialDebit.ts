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
 * @interface TransactionPartialDebit
 */
export interface TransactionPartialDebit {
    /**
     * Customer's email address
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    email: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof TransactionPartialDebit
     */
    amount: number;
    /**
     * Valid authorization code to charge
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    authorizationCode: string;
    /**
     * The transaction currency
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    currency: string;
    /**
     * Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    reference?: string;
    /**
     * Minimum amount to charge
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    atLeast?: string;
}

export function TransactionPartialDebitFromJSON(json: any): TransactionPartialDebit {
    return TransactionPartialDebitFromJSONTyped(json, false);
}

export function TransactionPartialDebitFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPartialDebit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'amount': json['amount'],
        'authorizationCode': json['authorization_code'],
        'currency': json['currency'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'atLeast': !exists(json, 'at_least') ? undefined : json['at_least'],
    };
}

export function TransactionPartialDebitToJSON(value?: TransactionPartialDebit | null): any {
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
        'reference': value.reference,
        'at_least': value.atLeast,
    };
}


