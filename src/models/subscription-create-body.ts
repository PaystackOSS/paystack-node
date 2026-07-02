export interface SubscriptionCreateBody {
  /** Customer's email address or customer code */
  customer: string;
  /** Plan code */
  plan: string;
  /** If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. 
If this is not supplied, the customer's most recent authorization would be used */
  authorization?: string;
  /** Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 */
  start_date?: string;
}
