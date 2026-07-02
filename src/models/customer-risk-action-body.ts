export interface CustomerRiskActionBody {
  /** The customer code from the response of the customer creation */
  customer: string;
  /** This determines the fraud rules that should be applied to the customer */
  risk_action?: "allow" | "deny" | "default";
}
