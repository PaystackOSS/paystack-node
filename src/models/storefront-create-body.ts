export interface StorefrontCreateBody {
  /** Name of the storefront */
  name: string;
  /** A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug
 */
  slug: string;
  /** Currency for prices of products in your storefront. */
  currency: "GHS" | "KES" | "NGN" | "USD" | "ZAR";
  /** The description of the storefront */
  description?: string;
}
