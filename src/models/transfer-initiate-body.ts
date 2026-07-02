export interface TransferInitiateBody {
  /** Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. */
  amount: number;
  /** The transfer recipient's code */
  recipient: string;
  /** To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.
 */
  reference: string;
  /** The reason or narration for the transfer. */
  reason?: string;
  /** The source of funds to send from */
  source: string;
  /** Specify the currency of the transfer. */
  currency?: "NGN" | "ZAR" | "KES" | "GHS";
}
