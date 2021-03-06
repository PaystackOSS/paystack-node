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
 * @interface ChargeSubmitPin
 */
export interface ChargeSubmitPin {
    /**
     * Customer's PIN
     * @type {string}
     * @memberof ChargeSubmitPin
     */
    pin: string;
    /**
     * Transaction reference that requires the PIN
     * @type {string}
     * @memberof ChargeSubmitPin
     */
    reference: string;
}
export declare function ChargeSubmitPinFromJSON(json: any): ChargeSubmitPin;
export declare function ChargeSubmitPinFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeSubmitPin;
export declare function ChargeSubmitPinToJSON(value?: ChargeSubmitPin | null): any;
