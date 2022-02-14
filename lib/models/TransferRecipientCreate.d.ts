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
export declare function TransferRecipientCreateFromJSON(json: any): TransferRecipientCreate;
export declare function TransferRecipientCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecipientCreate;
export declare function TransferRecipientCreateToJSON(value?: TransferRecipientCreate | null): any;
