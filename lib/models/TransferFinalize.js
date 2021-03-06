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
exports.TransferFinalizeToJSON = exports.TransferFinalizeFromJSONTyped = exports.TransferFinalizeFromJSON = void 0;
function TransferFinalizeFromJSON(json) {
    return TransferFinalizeFromJSONTyped(json, false);
}
exports.TransferFinalizeFromJSON = TransferFinalizeFromJSON;
function TransferFinalizeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transferCode': json['transfer_code'],
        'otp': json['otp'],
    };
}
exports.TransferFinalizeFromJSONTyped = TransferFinalizeFromJSONTyped;
function TransferFinalizeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transfer_code': value.transferCode,
        'otp': value.otp,
    };
}
exports.TransferFinalizeToJSON = TransferFinalizeToJSON;
