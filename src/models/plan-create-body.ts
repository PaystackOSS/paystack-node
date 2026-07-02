export interface PlanCreateBody {
  /** Name of plan */
  name: string;
  /** Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR */
  amount: number;
  /** Payment interval */
  interval: "daily" | "weekly" | "monthly" | "biannually" | "annually";
  /** A description for this plan */
  description?: string;
  /** Set to false if you don't want invoices to be sent to your customers */
  send_invoices?: boolean;
  /** Set to false if you don't want text messages to be sent to your customers */
  send_sms?: boolean;
  /** Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD */
  currency?: string;
  /** Number of invoices to raise during subscription to this plan. 
Can be overridden by specifying an invoice_limit while subscribing. */
  invoice_limit?: number;
}
