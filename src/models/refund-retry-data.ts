export interface RefundRetryData {
  /**  */
  integration: number;
  /**  */
  transaction: number;
  /**  */
  dispute: Record<string, unknown>;
  /**  */
  settlement: Record<string, unknown>;
  /**  */
  id: number;
  /**  */
  domain: string;
  /**  */
  currency: string;
  /**  */
  amount: number;
  /**  */
  status: string;
  /**  */
  refunded_at: string;
  /**  */
  expected_at: string;
  /**  */
  channel: string;
  /**  */
  refunded_by: string;
  /**  */
  customer_note: string;
  /**  */
  merchant_note: string;
  /**  */
  deducted_amount: number;
  /**  */
  fully_deducted: boolean;
  /**  */
  bank_reference: string;
  /**  */
  reason: string;
  /**  */
  customer: Record<string, unknown>;
  /**  */
  initiated_by: string;
  /**  */
  reversed_at: string;
  /**  */
  session_id: string;
}
