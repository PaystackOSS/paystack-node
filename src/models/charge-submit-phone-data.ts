export interface ChargeSubmitPhoneData {
  /**  */
  status: string;
  /**  */
  amount: number;
  /**  */
  currency: string;
  /**  */
  transaction_date: string;
  /**  */
  reference: string;
  /**  */
  domain: string;
  /**  */
  redirect_url: string;
  /**  */
  metadata: Record<string, unknown>;
  /**  */
  gateway_response: string;
  /**  */
  message: string;
  /**  */
  channel: string;
  /**  */
  fees: number;
  /**  */
  authorization: { authorization_code: string; bin: string; last4: string; exp_month: string; exp_year: string; channel: string; card_type: string; bank: string; country_code: string; brand: string; reusable: boolean; signature: string };
  /**  */
  customer: { first_name: string; last_name: string; email: string; customer_code: string; phone: string; risk_action: string };
  /**  */
  display_text: string;
}
