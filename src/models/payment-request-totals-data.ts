export interface PaymentRequestTotalsData {
  /**  */
  pending: Array<{ currency: string; amount: number }>;
  /**  */
  successful: Array<{ currency: string; amount: number }>;
  /**  */
  total: Array<{ currency: string; amount: number }>;
}
