export interface TransactionPartialDebitBody {
  /** Customer's email address */
  email: string;
  /** Specified in the lowest denomination of your currency */
  amount: number;
  /** Valid authorization code to charge */
  authorization_code: string;
  /** List of all support currencies */
  currency: "GHS" | "KES" | "NGN" | "ZAR" | "USD";
  /** Minimum amount to charge */
  at_least?: string;
  /** Unique transaction reference. Only -, ., = and alphanumeric characters allowed. */
  reference?: string;
}
