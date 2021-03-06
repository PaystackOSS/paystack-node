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
 * @interface CustomerCreate
 */
export interface CustomerCreate {
    /**
     * Customer's email address
     * @type {string}
     * @memberof CustomerCreate
     */
    email: string;
    /**
     * Customer's first name
     * @type {string}
     * @memberof CustomerCreate
     */
    firstName?: string;
    /**
     * Customer's last name
     * @type {string}
     * @memberof CustomerCreate
     */
    lastName?: string;
    /**
     * Customer's phone number
     * @type {string}
     * @memberof CustomerCreate
     */
    phone?: string;
    /**
     * Stringified JSON object of custom data
     * @type {string}
     * @memberof CustomerCreate
     */
    metadata?: string;
}

export function CustomerCreateFromJSON(json: any): CustomerCreate {
    return CustomerCreateFromJSONTyped(json, false);
}

export function CustomerCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function CustomerCreateToJSON(value?: CustomerCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone': value.phone,
        'metadata': value.metadata,
    };
}


