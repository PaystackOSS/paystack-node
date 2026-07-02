export interface DisputeDownloadQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /**  */
  status?: "awaiting-merchant-feedback" | "awaiting-bank-feedback" | "pending" | "resolved";
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
