export interface ChargeSubmitBirthdayBody {
  /** Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21 */
  birthday: string;
  /** The reference of the ongoing transaction */
  reference: string;
}
