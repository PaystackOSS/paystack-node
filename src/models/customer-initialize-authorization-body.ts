export interface CustomerInitializeAuthorizationBody {
  /** Customer's email address */
  email: string;
  /** direct_debit is the only supported option for now */
  channel: "direct_debit";
  /** Fully qualified url (e.g. https://example.com/) to redirect your customer to */
  callback_url?: string;
  /**  */
  account?: { number: string; bank_code: string };
  /**  */
  address?: { street: string; city: string; state: string };
}
