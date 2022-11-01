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
export declare function DisputeUpdateFromJSON(json: any): DisputeUpdate;
export declare function DisputeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisputeUpdate;
export declare function DisputeUpdateToJSON(value?: DisputeUpdate | null): any;