import type { AddressWithContactInfo, Charge, DateTimeZone, Note, URLString } from "../common";
import type { Buyer } from "./buyer";
import type { PaymentMethod, SalesOrderStatus } from "./enums";
import type { SalesOrderIdentifier } from "./sales-order-identifier";
import type { SalesOrderItem } from "./sales-order-item";
import type { ShippingPreferences } from "./shipping-preferences";


export interface SalesOrder extends SalesOrderIdentifier {
  
  createdDateTime: DateTimeZone | Date | string;

  
  status: SalesOrderStatus;

  
  paymentMethod?: PaymentMethod;

  
  orderURL?: URLString | URL;

  
  shipTo: AddressWithContactInfo;

  
  buyer: Buyer;

  
  shippingPreferences?: ShippingPreferences;

  
  charges?: Charge[];

  
  items: SalesOrderItem[];

  
  notes?: Note[];

  
  metadata?: object;
}
