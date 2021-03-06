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
exports.ChargeSubmitPinToJSON = exports.ChargeSubmitPinFromJSONTyped = exports.ChargeSubmitPinFromJSON = void 0;
function ChargeSubmitPinFromJSON(json) {
    return ChargeSubmitPinFromJSONTyped(json, false);
}
exports.ChargeSubmitPinFromJSON = ChargeSubmitPinFromJSON;
function ChargeSubmitPinFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pin': json['pin'],
        'reference': json['reference'],
    };
}
exports.ChargeSubmitPinFromJSONTyped = ChargeSubmitPinFromJSONTyped;
function ChargeSubmitPinToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pin': value.pin,
        'reference': value.reference,
    };
}
exports.ChargeSubmitPinToJSON = ChargeSubmitPinToJSON;
