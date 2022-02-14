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
 * @interface PaymentRequestCreate
 */
export interface PaymentRequestCreate {
    /**
     * Customer id or code
     * @type {string}
     * @memberof PaymentRequestCreate
     */
    customer: string;
    /**
     * Payment request amount. Only useful if line items and tax values are ignored. 
     * The endpoint will throw a friendly warning if neither is available.
     * @type {number}
     * @memberof PaymentRequestCreate
     */
    amount?: number;
    /**
     * Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN
     * @type {string}
     * @memberof PaymentRequestCreate
     */
    currency?: string;
    /**
     * ISO 8601 representation of request due date
     * @type {Date}
     * @memberof PaymentRequestCreate
     */
    dueDate?: Date;
    /**
     * A short description of the payment request
     * @type {string}
     * @memberof PaymentRequestCreate
     */
    description?: string;
    /**
     * Array of line items
     * @type {Array<object>}
     * @memberof PaymentRequestCreate
     */
    lineItems?: Array<object>;
    /**
     * Array of taxes
     * @type {Array<object>}
     * @memberof PaymentRequestCreate
     */
    tax?: Array<object>;
    /**
     * Indicates whether Paystack sends an email notification to customer. Defaults to true
     * @type {Array<object>}
     * @memberof PaymentRequestCreate
     */
    sendNotification?: Array<object>;
    /**
     * Indicate if request should be saved as draft. Defaults to false and overrides send_notification
     * @type {Array<object>}
     * @memberof PaymentRequestCreate
     */
    draft?: Array<object>;
    /**
     * Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) 
     * even if there are no line_items or tax passed
     * @type {Array<object>}
     * @memberof PaymentRequestCreate
     */
    hasInvoice?: Array<object>;
    /**
     * Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help 
     * override whatever value Paystack decides. Auto increment for subsequent invoices continue from this point.
     * @type {number}
     * @memberof PaymentRequestCreate
     */
    invoiceNumber?: number;
    /**
     * The split code of the transaction split.
     * @type {string}
     * @memberof PaymentRequestCreate
     */
    splitCode?: string;
}

export function PaymentRequestCreateFromJSON(json: any): PaymentRequestCreate {
    return PaymentRequestCreateFromJSONTyped(json, false);
}

export function PaymentRequestCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['customer'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'dueDate': !exists(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'lineItems': !exists(json, 'line_items') ? undefined : json['line_items'],
        'tax': !exists(json, 'tax') ? undefined : json['tax'],
        'sendNotification': !exists(json, 'send_notification') ? undefined : json['send_notification'],
        'draft': !exists(json, 'draft') ? undefined : json['draft'],
        'hasInvoice': !exists(json, 'has_invoice') ? undefined : json['has_invoice'],
        'invoiceNumber': !exists(json, 'invoice_number') ? undefined : json['invoice_number'],
        'splitCode': !exists(json, 'split_code') ? undefined : json['split_code'],
    };
}

export function PaymentRequestCreateToJSON(value?: PaymentRequestCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer': value.customer,
        'amount': value.amount,
        'currency': value.currency,
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'description': value.description,
        'line_items': value.lineItems,
        'tax': value.tax,
        'send_notification': value.sendNotification,
        'draft': value.draft,
        'has_invoice': value.hasInvoice,
        'invoice_number': value.invoiceNumber,
        'split_code': value.splitCode,
    };
}


