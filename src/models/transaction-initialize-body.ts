export interface TransactionInitializeBody {
  /** Customer's email address */
  email: string;
  /** Amount should be in smallest denomination of the currency.
 */
  amount: number;
  /** List of all support currencies */
  currency?: "GHS" | "KES" | "NGN" | "ZAR" | "USD";
  /** Unique transaction reference. Only -, ., = and alphanumeric characters allowed. */
  reference?: string;
  /** An array of payment channels to control what channels you want to make available to the user to make a payment with */
  channels?: Array<"apple_pay" | "bank" | "bank_transfer" | "capitec_pay" | "card" | "eft" | "mobile_money" | "payattitude" | "qr" | "ussd">;
  /** Fully qualified url, e.g. https://example.com/ to redirect your customers to after a successful payment. Use this to override the callback url provided on the dashboard for this transaction
 */
  callback_url?: string;
  /** If transaction is to create a subscription to a predefined plan, provide plan code here. 
This would invalidate the value provided in amount
 */
  plan?: string;
  /** Number of times to charge customer during subscription to plan */
  invoice_limit?: number;
  /** The split code of the transaction split */
  split_code?: string;
  /** Split configuration for transactions
 */
  split?: { name: string; type: "percentage" | "flat"; subaccounts: Array<{ subaccount?: string; share?: number }>; currency: "NGN" | "GHS" | "ZAR" | "USD"; bearer_type?: "subaccount" | "account" | "all-proportional" | "all"; bearer_subaccount?: string };
  /** The code for the subaccount that owns the payment */
  subaccount?: string;
  /** A flat fee to charge the subaccount for a transaction. 
This overrides the split percentage set when the subaccount was created
 */
  transaction_charge?: string;
  /** The bearer of the transaction charge */
  bearer?: "account" | "subaccount";
  /** Used to replace the email address shown on the Checkout */
  label?: string;
  /** JSON object of custom data */
  metadata?: Record<string, unknown>;
}
