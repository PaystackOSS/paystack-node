export interface TransferRecipientTransferrecipientCreateBody {
  /** Recipient Type */
  type: "nuban" | "ghipss" | "mobile_money" | "basa" | "authorization";
  /** The recipient's name according to their account registration. */
  name: string;
  /** Recipient's bank account number */
  account_number: string;
  /** Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint */
  bank_code: string;
  /** A description for this recipient */
  description?: string;
  /** Currency for the account receiving the transfer */
  currency?: string;
  /** An authorization code from a previous transaction */
  authorization_code?: string;
  /** JSON object of custom data */
  metadata?: Record<string, unknown>;
}
