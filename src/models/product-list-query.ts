export interface ProductListQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /** The state of the product */
  active?: boolean;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
