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
 * @interface BulkChargeInitiate
 */
export interface BulkChargeInitiate {
    /**
     * Customer's card authorization code
     * @type {string}
     * @memberof BulkChargeInitiate
     */
    authorization: string;
    /**
     * Amount to charge on the authorization
     * @type {string}
     * @memberof BulkChargeInitiate
     */
    amount: string;
}

export function BulkChargeInitiateFromJSON(json: any): BulkChargeInitiate {
    return BulkChargeInitiateFromJSONTyped(json, false);
}

export function BulkChargeInitiateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkChargeInitiate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorization': json['authorization'],
        'amount': json['amount'],
    };
}

export function BulkChargeInitiateToJSON(value?: BulkChargeInitiate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorization': value.authorization,
        'amount': value.amount,
    };
}


