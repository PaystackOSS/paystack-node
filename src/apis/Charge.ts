/* tslint:disable */
/* eslint-disable */
/**
 * Paystack
 * The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.
 *
 * The version of the Paystack Node library: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BaseAPI, RequiredError } from '../runtime';
import {
    Bank,
    EFT,
    MobileMoney,
    Response,
    USSD,
    ResponseFromJSON
} from '../models';

export interface CheckRequest {
    reference: string;
}

export interface CreateRequest {
    email?: string;
    amount?: string;
    authorization_code?: string;
    pin?: string;
    reference?: string;
    birthday?: Date;
    device_id?: string;
    metadata?: string;
    bank?: Bank;
    mobile_money?: MobileMoney;
    ussd?: USSD;
    eft?: EFT;
}

export interface SubmitAddressRequest {
    address: string;
    city: string;
    state: string;
    zipcode: string;
    reference: string;
}

export interface SubmitBirthdayRequest {
    birthday: string;
    reference: string;
}

export interface SubmitOtpRequest {
    otp: string;
    reference: string;
}

export interface SubmitPhoneRequest {
    phone: string;
    reference: string;
}

export interface SubmitPinRequest {
    pin: string;
    reference: string;
}

/**
 * 
 */
export class Charge extends BaseAPI {

    /**
     * Check pending charge
     */
    async check(requestParameters: CheckRequest): Promise<Response> {
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling check.');
        }
        const queryParameters: any = {};


        const response = await this.request({
            path: `/charge/{reference}`.replace(`{${"reference"}}`, encodeURIComponent(String(requestParameters.reference))),
            method: 'GET',
            query: queryParameters,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Create Charge
     */
    async create(requestParameters: CreateRequest): Promise<Response> {
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.email !== undefined) {
            formParams['email'] = requestParameters.email;
        }

        if (requestParameters.amount !== undefined) {
            formParams['amount'] = requestParameters.amount;
        }

        if (requestParameters.authorization_code !== undefined) {
            formParams['authorization_code'] = requestParameters.authorization_code;
        }

        if (requestParameters.pin !== undefined) {
            formParams['pin'] = requestParameters.pin;
        }

        if (requestParameters.reference !== undefined) {
            formParams['reference'] = requestParameters.reference;
        }

        if (requestParameters.birthday !== undefined) {
            formParams['birthday'] = requestParameters.birthday;
        }

        if (requestParameters.device_id !== undefined) {
            formParams['device_id'] = requestParameters.device_id;
        }

        if (requestParameters.metadata !== undefined) {
            formParams['metadata'] = requestParameters.metadata;
        }

        if (requestParameters.bank !== undefined) {
            formParams['bank'] = requestParameters.bank;
        }

        if (requestParameters.mobile_money !== undefined) {
            formParams['mobile_money'] = requestParameters.mobile_money;
        }

        if (requestParameters.ussd !== undefined) {
            formParams['ussd'] = requestParameters.ussd;
        }

        if (requestParameters.eft !== undefined) {
            formParams['eft'] = requestParameters.eft;
        }


        const response = await this.request({
            path: `/charge`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Submit Address
     */
    async submitAddress(requestParameters: SubmitAddressRequest): Promise<Response> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new RequiredError('address','Required parameter address was null or undefined when calling submitAddress.');
        }
        if (requestParameters.city === null || requestParameters.city === undefined) {
            throw new RequiredError('city','Required parameter city was null or undefined when calling submitAddress.');
        }
        if (requestParameters.state === null || requestParameters.state === undefined) {
            throw new RequiredError('state','Required parameter state was null or undefined when calling submitAddress.');
        }
        if (requestParameters.zipcode === null || requestParameters.zipcode === undefined) {
            throw new RequiredError('zipcode','Required parameter zipcode was null or undefined when calling submitAddress.');
        }
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling submitAddress.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.address !== undefined) {
            formParams['address'] = requestParameters.address;
        }

        if (requestParameters.city !== undefined) {
            formParams['city'] = requestParameters.city;
        }

        if (requestParameters.state !== undefined) {
            formParams['state'] = requestParameters.state;
        }

        if (requestParameters.zipcode !== undefined) {
            formParams['zipcode'] = requestParameters.zipcode;
        }

        if (requestParameters.reference !== undefined) {
            formParams['reference'] = requestParameters.reference;
        }


        const response = await this.request({
            path: `/charge/submit_address`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Submit Birthday
     */
    async submitBirthday(requestParameters: SubmitBirthdayRequest): Promise<Response> {
        if (requestParameters.birthday === null || requestParameters.birthday === undefined) {
            throw new RequiredError('birthday','Required parameter birthday was null or undefined when calling submitBirthday.');
        }
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling submitBirthday.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.birthday !== undefined) {
            formParams['birthday'] = requestParameters.birthday;
        }

        if (requestParameters.reference !== undefined) {
            formParams['reference'] = requestParameters.reference;
        }


        const response = await this.request({
            path: `/charge/submit_birthday`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Submit OTP
     */
    async submitOtp(requestParameters: SubmitOtpRequest): Promise<Response> {
        if (requestParameters.otp === null || requestParameters.otp === undefined) {
            throw new RequiredError('otp','Required parameter otp was null or undefined when calling submitOtp.');
        }
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling submitOtp.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.otp !== undefined) {
            formParams['otp'] = requestParameters.otp;
        }

        if (requestParameters.reference !== undefined) {
            formParams['reference'] = requestParameters.reference;
        }


        const response = await this.request({
            path: `/charge/submit_otp`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Submit Phone
     */
    async submitPhone(requestParameters: SubmitPhoneRequest): Promise<Response> {
        if (requestParameters.phone === null || requestParameters.phone === undefined) {
            throw new RequiredError('phone','Required parameter phone was null or undefined when calling submitPhone.');
        }
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling submitPhone.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.phone !== undefined) {
            formParams['phone'] = requestParameters.phone;
        }

        if (requestParameters.reference !== undefined) {
            formParams['reference'] = requestParameters.reference;
        }


        const response = await this.request({
            path: `/charge/submit_phone`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

    /**
     * Submit PIN
     */
    async submitPin(requestParameters: SubmitPinRequest): Promise<Response> {
        if (requestParameters.pin === null || requestParameters.pin === undefined) {
            throw new RequiredError('pin','Required parameter pin was null or undefined when calling submitPin.');
        }
        if (requestParameters.reference === null || requestParameters.reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling submitPin.');
        }
        const queryParameters: any = {};

        let formParams: any = {};

        if (requestParameters.pin !== undefined) {
            formParams['pin'] = requestParameters.pin;
        }

        if (requestParameters.reference !== undefined) {
            formParams['reference'] = requestParameters.reference;
        }


        const response = await this.request({
            path: `/charge/submit_pin`,
            method: 'POST',
            query: queryParameters,
            body: formParams,
        });
        
        return ResponseFromJSON(response);
    }

}
