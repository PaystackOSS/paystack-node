export interface SplitRemoveSubaccountBody {
  /** Subaccount code of the customer or partner */
  subaccount?: string;
  /** The percentage or flat quota of the customer or partner */
  share?: number;
}
