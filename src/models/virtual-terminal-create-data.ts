export interface VirtualTerminalCreateData {
  /**  */
  id: number;
  /**  */
  name: string;
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  code: string;
  /**  */
  paymentMethods: Array<unknown>;
  /**  */
  active: boolean;
  /**  */
  metadata: unknown;
  /**  */
  destinations: Array<{ target?: string; type?: string; name?: string }>;
  /**  */
  currency: string;
}
