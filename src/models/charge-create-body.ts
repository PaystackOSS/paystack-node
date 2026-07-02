export interface ChargeCreateBody {
  /** Customer's email address */
  email: string;
  /** Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR */
  amount: number;
  /** An authorization code to charge. */
  authorization_code?: string;
  /** 4-digit PIN (send with a non-reusable authorization code) */
  pin?: string;
  /** Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. */
  reference?: string;
  /** The customer's birthday in the format YYYY-MM-DD e.g 2017-05-16 */
  birthday?: string;
  /** This is the unique identifier of the device a user uses in making payment. 
Only -, .`, = and alphanumeric characters are allowed. */
  device_id?: string;
  /** JSON object of custom data */
  metadata?: Record<string, unknown>;
  /** The bank object if charging a bank account */
  bank?: { code?: string; account_number?: string };
  /** Details of the mobile service provider */
  mobile_money?: { phone?: string; provider?: string };
  /** The USSD code for the provider to charge */
  ussd?: { type?: "737" | "919" | "822" | "966" };
  /** Details of the EFT provider */
  eft?: { provider?: string };
}
