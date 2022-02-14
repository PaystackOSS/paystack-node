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
/**
 *
 * @export
 * @interface ProductUpdate
 */
export interface ProductUpdate {
    /**
     * Name of product
     * @type {string}
     * @memberof ProductUpdate
     */
    name?: string;
    /**
     * The description of the product
     * @type {string}
     * @memberof ProductUpdate
     */
    description?: string;
    /**
     * Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof ProductUpdate
     */
    price?: number;
    /**
     * Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD
     * @type {string}
     * @memberof ProductUpdate
     */
    currency?: string;
    /**
     * Set to true if the product has limited stock. Leave as false if the product has unlimited stock
     * @type {boolean}
     * @memberof ProductUpdate
     */
    limited?: boolean;
    /**
     * Number of products in stock. Use if limited is true
     * @type {number}
     * @memberof ProductUpdate
     */
    quantity?: number;
}
export declare function ProductUpdateFromJSON(json: any): ProductUpdate;
export declare function ProductUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductUpdate;
export declare function ProductUpdateToJSON(value?: ProductUpdate | null): any;
