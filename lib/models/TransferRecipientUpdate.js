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
exports.TransferRecipientUpdateToJSON = exports.TransferRecipientUpdateFromJSONTyped = exports.TransferRecipientUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function TransferRecipientUpdateFromJSON(json) {
    return TransferRecipientUpdateFromJSONTyped(json, false);
}
exports.TransferRecipientUpdateFromJSON = TransferRecipientUpdateFromJSON;
function TransferRecipientUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'email': !runtime_1.exists(json, 'email') ? undefined : json['email'],
    };
}
exports.TransferRecipientUpdateFromJSONTyped = TransferRecipientUpdateFromJSONTyped;
function TransferRecipientUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'email': value.email,
    };
}
exports.TransferRecipientUpdateToJSON = TransferRecipientUpdateToJSON;
