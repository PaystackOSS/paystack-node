export interface BulkChargeListQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The offset to retrieve data from */
  page?: number;
  /** Filter by the status of the charges */
  status?: "active" | "paused" | "complete";
}
