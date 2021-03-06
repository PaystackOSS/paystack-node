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
import { BaseAPI } from '../runtime';
import { Bank, EFT, MobileMoney, Response, USSD } from '../models';
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
export declare class Charge extends BaseAPI {
    /**
     * Check pending charge
     */
    check(requestParameters: CheckRequest): Promise<Response>;
    /**
     * Create Charge
     */
    create(requestParameters: CreateRequest): Promise<Response>;
    /**
     * Submit Address
     */
    submitAddress(requestParameters: SubmitAddressRequest): Promise<Response>;
    /**
     * Submit Birthday
     */
    submitBirthday(requestParameters: SubmitBirthdayRequest): Promise<Response>;
    /**
     * Submit OTP
     */
    submitOtp(requestParameters: SubmitOtpRequest): Promise<Response>;
    /**
     * Submit Phone
     */
    submitPhone(requestParameters: SubmitPhoneRequest): Promise<Response>;
    /**
     * Submit PIN
     */
    submitPin(requestParameters: SubmitPinRequest): Promise<Response>;
}
