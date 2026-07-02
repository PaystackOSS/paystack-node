export interface PaymentRequestFinalizeData {
  /**  */
  id: number;
  /**  */
  integration: number;
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
  description: string;
  /**  */
  pdf_url: unknown;
  /**  */
  line_items: Array<{ name: string; amount: number; quantity: number }>;
  /**  */
  tax: Array<{ name: string; amount: number }>;
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
  notifications: Array<unknown>;
  /**  */
  offline_reference: string;
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: { calling_code?: string }; risk_action: string; international_format_phone: string };
  /**  */
  created_at: string;
  /**  */
  discount: { type: string; amount: number };
  /**  */
  split_code: unknown;
  /**  */
  pending_amount: number;
}
