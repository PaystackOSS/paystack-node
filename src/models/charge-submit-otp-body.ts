export interface ChargeSubmitOtpBody {
  /** Customer's OTP for ongoing transaction */
  otp: string;
  /** The reference of the ongoing transaction */
  reference: string;
}
