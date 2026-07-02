export interface ProductCreateBody {
  /** Name of product */
  name: string;
  /** The description of the product */
  description: string;
  /** Price should be in kobo if currency is NGN, pesewas, if currency is GHS,
and cents, if currency is ZAR
 */
  price: number;
  /** Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD
 */
  currency: string;
  /** Set to true if the product has unlimited stock. Leave as false if the
product has limited stock
 */
  unlimited?: boolean;
  /** Number of products in stock. Use if limited is true */
  quantity?: number;
  /** The split code if sharing the transaction with partners */
  split_code?: string;
  /** Stringified JSON object of custom data */
  metadata?: string;
}
