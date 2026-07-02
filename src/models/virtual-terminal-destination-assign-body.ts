export interface VirtualTerminalDestinationAssignBody {
  /** Array of objects containing recipients for payment notifications for the Virtual Terminal. */
  destinations: Array<{ target?: string; name?: string }>;
}
