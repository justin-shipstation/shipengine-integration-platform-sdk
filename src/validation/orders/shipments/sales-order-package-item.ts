import type { Quantity } from "../../common";
import type { SalesOrderIdentifier, SalesOrderItemIdentifier } from "../../orders";
import type { ProductIdentifier } from "../../products";


export interface SalesOrderPackageItem {
  
  salesOrder: SalesOrderIdentifier;

  
  salesOrderItem: SalesOrderItemIdentifier;

  
  product?: ProductIdentifier;

  
  quantity: Quantity;
}
