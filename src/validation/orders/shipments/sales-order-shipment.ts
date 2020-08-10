import { ShipmentIdentifier } from "../../carriers";
import type { AddressWithContactInfo, DateTimeZone } from "../../common";
import { SalesOrderPackageItem } from "./sales-order-package-item";



export interface SalesOrderShipment extends ShipmentIdentifier {
  
  trackingURL?: URL;

  
  fulfillmentService?: string;

  
  shipFrom?: AddressWithContactInfo;

  
  shipTo: AddressWithContactInfo;

  
  shipDateTime: DateTimeZone;

  
  contents: SalesOrderPackageItem[];
}
