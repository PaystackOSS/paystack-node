export interface SubscriptionListQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /** Plan ID */
  plan?: number;
  /** Customer ID */
  customer?: string;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
