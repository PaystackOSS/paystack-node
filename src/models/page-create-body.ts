export interface PageCreateBody {
  /** Name of page */
  name: string;
  /** The description of the page */
  description?: string;
  /** Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR */
  amount?: number;
  /** The transaction currency. Defaults to your integration currency. */
  currency?: "NGN" | "GHS" | "ZAR" | "KES" | "USD";
  /** URL slug you would like to be associated with this page. Page will be accessible at `https://paystack.com/pay/[slug]` */
  slug?: string;
  /** The type of payment page to create. Defaults to `payment` if no type is specified.
 */
  type?: "payment" | "subscription" | "product" | "plan";
  /** The ID of the plan to subscribe customers on this payment page to when `type` is set to `subscription`. */
  plan?: string;
  /** Specifies whether to collect a fixed amount on the payment page. If true, `amount` must be passed. */
  fixed_amount?: boolean;
  /** The split code of the transaction split. e.g. `SPL_98WF13Eb3w` */
  split_code?: string;
  /** JSON object of custom data */
  metadata?: Record<string, unknown>;
  /** If you would like Paystack to redirect to a URL upon successful payment, specify the URL here.
 */
  redirect_url?: string;
  /** A success message to display to the customer after a successful transaction
 */
  success_message?: string;
  /** An email address that will receive transaction notifications for this payment page
 */
  notification_email?: string;
  /** Specify whether to collect phone numbers on the payment page
 */
  collect_phone?: boolean;
  /** If you would like to accept custom fields, specify them here. */
  custom_fields?: Array<Record<string, unknown>>;
}
