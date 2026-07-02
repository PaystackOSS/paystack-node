export interface OrderFetchData {
  /**  */
  discounts: Array<unknown>;
  /**  */
  order_code: string;
  /**  */
  domain: string;
  /**  */
  currency: string;
  /**  */
  amount: number;
  /**  */
  email: string;
  /**  */
  status: string;
  /**  */
  refunded: boolean;
  /**  */
  paid_at: string;
  /**  */
  shipping_address: unknown;
  /**  */
  metadata: Record<string, unknown>;
  /**  */
  shipping_fees: number;
  /**  */
  shipping_method: unknown;
  /**  */
  is_viewed: boolean;
  /**  */
  expiration_date: string;
  /**  */
  pay_for_me: boolean;
  /**  */
  id: number;
  /**  */
  integration: number;
  /**  */
  page: unknown;
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
  /**  */
  shipping: unknown;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  transaction: number;
  /**  */
  is_gift: boolean;
  /**  */
  payer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
  /**  */
  fully_refunded: boolean;
  /**  */
  refunded_amount: number;
  /**  */
  items: Array<{ order_item_id: number; orderId: number; type: string; item: number; current_total_items_price: number; files: string; order: number; amount: number; quantity: number; createdAt: string; name: string; product_level_type: string; product_id: number; product_success_message: unknown; product_redirect_url: unknown; IFNULL_p1_expires_in__p2_expires_in_: unknown; product_quantity_sold: number; product_notification_emails: unknown; IFNULL_p1_metadata__p2_metadata_: string; storefront_redirect_url: unknown; storefront_success_message: unknown }>;
  /**  */
  discount_amount: unknown;
}
