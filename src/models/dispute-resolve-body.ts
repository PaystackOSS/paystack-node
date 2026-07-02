export interface DisputeResolveBody {
  /** Dispute resolution. Accepted values, merchant-accepted, declined */
  resolution: string;
  /** Reason for resolving */
  message: string;
  /** The amount to refund, in the subunit of your integration currency */
  refund_amount: number;
  /** Filename of attachment returned via response from the Dispute upload URL */
  uploaded_filename: string;
  /** Evidence Id for fraud claims */
  evidence?: number;
}
