export interface CustomerVerifyAuthorizationData {
  /**  */
  authorization_code: string;
  /**  */
  channel: string;
  /**  */
  bank: string;
  /**  */
  active: boolean;
  /**  */
  customer: { code: string; email: string };
}
