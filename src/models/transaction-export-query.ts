export interface TransactionExportQuery {
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
  /** Filter by the status of the transaction */
  status?: "success" | "failed" | "abandoned" | "reversed" | "all";
  /** Filter by customer ID */
  customer?: number;
  /** Filter by subaccount code */
  subaccount_code?: string;
  /** Filter by the settlement ID */
  settlement?: number;
}
