export interface CustomerCreateData {
  /**  */
  transactions: Array<unknown>;
  /**  */
  subscriptions: Array<unknown>;
  /**  */
  authorizations: Array<unknown>;
  /**  */
  email: string;
  /**  */
  first_name: string;
  /**  */
  last_name: string;
  /**  */
  phone: string;
  /**  */
  integration: number;
  /**  */
  domain: string;
  /**  */
  metadata: { calling_code?: string };
  /**  */
  customer_code: string;
  /**  */
  risk_action: string;
  /**  */
  id: number;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  identified: boolean;
  /**  */
  identifications: unknown;
}
