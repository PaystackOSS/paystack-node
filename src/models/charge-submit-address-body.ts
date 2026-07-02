export interface ChargeSubmitAddressBody {
  /** Customer's address */
  address: string;
  /** Customer's city */
  city: string;
  /** Customer's state */
  state: string;
  /** Customer's zipcode */
  zip_code: string;
  /** The reference of the ongoing transaction */
  reference: string;
}
