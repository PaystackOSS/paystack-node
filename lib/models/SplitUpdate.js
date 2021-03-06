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
exports.SplitUpdateToJSON = exports.SplitUpdateFromJSONTyped = exports.SplitUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function SplitUpdateFromJSON(json) {
    return SplitUpdateFromJSONTyped(json, false);
}
exports.SplitUpdateFromJSON = SplitUpdateFromJSON;
function SplitUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'active': !runtime_1.exists(json, 'active') ? undefined : json['active'],
        'bearerType': !runtime_1.exists(json, 'bearer_type') ? undefined : json['bearer_type'],
        'bearerSubaccount': !runtime_1.exists(json, 'bearer_subaccount') ? undefined : json['bearer_subaccount'],
    };
}
exports.SplitUpdateFromJSONTyped = SplitUpdateFromJSONTyped;
function SplitUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'active': value.active,
        'bearer_type': value.bearerType,
        'bearer_subaccount': value.bearerSubaccount,
    };
}
exports.SplitUpdateToJSON = SplitUpdateToJSON;
