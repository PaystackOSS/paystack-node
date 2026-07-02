export interface DisputeUpdateBody {
  /** The amount to refund, in the subunit of your currency */
  refund_amount: number;
  /** Filename of attachment returned via response from the Dispute upload URL */
  uploaded_filename?: string;
}
