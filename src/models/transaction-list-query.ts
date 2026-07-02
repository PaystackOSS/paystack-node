export interface TransactionListQuery {
  /** A flag to indicate if cursor based pagination should be used */
  use_cursor?: boolean;
  /** An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data
 */
  next?: string;
  /** An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data
 */
  previous?: string;
  /** The number of records to fetch per request */
  per_page?: number;
  /** The offset to retrieve data from */
  page?: number;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
  /** Filter transaction by status */
  status?: "success" | "failed" | "abandoned" | "reversed";
  /** The origin of the payment */
  source?: "merchantApi" | "checkout" | "pos" | "virtualTerminal";
  /** Filter transactions by a terminal ID */
  terminal_id?: string;
  /** Filter transactions by a virtual account number */
  virtual_account_number?: string;
  /** Filter transactions by a customer code */
  customer_code?: string;
  /** Filter transactions by a specific amount */
  amount?: number;
  /** The settlement ID to filter for settled transactions */
  settlement?: number;
  /** The payment method the customer used to complete the transaction */
  channel?: "card" | "pos" | "bank" | "dedicated_nuban" | "ussd" | "bank_transfer";
  /** Filter transaction by subaccount code */
  subaccount_code?: string;
  /** Filter transaction by split code */
  split_code?: string;
}
