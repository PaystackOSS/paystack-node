export interface CustomerCreateBody {
  /** Customer's email address */
  email: string;
  /** Customer's first name */
  first_name?: string;
  /** Customer's last name */
  last_name?: string;
  /** Customer's phone number */
  phone?: string;
  /** Stringified JSON object of custom data */
  metadata?: string;
}
