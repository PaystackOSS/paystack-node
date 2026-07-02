export interface TransferRecipientTransferrecipientCreateData {
  /**  */
  active: boolean;
  /**  */
  createdAt: string;
  /**  */
  currency: string;
  /**  */
  description: string;
  /**  */
  domain: string;
  /**  */
  email: string;
  /**  */
  id: number;
  /**  */
  integration: number;
  /**  */
  metadata?: Record<string, unknown>;
  /**  */
  name: string;
  /**  */
  recipient_code: string;
  /**  */
  type: string;
  /**  */
  updatedAt: string;
  /**  */
  is_deleted: boolean;
  /**  */
  isDeleted: boolean;
  /**  */
  details: { authorization_code: string; account_number: string; account_name: string; bank_code: string; bank_name: string };
}
