export interface SubaccountCreateBody {
  /** Name of business for subaccount */
  business_name: string;
  /** Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. */
  settlement_bank: string;
  /** Bank account number */
  account_number: string;
  /** Customer's phone number */
  percentage_charge: number;
  /** A description for this subaccount */
  description?: string;
  /** A contact email for the subaccount */
  primary_contact_email?: string;
  /** The name of the contact person for this subaccount */
  primary_contact_name?: string;
  /** A phone number to call for this subaccount */
  primary_contact_phone?: string;
  /** Stringified JSON object of custom data */
  metadata?: string;
}
