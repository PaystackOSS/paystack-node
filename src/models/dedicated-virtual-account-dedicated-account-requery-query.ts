export interface DedicatedVirtualAccountDedicatedAccountRequeryQuery {
  /** Virtual account number to requery */
  account_number?: string;
  /** The bank's slug in lowercase, without spaces. */
  provider_slug?: string;
  /** The day the transfer was made */
  date?: string;
}
