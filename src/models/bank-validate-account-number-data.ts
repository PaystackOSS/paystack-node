export interface BankValidateAccountNumberData {
  /**  */
  verified: boolean;
  /**  */
  verificationMessage: string;
  /**  */
  accountAcceptsDebits: boolean;
  /**  */
  accountAcceptsCredits: boolean;
  /**  */
  accountOpenForMoreThanThreeMonths: boolean;
  /**  */
  accountHolderMatch: boolean;
  /**  */
  accountOpen: boolean;
}
