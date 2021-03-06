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
 * @interface TransactionPartialDebit
 */
export interface TransactionPartialDebit {
    /**
     * Customer's email address
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    email: string;
    /**
     * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
     * @type {number}
     * @memberof TransactionPartialDebit
     */
    amount: number;
    /**
     * Valid authorization code to charge
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    authorizationCode: string;
    /**
     * The transaction currency
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    currency: string;
    /**
     * Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    reference?: string;
    /**
     * Minimum amount to charge
     * @type {string}
     * @memberof TransactionPartialDebit
     */
    atLeast?: string;
}
export declare function TransactionPartialDebitFromJSON(json: any): TransactionPartialDebit;
export declare function TransactionPartialDebitFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPartialDebit;
export declare function TransactionPartialDebitToJSON(value?: TransactionPartialDebit | null): any;
