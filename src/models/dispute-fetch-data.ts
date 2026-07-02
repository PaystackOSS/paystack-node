export interface DisputeFetchData {
  /**  */
  id: number;
  /**  */
  refund_amount: number;
  /**  */
  currency: string;
  /**  */
  status: string;
  /**  */
  resolution: unknown;
  /**  */
  domain: string;
  /**  */
  transaction: { id: number; domain: string; status: string; reference: string; receipt_number?: number; amount: number; message: unknown; gateway_response: string; paid_at: string; created_at: string; channel: string; currency: string; ip_address: string; metadata: { custom_fields: Array<{ value: string; display_name: string; variable_name: string }> }; log: { start_time: number; time_spent: number; attempts: number; errors: number; success: boolean; mobile: boolean; input: Array<unknown>; history: Array<{ type: string; message: string; time: number }> }; fees: number; fees_split: number; authorization: { receiver_bank_account_number: unknown; receiver_bank: unknown }; customer: { international_format_phone: unknown }; plan: Record<string, unknown>; subaccount: Record<string, unknown>; split: Record<string, unknown>; order_id: unknown; paidAt: string; createdAt: string; requested_amount: number; pos_transaction_data: unknown; source: unknown; fees_breakdown: unknown; connect: unknown };
  /**  */
  transaction_reference: unknown;
  /**  */
  category: string;
  /**  */
  customer: { id: number; first_name: string; last_name: string; email: string; customer_code: string; phone: string; metadata: Record<string, unknown>; risk_action: string; international_format_phone: string };
  /**  */
  bin: string;
  /**  */
  last4: string;
  /**  */
  dueAt: unknown;
  /**  */
  resolvedAt: unknown;
  /**  */
  evidence: unknown;
  /**  */
  attachments: unknown;
  /**  */
  note: unknown;
  /**  */
  history: Array<{ status: string; by: string; createdAt: string }>;
  /**  */
  messages: Array<{ sender: string; body: string; createdAt: string }>;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
}
