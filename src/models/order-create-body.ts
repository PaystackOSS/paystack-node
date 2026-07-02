export interface OrderCreateBody {
  /** The email of the customer placing the order */
  email: string;
  /** The customer's first name */
  first_name: string;
  /** The customer's last name */
  last_name: string;
  /** The customer's mobile number */
  phone: string;
  /** Currency in which amount is set */
  currency: "GHS" | "KES" | "NGN" | "USD" | "ZAR";
  /**  */
  items: Array<{ item: number; type: string; quantity: number; amount: number }>;
  /** The shipping details of the order */
  shipping: { street_line: string; city: string; state: string; country: string; shipping_fee: number; delivery_note?: string };
  /** A flag to indicate if the order is for someone else */
  is_gift?: boolean;
  /** A flag to indicate if the someone else should pay for the order */
  pay_for_me?: boolean;
}
