export interface RefundRetryBody {
  /** An object that contains the customer’s account details for refund */
  refund_account_details: { currency: string; account_number: string; bank_id: string };
}
