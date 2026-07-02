export interface PaymentRequestCreateBody {
  /** Customer id or code */
  customer: string;
  /** Payment request amount. Only useful if line items and tax values are ignored. 
The endpoint will throw a friendly warning if neither is available. */
  amount: number;
  /** Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN */
  currency?: string;
  /** ISO 8601 representation of request due date */
  due_date?: string;
  /** A short description of the payment request */
  description?: string;
  /** Array of line items */
  line_items?: Array<Record<string, unknown>>;
  /** Array of taxes */
  tax?: Array<Record<string, unknown>>;
  /** Indicates whether Paystack sends an email notification to customer. Defaults to true */
  send_notification?: boolean;
  /** Indicate if request should be saved as draft. Defaults to false and overrides send_notification */
  draft?: boolean;
  /** Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed */
  has_invoice?: boolean;
  /** Numeric value of invoice. Invoice will start from 1 and auto increment from there.  This field is to help override whatever value Paystack decides. Auto increment for  subsequent invoices continue from this point. */
  invoice_number?: number;
  /** The split code of the transaction split. */
  split_code?: string;
}
