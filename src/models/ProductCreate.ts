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
 * @interface ProductCreate
 */
export interface ProductCreate {
    /**
     * Name of product
     * @type {string}
     * @memberof ProductCreate
     */
    name: string;
    /**
     * The description of the product
     * @type {string}
     * @memberof ProductCreate
     */
    description: string;
    /**
     * Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof ProductCreate
     */
    price: number;
    /**
     * Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD
     * @type {string}
     * @memberof ProductCreate
     */
    currency: string;
    /**
     * Set to true if the product has limited stock. Leave as false if the product has unlimited stock
     * @type {boolean}
     * @memberof ProductCreate
     */
    limited?: boolean;
    /**
     * Number of products in stock. Use if limited is true
     * @type {number}
     * @memberof ProductCreate
     */
    quantity?: number;
}

export function ProductCreateFromJSON(json: any): ProductCreate {
    return ProductCreateFromJSONTyped(json, false);
}

export function ProductCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'price': json['price'],
        'currency': json['currency'],
        'limited': !exists(json, 'limited') ? undefined : json['limited'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function ProductCreateToJSON(value?: ProductCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'price': value.price,
        'currency': value.currency,
        'limited': value.limited,
        'quantity': value.quantity,
    };
}


