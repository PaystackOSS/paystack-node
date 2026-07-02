export interface DedicatedVirtualAccountDedicatedAccountAssignBody {
  /** Customer's email address */
  email: string;
  /** Customer's first name */
  first_name: string;
  /** Customer's last name */
  last_name: string;
  /** Customer's phone name */
  phone: string;
  /** The bank slug for preferred bank. To get a list of available banks, 
use the List Banks endpoint, passing `pay_with_bank_transfer=true` query parameter
 */
  preferred_bank: string;
  /** The two letter code country */
  country: "NG" | "GH";
  /** Customer's account number */
  account_number?: string;
  /** Customer's Bank Verification Number */
  bvn?: string;
  /** Customer's bank code */
  bank_code?: string;
  /** Subaccount code of the account you want to split the transaction with */
  subaccount?: string;
  /** Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string;
}
