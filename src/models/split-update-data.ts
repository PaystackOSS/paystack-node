export interface SplitUpdateData {
  /**  */
  id: number;
  /**  */
  name: string;
  /**  */
  type: string;
  /**  */
  currency: string;
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  split_code: string;
  /**  */
  active: boolean;
  /**  */
  bearer_type: string;
  /**  */
  bearer_subaccount: number;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  is_dynamic: boolean;
  /**  */
  subaccounts: Array<{ subaccount: { id: number; subaccount_code: string; business_name: string; description: string; primary_contact_name: string; primary_contact_email: string; primary_contact_phone: string; metadata: string; settlement_bank: string; currency: string; account_number: string }; share: number }>;
  /**  */
  total_subaccounts: number;
}
