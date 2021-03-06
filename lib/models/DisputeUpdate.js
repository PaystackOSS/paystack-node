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
exports.DisputeUpdateToJSON = exports.DisputeUpdateFromJSONTyped = exports.DisputeUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function DisputeUpdateFromJSON(json) {
    return DisputeUpdateFromJSONTyped(json, false);
}
exports.DisputeUpdateFromJSON = DisputeUpdateFromJSON;
function DisputeUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'refundAmount': json['refund_amount'],
        'uploadedFilename': !runtime_1.exists(json, 'uploaded_filename') ? undefined : json['uploaded_filename'],
    };
}
exports.DisputeUpdateFromJSONTyped = DisputeUpdateFromJSONTyped;
function DisputeUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'refund_amount': value.refundAmount,
        'uploaded_filename': value.uploadedFilename,
    };
}
exports.DisputeUpdateToJSON = DisputeUpdateToJSON;
