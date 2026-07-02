export interface TransferExportTransferQuery {
  /** Export transfer by the recipient code */
  recipient?: string;
  /** Export transfer by status */
  status?: "pending" | "success" | "failed" | "otp" | "abandoned" | "reversed" | "blocked" | "rejected" | "received";
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
