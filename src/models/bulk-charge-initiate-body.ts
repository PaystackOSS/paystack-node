export interface BulkChargeInitiateBody {
  /**  */
  body: Array<{ authorization: string; amount: number; reference?: string; attempt_partial_debit?: boolean; at_least?: number; metadata?: Record<string, unknown> }>;
}
