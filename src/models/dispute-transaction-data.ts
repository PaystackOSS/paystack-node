export interface DisputeTransactionData {
  /**  */
  history: Array<{ status: string; by: string; createdAt: string }>;
  /**  */
  messages: Array<{ sender: string; body: string; createdAt: string }>;
  /**  */
  currency: string;
  /**  */
  last4: string;
  /**  */
  bin: string;
  /**  */
  transaction_reference: unknown;
  /**  */
  merchant_transaction_reference: string;
  /**  */
  refund_amount: number;
  /**  */
  status: string;
  /**  */
  domain: string;
  /**  */
  resolution: unknown;
  /**  */
  category: string;
  /**  */
  note: unknown;
  /**  */
  attachments: unknown;
  /**  */
  id: number;
  /**  */
  integration: number;
  /**  */
  transaction: { id: number; domain: string; status: string; reference: string; receipt_number?: number; amount: number; message: unknown; gateway_response: string; paid_at: string; created_at: string; channel: string; currency: string; ip_address: string; metadata: { custom_fields: Array<{ value: string; display_name: string; variable_name: string }> }; log: { start_time: number; time_spent: number; attempts: number; errors: number; success: boolean; mobile: boolean; input: Array<unknown>; history: Array<{ type: string; message: string; time: number }> }; fees: number; fees_split: number; authorization: { receiver_bank_account_number: unknown; receiver_bank: unknown }; customer: { international_format_phone: unknown }; plan: Record<string, unknown>; subaccount: Record<string, unknown>; split: Record<string, unknown>; order_id: unknown; paidAt: string; createdAt: string; requested_amount: number; pos_transaction_data: unknown; source: unknown; fees_breakdown: unknown; connect: Record<string, unknown> };
  /**  */
  created_by: number;
  /**  */
  evidence: unknown;
  /**  */
  resolvedAt: unknown;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  dueAt: unknown;
}
