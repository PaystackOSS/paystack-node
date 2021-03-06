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
exports.ProductUpdateToJSON = exports.ProductUpdateFromJSONTyped = exports.ProductUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function ProductUpdateFromJSON(json) {
    return ProductUpdateFromJSONTyped(json, false);
}
exports.ProductUpdateFromJSON = ProductUpdateFromJSON;
function ProductUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'description': !runtime_1.exists(json, 'description') ? undefined : json['description'],
        'price': !runtime_1.exists(json, 'price') ? undefined : json['price'],
        'currency': !runtime_1.exists(json, 'currency') ? undefined : json['currency'],
        'limited': !runtime_1.exists(json, 'limited') ? undefined : json['limited'],
        'quantity': !runtime_1.exists(json, 'quantity') ? undefined : json['quantity'],
    };
}
exports.ProductUpdateFromJSONTyped = ProductUpdateFromJSONTyped;
function ProductUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'description': value.description,
        'price': value.price,
        'currency': value.currency,
        'limited': value.limited,
        'quantity': value.quantity,
    };
}
exports.ProductUpdateToJSON = ProductUpdateToJSON;
