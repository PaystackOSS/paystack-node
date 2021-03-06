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
 * @interface TransferRecipientCreate
 */
export interface TransferRecipientCreate {
    /**
     * Recipient Type (Only nuban at this time)
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    type: string;
    /**
     * Recipient's name
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    name: string;
    /**
     * Recipient's bank account number
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    accountNumber: string;
    /**
     * Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    bankCode: string;
    /**
     * A description for this recipient
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    description?: string;
    /**
     * Currency for the account receiving the transfer
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    currency?: string;
    /**
     * An authorization code from a previous transaction
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    authorizationCode?: string;
    /**
     * Stringified JSON object of custom data
     * @type {string}
     * @memberof TransferRecipientCreate
     */
    metadata?: string;
}

export function TransferRecipientCreateFromJSON(json: any): TransferRecipientCreate {
    return TransferRecipientCreateFromJSONTyped(json, false);
}

export function TransferRecipientCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecipientCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'name': json['name'],
        'accountNumber': json['account_number'],
        'bankCode': json['bank_code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'authorizationCode': !exists(json, 'authorization_code') ? undefined : json['authorization_code'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function TransferRecipientCreateToJSON(value?: TransferRecipientCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'account_number': value.accountNumber,
        'bank_code': value.bankCode,
        'description': value.description,
        'currency': value.currency,
        'authorization_code': value.authorizationCode,
        'metadata': value.metadata,
    };
}


