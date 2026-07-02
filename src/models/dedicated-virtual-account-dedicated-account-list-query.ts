export interface DedicatedVirtualAccountDedicatedAccountListQuery {
  /** Status of the dedicated virtual account */
  active?: boolean;
  /** The customer's ID */
  customer?: number;
  /** The currency of the dedicated virtual account */
  currency?: "NGN" | "GHS";
  /** The bank's slug in lowercase, without spaces */
  provider_slug?: string;
  /** The bank's ID */
  bank_id?: string;
  /** The number of records to fetch per request */
  perPage?: number;
  /** The offset to retrieve data from */
  page?: number;
}
