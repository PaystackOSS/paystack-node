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
/**
 *
 * @export
 * @interface Response
 */
export interface Response {
    /**
     *
     * @type {boolean}
     * @memberof Response
     */
    status?: boolean;
    /**
     *
     * @type {string}
     * @memberof Response
     */
    message?: string;
    /**
     *
     * @type {object}
     * @memberof Response
     */
    data?: object;
}
export declare function ResponseFromJSON(json: any): Response;
export declare function ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Response;
export declare function ResponseToJSON(value?: Response | null): any;