export interface BalanceLedgerQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
