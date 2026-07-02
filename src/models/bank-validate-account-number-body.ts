export interface BankValidateAccountNumberBody {
  /** Customer's first and last name registered with their bank */
  account_name: string;
  /** Customer's account number */
  account_number: string;
  /** The type of the customer's account number */
  account_type: "personal" | "business";
  /** The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint */
  bank_code: string;
  /** The two digit ISO code of the customer’s bank */
  country_code: string;
  /** Customer’s mode of identity */
  document_type: "identityNumber" | "passportNumber" | "businessRegistrationNumber";
  /** Customer’s mode of identity number */
  document_number?: string;
}
