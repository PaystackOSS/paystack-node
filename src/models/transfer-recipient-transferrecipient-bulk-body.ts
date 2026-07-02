export interface TransferRecipientTransferrecipientBulkBody {
  /** A list of transfer recipient object. */
  batch: Array<{ type: "nuban" | "ghipss" | "mobile_money" | "basa" | "authorization"; name: string; account_number: string; bank_code: string; description?: string; currency?: string; authorization_code?: string; metadata?: Record<string, unknown> }>;
}
