export interface TransferFinalizeBody {
  /** The transfer code you want to finalize */
  transfer_code: string;
  /** OTP sent to business phone to verify transfer */
  otp: string;
}
