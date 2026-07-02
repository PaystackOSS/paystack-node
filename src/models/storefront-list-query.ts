export interface StorefrontListQuery {
  /** Number of records to fetch per request */
  perPage?: number;
  /** The offset to retrieve data from */
  page?: number;
  /**  */
  status?: "active" | "inactive";
}
