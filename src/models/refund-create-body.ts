export interface RefundCreateBody {
  /** The reference of a previosuly completed transaction */
  transaction: string;
  /** Amount to be refunded to the customer. It cannot be more than the original transaction amount */
  amount?: number;
  /** Three-letter ISO currency */
  currency?: "GHS" | "KES" | "NGN" | "USD" | "ZAR";
  /** Customer reason */
  customer_note?: string;
  /** Merchant reason */
  merchant_note?: string;
}
