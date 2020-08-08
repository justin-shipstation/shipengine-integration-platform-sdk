import type { DateTimeZone } from "../../common";
import type { ShipmentIdentifier } from "../shipments/shipment-identifier";
import type { PackageTrackingInfo } from "./package-tracking-info";
import type { TrackingEvent } from "./tracking-event";

/**
 * Tracking information about a shipment
 */
export interface TrackingInfo extends ShipmentIdentifier {
  /**
   * The date and time that the shipment is now expected to be delivered.
   * Once the shipment has been delivered, this is the actual delivery date/time.
   */
  deliveryDateTime?: DateTimeZone | Date | string;

  /**
   * The list of packages in the shipment
   */
  packages: PackageTrackingInfo[];

  /**
   * The events and status changes that have occured for this shipment
   */
  events: TrackingEvent[];
}
