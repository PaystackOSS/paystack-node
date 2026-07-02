export interface VirtualTerminalCreateBody {
  /** The name of the virtual terminal */
  name: string;
  /** Array of objects containing recipients for payment notifications for the Virtual Terminal. */
  destinations: Array<{ target?: string; name?: string }>;
  /** Split code to associate with the virtual terminal */
  split_code?: string;
  /** Additional custom data as key-value pairs */
  metadata?: Record<string, unknown>;
}
