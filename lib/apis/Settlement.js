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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settlement = void 0;
const runtime_1 = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class Settlement extends runtime_1.BaseAPI {
    /**
     * Fetch Settlements
     */
    fetch(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.perPage !== undefined) {
                queryParameters['perPage'] = requestParameters.perPage;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            const response = yield this.request({
                path: `/settlement`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Settlement Transactions
     */
    transaction(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime_1.RequiredError('id', 'Required parameter id was null or undefined when calling transaction.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/settlement/{id}/transaction`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
}
exports.Settlement = Settlement;
