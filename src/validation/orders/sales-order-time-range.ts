import type { TimeRange } from "../common";


export interface SalesOrderTimeRange extends TimeRange {
  paging: Readonly<SalesOrderPaging>;
}

export interface SalesOrderPaging {
  /** The number of items per page */
  pageSize?: number;

  /** The page number */
  pageNumber?: number;

  /** The maximum number of pages */
  pageCount?: number;

  /** Identifies the next page of results to return */
  cursor?: string;
}
