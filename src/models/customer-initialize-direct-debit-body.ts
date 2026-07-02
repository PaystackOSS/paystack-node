export interface CustomerInitializeDirectDebitBody {
  /**  */
  account: { number: string; bank_code: string };
  /**  */
  address: { street: string; city: string; state: string };
}
