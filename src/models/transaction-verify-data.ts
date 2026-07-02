export interface TransactionVerifyData {
  /**  */
  id: number;
  /**  */
  domain: string;
  /**  */
  status: string;
  /**  */
  reference: string;
  /**  */
  receipt_number: string;
  /**  */
  amount: number;
  /**  */
  message: string;
  /**  */
  gateway_response: string;
  /**  */
  paid_at: string;
  /**  */
  created_at: string;
  /**  */
  channel: string;
  /**  */
  currency: string;
  /**  */
  ip_address: string;
  /**  */
  metadata: unknown;
  /**  */
  log: { start_time: number; time_spent: number; attempts: number; errors: number; success: boolean; mobile: boolean; input: Array<unknown>; history: Array<{ type: string; message: string; time: number }> };
  /**  */
  fees: number;
  /**  */
  fees_split: unknown;
  /**  */
  authorization: { authorization_code?: string; bin?: unknown; last4?: string; exp_month?: string; exp_year?: string; channel?: string; card_type?: string; bank?: string; country_code?: string; brand?: string; reusable?: boolean; signature?: string; account_name?: unknown; receiver_bank_account_number?: unknown; receiver_bank?: unknown };
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: unknown; risk_action: string; international_format_phone: string };
  /**  */
  plan: string;
  /**  */
  split: Record<string, unknown>;
  /**  */
  order_id: unknown;
  /**  */
  paidAt: string;
  /**  */
  createdAt: string;
  /**  */
  requested_amount: number;
  /**  */
  pos_transaction_data: unknown;
  /**  */
  source: unknown;
  /**  */
  fees_breakdown: unknown;
  /**  */
  connect: unknown;
  /**  */
  transaction_date: string;
  /**  */
  plan_object: { id?: number; name?: string; plan_code?: string; description?: unknown; amount?: number; interval?: string; send_invoices?: boolean; send_sms?: boolean; currency?: string };
  /**  */
  subaccount: Record<string, unknown>;
}
