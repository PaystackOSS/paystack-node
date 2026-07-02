export interface DedicatedVirtualAccountDedicatedAccountFetchData {
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
  /**  */
  bank: { name: string; id: number; slug: string };
  /**  */
  id: number;
  /**  */
  account_name: string;
  /**  */
  account_number: string;
  /**  */
  created_at: string;
  /**  */
  updated_at: string;
  /**  */
  currency: string;
  /**  */
  split_config: unknown;
  /**  */
  active: boolean;
  /**  */
  assigned: boolean;
}
