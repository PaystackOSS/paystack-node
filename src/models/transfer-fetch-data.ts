export interface TransferFetchData {
  /**  */
  amount: number;
  /**  */
  createdAt: string;
  /**  */
  currency: string;
  /**  */
  domain: string;
  /**  */
  failures: unknown;
  /**  */
  id: number;
  /**  */
  integration: number;
  /**  */
  reason: string;
  /**  */
  reference: string;
  /**  */
  source: string;
  /**  */
  source_details: unknown;
  /**  */
  status: string;
  /**  */
  titan_code: unknown;
  /**  */
  transfer_code: string;
  /**  */
  request: number;
  /**  */
  transferred_at: unknown;
  /**  */
  updatedAt: string;
  /**  */
  recipient: { active: boolean; createdAt: string; currency: string; description: string; domain: string; email: string; id: number; integration: number; metadata?: Record<string, unknown>; name: string; recipient_code: string; type: string; updatedAt: string; is_deleted: boolean; isDeleted: boolean; details: { authorization_code: unknown; account_number: string; account_name: string; bank_code: string; bank_name: string } };
  /**  */
  session: { provider: unknown; id: unknown };
  /**  */
  fee_charged: number;
  /**  */
  fees_breakdown: Array<{ amount: string; formula: unknown; type: string }>;
  /**  */
  gateway_response: string;
}
