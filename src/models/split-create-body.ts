export interface SplitCreateBody {
  /** Name of the transaction split */
  name: string;
  /** The type of transaction split you want to create. */
  type: "percentage" | "flat";
  /** A list of object containing subaccount code and number of shares */
  subaccounts: Array<{ subaccount?: string; share?: number }>;
  /** The transaction currency */
  currency: "NGN" | "GHS" | "ZAR" | "USD";
  /** This allows you specify how the transaction charge should be processed */
  bearer_type?: "subaccount" | "account" | "all-proportional" | "all";
  /** This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type */
  bearer_subaccount?: string;
}
