export interface PaymentRequestVerifyData {
  /**  */
  id: number;
  /**  */
  integration: { key: string; name: string; logo: string; allowed_currencies: Array<string> };
  /**  */
  domain: string;
  /**  */
  amount: number;
  /**  */
  currency: string;
  /**  */
  due_date: string;
  /**  */
  has_invoice: boolean;
  /**  */
  invoice_number: number;
  /**  */
  description: unknown;
  /**  */
  pdf_url: string;
  /**  */
  line_items: Array<unknown>;
  /**  */
  tax: Array<unknown>;
  /**  */
  request_code: string;
  /**  */
  status: string;
  /**  */
  paid: boolean;
  /**  */
  paid_at: unknown;
  /**  */
  metadata: unknown;
  /**  */
  notifications: Array<{ sent_at: string; channel: string }>;
  /**  */
  offline_reference: string;
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: { calling_code?: string }; risk_action: string; international_format_phone: string };
  /**  */
  created_at: string;
  /**  */
  discount: unknown;
  /**  */
  split_code: unknown;
  /**  */
  pending_amount: number;
}
