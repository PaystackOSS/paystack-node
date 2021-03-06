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
exports.ChargeSubmitOTPToJSON = exports.ChargeSubmitOTPFromJSONTyped = exports.ChargeSubmitOTPFromJSON = void 0;
function ChargeSubmitOTPFromJSON(json) {
    return ChargeSubmitOTPFromJSONTyped(json, false);
}
exports.ChargeSubmitOTPFromJSON = ChargeSubmitOTPFromJSON;
function ChargeSubmitOTPFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'otp': json['otp'],
        'reference': json['reference'],
    };
}
exports.ChargeSubmitOTPFromJSONTyped = ChargeSubmitOTPFromJSONTyped;
function ChargeSubmitOTPToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'otp': value.otp,
        'reference': value.reference,
    };
}
exports.ChargeSubmitOTPToJSON = ChargeSubmitOTPToJSON;
