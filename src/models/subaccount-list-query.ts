export interface SubaccountListQuery {
  /** Number of records to fetch per request */
  perPage?: number;
  /** The offset to retrieve data from */
  page?: number;
  /** Filter by the state of the subaccounts */
  active?: boolean;
}
