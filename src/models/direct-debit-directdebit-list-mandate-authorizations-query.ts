export interface DirectDebitDirectdebitListMandateAuthorizationsQuery {
  /** The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response */
  cursor?: string;
  /** Filter by the authorization status */
  status?: "pending" | "active" | "revoked";
  /** The number of authorizations to fetch per request */
  per_page?: number;
}
