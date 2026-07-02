export interface TransactionPartialDebitData {
  /**  */
  amount: number;
  /**  */
  currency: string;
  /**  */
  transaction_date: string;
  /**  */
  status: string;
  /**  */
  reference: string;
  /**  */
  domain: string;
  /**  */
  metadata: string;
  /**  */
  gateway_response: string;
  /**  */
  message: unknown;
  /**  */
  channel: string;
  /**  */
  ip_address: unknown;
  /**  */
  log: { start_time: number; time_spent: number; attempts: number; errors: number; success: boolean; mobile: boolean; input: Array<unknown>; history: Array<{ type: string; message: string; time: number }> };
  /**  */
  fees: number;
  /**  */
  authorization: { authorization_code: string; bin: string; last4: string; exp_month: string; exp_year: string; channel: string; card_type: string; bank: string; country_code: string; brand: string; reusable: boolean; signature: string; account_name: unknown };
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
  /**  */
  plan: number;
  /**  */
  requested_amount: number;
  /**  */
  id: number;
}
