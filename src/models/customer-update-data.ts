export interface CustomerUpdateData {
  /**  */
  first_name: string;
  /**  */
  last_name: string;
  /**  */
  email: string;
  /**  */
  phone: string;
  /**  */
  metadata: Record<string, unknown>;
  /**  */
  domain: string;
  /**  */
  customer_code: string;
  /**  */
  risk_action: string;
  /**  */
  id: number;
  /**  */
  integration: number;
  /**  */
  createdAt: string;
  /**  */
  updatedAt: string;
  /**  */
  identified: boolean;
  /**  */
  identifications: unknown;
}
