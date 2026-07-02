export interface ChargeSubmitPinBody {
  /** Customer's PIN for the ongoing transaction */
  pin: string;
  /** Transaction reference that requires the PIN */
  reference: string;
}
