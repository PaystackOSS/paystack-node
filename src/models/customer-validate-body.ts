export interface CustomerValidateBody {
  /** Customer's first name */
  first_name: string;
  /** Customer's middle name */
  middle_name?: string;
  /** Customer's last name */
  last_name: string;
  /** Predefined types of identification. */
  type: string;
  /** Customer's identification number. */
  value?: string;
  /** Two-letter country code of identification issuer */
  country: string;
  /** Customer's Bank Verification Number */
  bvn: string;
  /** You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank). */
  bank_code: string;
  /** Customer's bank account number. */
  account_number: string;
}
