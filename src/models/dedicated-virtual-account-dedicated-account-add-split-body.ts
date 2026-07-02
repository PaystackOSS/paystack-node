export interface DedicatedVirtualAccountDedicatedAccountAddSplitBody {
  /** Valid Dedicated virtual account */
  account_number: string;
  /** Subaccount code of the account you want to split the transaction with */
  subaccount?: string;
  /** Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string;
}
