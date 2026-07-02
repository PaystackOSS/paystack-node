export interface ApplePayListDomainQuery {
  /** A flag to indicate if cursor based pagination should be used */
  use_cursor?: boolean;
  /** An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data
 */
  next?: string;
  /** An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data
 */
  previous?: string;
}
