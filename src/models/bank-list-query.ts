export interface BankListQuery {
  /** The country from which to obtain the list of supported banks */
  country?: "ghana" | "kenya" | "nigeria" | "south africa";
  /** The country from which to obtain the list of supported banks */
  currency?: "GHS" | "KES" | "NGN" | "ZAR";
  /** A flag to indicate if cursor based pagination should be used */
  use_cursor?: boolean;
  /** The number of records to fetch per request */
  perPage?: number;
  /** The offset to retrieve data from */
  page?: number;
  /** An alphanumeric value returned for every cursor based retrieval, used to
retrieve the next set of data
 */
  next?: string;
  /** An alphanumeric value returned for every cursor based retrieval, used to
retrieve the previous set of data
 */
  previous?: string;
  /** A flag to filter for available banks a customer can make a transfer to complete a payment */
  pay_with_bank_transfer?: boolean;
  /** A flag to filter for banks a customer can pay directly from */
  pay_with_bank?: boolean;
  /** A flag to filter the banks that are supported for account verification in South Africa.
You need to combine this with either the `currency` or `country` filter.
 */
  enabled_for_verification?: boolean;
  /** The type of gateway for a Nigerian bank */
  gateway?: "emandate" | "digitalbankmandate";
  /** Type of financial channel */
  type?: "ghipps" | "mobile_money" | "nuban" | "kepss" | "basa";
  /** A flag that returns Nigerian banks with their NIP institution code. 
The returned value can be used in identifying institutions on NIP.
 */
  include_nip_sort_code?: boolean;
}
