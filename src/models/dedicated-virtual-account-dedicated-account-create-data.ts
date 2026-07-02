export interface DedicatedVirtualAccountDedicatedAccountCreateData {
  /**  */
  bank: { name: string; id: number; slug: string };
  /**  */
  account_name: string;
  /**  */
  account_number: string;
  /**  */
  assigned: boolean;
  /**  */
  currency: string;
  /**  */
  metadata: unknown;
  /**  */
  active: boolean;
  /**  */
  id: number;
  /**  */
  created_at: string;
  /**  */
  updated_at: string;
  /**  */
  assignment: { integration: number; assignee_id: number; assignee_type: string; expired: boolean; account_type: string; assigned_at: string; expired_at: unknown };
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
}
