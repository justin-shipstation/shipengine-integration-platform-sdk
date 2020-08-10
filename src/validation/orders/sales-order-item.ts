import type { MonetaryValue, Note, Quantity, URLString, Weight } from "../common";
import type { ProductIdentifier } from "../products";
import type { SalesOrderItemIdentifier } from "./sales-order-item-identifier";


export interface SalesOrderItem extends SalesOrderItemIdentifier {
  
  name: string;

  
  description?: string;

  
  product: ProductIdentifier;

  
  quantity: Quantity;

  
  unitPrice: MonetaryValue;

  
  unitWeight?: Weight;

  
  itemURL?: URLString | URL;

  
  thumbnailURL?: URLString | URL;

  
  notes?: Note[];

  
  metadata?: object;
}
