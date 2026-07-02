export interface TransferRecipientTransferrecipientBulkData {
  /**  */
  success: Array<unknown>;
  /**  */
  errors: Array<{ message: string; records: Array<{ type: string; name: string; description: string; account_number: string; bank_code: string; currency: string; email: string }> }>;
}
