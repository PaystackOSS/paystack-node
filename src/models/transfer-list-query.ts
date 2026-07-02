export interface TransferListQuery {
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
  /** Filter transfer by the recipient code */
  recipient?: string;
  /** Filter transfer by status */
  status?: "pending" | "success" | "failed" | "otp" | "abandoned" | "reversed" | "blocked" | "rejected" | "received";
}
