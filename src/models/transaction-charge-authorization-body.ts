export interface TransactionChargeAuthorizationBody {
  /** Customer's email address */
  email: string;
  /** Amount in the lower denomination of your currency */
  amount: number;
  /** Valid authorization code to charge */
  authorization_code: string;
  /** Unique transaction reference. Only -, ., = and alphanumeric characters allowed. */
  reference?: string;
  /** List of all support currencies */
  currency?: "GHS" | "KES" | "NGN" | "ZAR" | "USD";
  /** The split code of the transaction split */
  split_code?: string;
  /** Split configuration for transactions
 */
  split?: { name: string; type: "percentage" | "flat"; subaccounts: Array<{ subaccount?: string; share?: number }>; currency: "NGN" | "GHS" | "ZAR" | "USD"; bearer_type?: "subaccount" | "account" | "all-proportional" | "all"; bearer_subaccount?: string };
  /** The code for the subaccount that owns the payment */
  subaccount?: string;
  /** A flat fee to charge the subaccount for a transaction. 
This overrides the split percentage set when the subaccount was created */
  transaction_charge?: string;
  /** The bearer of the transaction charge */
  bearer?: "account" | "subaccount";
  /** Stringified JSON object of custom data */
  metadata?: string;
  /** If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. */
  queue?: boolean;
}
