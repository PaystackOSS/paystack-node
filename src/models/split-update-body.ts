export interface SplitUpdateBody {
  /** Name of the transaction split */
  name?: string;
  /** Toggle status of split. When true, the split is active, else it's inactive */
  active?: boolean;
  /** This allows you specify how the transaction charge should be processed */
  bearer_type?: "subaccount" | "account" | "all-proportional" | "all";
  /** This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type */
  bearer_subaccount?: string;
}
