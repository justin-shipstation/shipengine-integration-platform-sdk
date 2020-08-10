import { SalesOrder } from "./sales-order";
import { SalesOrderPaging } from "./sales-order-time-range";



export interface SalesOrderArray extends Array<SalesOrder> {
  paging?: SalesOrderPaging;
}
