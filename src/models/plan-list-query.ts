export interface PlanListQuery {
  /** Number of records to fetch per page */
  perPage?: number;
  /** The section to retrieve */
  page?: number;
  /** Specify interval of the plan */
  interval?: "daily" | "weekly" | "monthly" | "biannually" | "annually";
  /** The amount on the plans to retrieve */
  amount?: number;
  /** The start date */
  from?: string;
  /** The end date */
  to?: string;
}
