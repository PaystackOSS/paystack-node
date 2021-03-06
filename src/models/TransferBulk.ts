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
import {
    TransferInitiate,
    TransferInitiateFromJSON,
    TransferInitiateFromJSONTyped,
    TransferInitiateToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransferBulk
 */
export interface TransferBulk {
    /**
     * Where should we transfer from? Only balance is allowed for now
     * @type {string}
     * @memberof TransferBulk
     */
    source?: string;
    /**
     * A list of transfer object. Each object should contain amount, recipient, and reference
     * @type {Array<TransferInitiate>}
     * @memberof TransferBulk
     */
    transfers?: Array<TransferInitiate>;
}

export function TransferBulkFromJSON(json: any): TransferBulk {
    return TransferBulkFromJSONTyped(json, false);
}

export function TransferBulkFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferBulk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': !exists(json, 'source') ? undefined : json['source'],
        'transfers': !exists(json, 'transfers') ? undefined : ((json['transfers'] as Array<any>).map(TransferInitiateFromJSON)),
    };
}

export function TransferBulkToJSON(value?: TransferBulk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': value.source,
        'transfers': value.transfers === undefined ? undefined : ((value.transfers as Array<any>).map(TransferInitiateToJSON)),
    };
}


