export interface TransferRecipientTransferrecipientFetchData {
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  type: string;
  /**  */
  currency: string;
  /**  */
  name: string;
  /**  */
  details: { account_number: string; account_name: string; bank_code: string; bank_name: string };
  /**  */
  description: string;
  /**  */
  metadata?: Record<string, unknown>;
  /**  */
  recipient_code: string;
  /**  */
  active: boolean;
  /**  */
  recipient_account: string;
  /**  */
  institution_code: string;
  /**  */
  email: string;
  /**  */
  id: number;
  /**  */
  isDeleted: boolean;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
}
