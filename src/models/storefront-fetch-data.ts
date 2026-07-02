export interface StorefrontFetchData {
  /**  */
  social_media: Array<unknown>;
  /**  */
  contacts: Array<{ value: string; id: number; type_name: unknown; type: number }>;
  /**  */
  name: string;
  /**  */
  slug: string;
  /**  */
  currency: string;
  /**  */
  welcome_message: unknown;
  /**  */
  success_message: unknown;
  /**  */
  redirect_url: unknown;
  /**  */
  description: unknown;
  /**  */
  delivery_note: string;
  /**  */
  background_color: string;
  /**  */
  status: string;
  /**  */
  shippable: boolean;
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  digital_product_expiry: unknown;
  /**  */
  metadata?: Record<string, unknown>;
  /**  */
  id: number;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  products: Array<unknown>;
  /**  */
  shipping_fees: Array<unknown>;
}
