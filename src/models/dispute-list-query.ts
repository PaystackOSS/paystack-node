export interface DisputeListQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /** Dispute status */
  status?: "awaiting-merchant-feedback" | "awaiting-bank-feedback" | "pending" | "resolved";
  /** Transaction ID */
  transaction?: string;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
