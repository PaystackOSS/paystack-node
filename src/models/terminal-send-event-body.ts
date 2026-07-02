export interface TerminalSendEventBody {
  /** The type of event to push */
  type?: "invoice" | "transaction";
  /** The action the Terminal needs to perform. For the invoice type, the action can either be process or view. 
For the transaction type, the action can either be process or print.
 */
  action?: "process" | "view" | "print";
  /** The parameters needed to perform the specified action */
  data?: { id?: number; reference?: string };
}
