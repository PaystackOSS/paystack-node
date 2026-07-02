export interface PaymentRequestListQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /** Customer ID */
  customer?: string;
  /** Invoice status to filter */
  status?: "draft" | "pending" | "success" | "failed";
  /** If your integration supports more than one currency, choose the one to filter */
  currency?: string;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
