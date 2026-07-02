export interface SplitListQuery {
  /** Filter by subaccount code */
  subaccount_code?: string;
  /** The name of the split */
  name?: string;
  /** The status of the split */
  active?: boolean;
  /** The number of records to fetch per request */
  per_page?: number;
  /** The offset to retrieve data from */
  page?: number;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
