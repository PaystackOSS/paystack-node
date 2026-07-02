export interface DedicatedVirtualAccountDedicatedAccountDeactivateData {
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
  assignment: { assignee_id: number; assignee_type: string; assigned_at: string; integration: number; account_type: string };
}
