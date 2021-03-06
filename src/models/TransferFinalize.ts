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
 * @interface TransferFinalize
 */
export interface TransferFinalize {
    /**
     * The transfer code you want to finalize
     * @type {string}
     * @memberof TransferFinalize
     */
    transferCode: string;
    /**
     * OTP sent to business phone to verify transfer
     * @type {string}
     * @memberof TransferFinalize
     */
    otp: string;
}

export function TransferFinalizeFromJSON(json: any): TransferFinalize {
    return TransferFinalizeFromJSONTyped(json, false);
}

export function TransferFinalizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferFinalize {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transferCode': json['transfer_code'],
        'otp': json['otp'],
    };
}

export function TransferFinalizeToJSON(value?: TransferFinalize | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transfer_code': value.transferCode,
        'otp': value.otp,
    };
}


