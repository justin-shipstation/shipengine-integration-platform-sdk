import type { ConnectionAppDefinition } from "../common";
import type { GetSalesOrdersByDate, ShipmentCancelled, ShipmentCreated } from "./methods";



export interface OrderAppDefinition extends ConnectionAppDefinition {
  
  getSalesOrdersByDate?: GetSalesOrdersByDate;

  /**
   * Called when a shipment is created for one or more items in one or more sales orders.
   *
   * A single shipment may contain items from multiple sales orders, and a single sales order
   * may be fulfilled by multiple shipments.
   */
  shipmentCreated?: ShipmentCreated;

  /**
   * Called when a shipment is cancelled for one or more items in one or more sales orders.
   *
   * A single shipment may contain items from multiple sales orders, and a single sales order
   * may be fulfilled by multiple shipments.
   */
  shipmentCancelled?: ShipmentCancelled;


  
  sendMail?: boolean;

  
  canConfigureTimeZone?: boolean;
}
