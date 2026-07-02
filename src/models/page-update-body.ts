export interface PageUpdateBody {
  /** Name of page */
  name?: string;
  /** The description of the page */
  description?: string;
  /** Amount should be in the subunit of the currency */
  amount?: number;
  /** Set to false to deactivate page url */
  active?: boolean;
}
