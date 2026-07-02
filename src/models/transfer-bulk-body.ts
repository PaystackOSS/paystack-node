export interface TransferBulkBody {
  /** The source of funds for the transfer. */
  source: string;
  /** Specify the currency of the transfer. */
  currency?: "NGN" | "ZAR" | "KES" | "GHS";
  /** A list of transfer object */
  transfers: Array<{ amount: number; recipient: string; reference: string; reason?: string }>;
}
