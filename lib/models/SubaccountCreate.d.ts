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
 * @interface SubaccountCreate
 */
export interface SubaccountCreate {
    /**
     * Name of business for subaccount
     * @type {string}
     * @memberof SubaccountCreate
     */
    businessName: string;
    /**
     * Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
     * @type {string}
     * @memberof SubaccountCreate
     */
    settlementBank: string;
    /**
     * Bank account number
     * @type {string}
     * @memberof SubaccountCreate
     */
    accountNumber: string;
    /**
     * Customer's phone number
     * @type {number}
     * @memberof SubaccountCreate
     */
    percentageCharge: number;
    /**
     * A description for this subaccount
     * @type {string}
     * @memberof SubaccountCreate
     */
    description?: string;
    /**
     * A contact email for the subaccount
     * @type {string}
     * @memberof SubaccountCreate
     */
    primaryContactEmail?: string;
    /**
     * The name of the contact person for this subaccount
     * @type {string}
     * @memberof SubaccountCreate
     */
    primaryContactName?: string;
    /**
     * A phone number to call for this subaccount
     * @type {string}
     * @memberof SubaccountCreate
     */
    primaryContactPhone?: string;
    /**
     * Stringified JSON object of custom data
     * @type {string}
     * @memberof SubaccountCreate
     */
    metadata?: string;
}
export declare function SubaccountCreateFromJSON(json: any): SubaccountCreate;
export declare function SubaccountCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubaccountCreate;
export declare function SubaccountCreateToJSON(value?: SubaccountCreate | null): any;
