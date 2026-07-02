export interface RefundCreateData {
  /**  */
  transaction: { id: number; domain: string; reference: string; amount: number; paid_at: string; channel: string; currency: string; authorization: { exp_month: unknown; exp_year: unknown; account_name: unknown }; customer: { international_format_phone: string }; plan: Record<string, unknown>; subaccount: { currency: unknown }; split: Record<string, unknown>; order_id: unknown; paidAt: string; pos_transaction_data: unknown; source: unknown; fees_breakdown: unknown };
  /**  */
  integration: number;
  /**  */
  deducted_amount: number;
  /**  */
  channel: unknown;
  /**  */
  merchant_note: string;
  /**  */
  customer_note: string;
  /**  */
  status: string;
  /**  */
  refunded_by: string;
  /**  */
  expected_at: string;
  /**  */
  currency: string;
  /**  */
  domain: string;
  /**  */
  amount: number;
  /**  */
  fully_deducted: boolean;
  /**  */
  id: number;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
}
