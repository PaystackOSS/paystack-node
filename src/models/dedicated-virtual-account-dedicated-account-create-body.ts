export interface DedicatedVirtualAccountDedicatedAccountCreateBody {
  /** The code for the previously created customer */
  customer: string;
  /** The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint */
  preferred_bank?: string;
  /** Subaccount code of the account you want to split the transaction with */
  subaccount?: string;
  /** Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string;
}
