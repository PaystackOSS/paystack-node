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
exports.CustomerCreateToJSON = exports.CustomerCreateFromJSONTyped = exports.CustomerCreateFromJSON = void 0;
const runtime_1 = require("../runtime");
function CustomerCreateFromJSON(json) {
    return CustomerCreateFromJSONTyped(json, false);
}
exports.CustomerCreateFromJSON = CustomerCreateFromJSON;
function CustomerCreateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'firstName': !runtime_1.exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !runtime_1.exists(json, 'last_name') ? undefined : json['last_name'],
        'phone': !runtime_1.exists(json, 'phone') ? undefined : json['phone'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : json['metadata'],
    };
}
exports.CustomerCreateFromJSONTyped = CustomerCreateFromJSONTyped;
function CustomerCreateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone': value.phone,
        'metadata': value.metadata,
    };
}
exports.CustomerCreateToJSON = CustomerCreateToJSON;
