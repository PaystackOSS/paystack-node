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
 * @interface DisputeUpdate
 */
export interface DisputeUpdate {
    /**
     * The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {string}
     * @memberof DisputeUpdate
     */
    refundAmount: string;
    /**
     * Filename of attachment returned via response from the Dispute upload URL
     * @type {string}
     * @memberof DisputeUpdate
     */
    uploadedFilename?: string;
}

export function DisputeUpdateFromJSON(json: any): DisputeUpdate {
    return DisputeUpdateFromJSONTyped(json, false);
}

export function DisputeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisputeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refundAmount': json['refund_amount'],
        'uploadedFilename': !exists(json, 'uploaded_filename') ? undefined : json['uploaded_filename'],
    };
}

export function DisputeUpdateToJSON(value?: DisputeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refund_amount': value.refundAmount,
        'uploaded_filename': value.uploadedFilename,
    };
}


