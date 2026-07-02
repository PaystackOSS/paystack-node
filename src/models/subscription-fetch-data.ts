export interface SubscriptionFetchData {
  /**  */
  id: number;
  /**  */
  domain: string;
  /**  */
  status: string;
  /**  */
  subscription_code: string;
  /**  */
  email_token: string;
  /**  */
  amount: number;
  /**  */
  cron_expression: string;
  /**  */
  next_payment_date: string;
  /**  */
  open_invoice: unknown;
  /**  */
  createdAt: string;
  /**  */
  cancelledAt: unknown;
  /**  */
  integration: number;
  /**  */
  plan: { id: number; name: string; plan_code: string; description: unknown; amount: number; interval: string; send_invoices: boolean; send_sms: boolean; currency: string };
  /**  */
  authorization: { authorization_code: string; bin: string; last4: string; exp_month: string; exp_year: string; channel: string; card_type: string; bank: string; country_code: string; brand: string; reusable: boolean; signature: string; account_name: unknown };
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
  /**  */
  invoices: Array<unknown>;
  /**  */
  invoices_history: Array<unknown>;
  /**  */
  invoice_limit: number;
  /**  */
  split_code: unknown;
  /**  */
  most_recent_invoice: unknown;
  /**  */
  payments_count: number;
  /**  */
  metadata: Record<string, unknown>;
}
