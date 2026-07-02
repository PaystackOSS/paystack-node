export interface TransactionTotalsData {
  /**  */
  total_transactions: number;
  /**  */
  total_volume: number;
  /**  */
  total_volume_by_currency: Array<{ currency: string; amount: number }>;
  /**  */
  pending_transfers: number;
  /**  */
  pending_transfers_by_currency: Array<{ currency: string; amount: number }>;
}
