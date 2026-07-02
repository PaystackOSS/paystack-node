export interface VirtualTerminalFetchData {
  /**  */
  id: number;
  /**  */
  code: string;
  /**  */
  name: string;
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  paymentMethods: Array<unknown>;
  /**  */
  active: boolean;
  /**  */
  created_at: string;
  /**  */
  connect_account_id: unknown;
  /**  */
  destinations: Array<{ target?: string; type?: string; name?: string; created_at?: string }>;
  /**  */
  currency: string;
}
