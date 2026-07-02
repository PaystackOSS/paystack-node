export interface OrderCreateData {
  /**  */
  discounts: Array<unknown>;
  /**  */
  currency: string;
  /**  */
  shipping_address: unknown;
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  email: string;
  /**  */
  customer: number;
  /**  */
  amount: number;
  /**  */
  pay_for_me: boolean;
  /**  */
  shipping: { customer: number; integration: number; domain: string; fees: number; delivery_note: unknown; street_line: string; city: string; state: string; country: string; is_shipped: boolean; delivery_tracking_link: unknown; id: number; createdAt: string; updatedAt: string };
  /**  */
  shipping_fees: number;
  /**  */
  shipping_method?: { region: string; fee: number; currency: string };
  /**  */
  metadata: Record<string, unknown>;
  /**  */
  order_code: string;
  /**  */
  status: string;
  /**  */
  refunded: boolean;
  /**  */
  is_viewed: boolean;
  /**  */
  expiration_date: unknown;
  /**  */
  id: number;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  items: Array<unknown>;
  /**  */
  pay_for_me_code: string;
  /**  */
  discount_amount: number;
}
