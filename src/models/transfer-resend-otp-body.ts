export interface TransferResendOtpBody {
  /** The transfer code that requires an OTP validation */
  transfer_code: string;
  /** Specify the flag to indicate the purpose of the OTP */
  reason: "disable_otp" | "resend_otp" | "transfer";
}
