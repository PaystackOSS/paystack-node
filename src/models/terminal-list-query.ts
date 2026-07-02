export interface TerminalListQuery {
  /** A cursor that indicates your place in the list. It can be used to fetch the next page of the list */
  next?: string;
  /** A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request */
  previous?: string;
  /** Specify how many records you want to retrieve per page */
  per_page?: number;
}
