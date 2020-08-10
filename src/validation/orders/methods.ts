import type { Transaction } from "../common";
import { SalesOrderArray } from "./sales-order-array";
import type { SalesOrderTimeRange } from "./sales-order-time-range";
import { SalesOrderShipment } from "./shipments/sales-order-shipment";


export type GetSalesOrdersByDate = (transaction: Transaction, range: SalesOrderTimeRange)
=> SalesOrderArray | Promise<SalesOrderArray>;

/**
 * Called when a shipment is created for one or more items in one or more sales orders.
 *
 * A single shipment may contain items from multiple sales orders, and a single sales order
 * may be fulfilled by multiple shipments.
 */
export type ShipmentCreated = (transaction: Transaction, shipment: SalesOrderShipment)
=> void | Promise<void>;

/**
 * Called when a shipment is cancelled for one or more items in one or more sales orders.
 *
 * A single shipment may contain items from multiple sales orders, and a single sales order
 * may be fulfilled by multiple shipments.
 */
export type ShipmentCancelled = (transaction: Transaction, shipment: SalesOrderShipment)
=> void | Promise<void>;
