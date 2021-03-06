"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankToJSON = exports.BankFromJSONTyped = exports.BankFromJSON = void 0;
const runtime_1 = require("../runtime");
function BankFromJSON(json) {
    return BankFromJSONTyped(json, false);
}
exports.BankFromJSON = BankFromJSON;
function BankFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !runtime_1.exists(json, 'code') ? undefined : json['code'],
        'accountNumber': !runtime_1.exists(json, 'account_number') ? undefined : json['account_number'],
    };
}
exports.BankFromJSONTyped = BankFromJSONTyped;
function BankToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'account_number': value.accountNumber,
    };
}
exports.BankToJSON = BankToJSON;
