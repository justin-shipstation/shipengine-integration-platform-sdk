import type { Charge, DateTimeZone } from "../../common";
import type { Document } from "../documents/document";
import type { Label } from "../documents/label";
import type { PackageConfirmation } from "../packages/package-confirmation";
import type { ShipmentIdentifier } from "./shipment-identifier";

/**
 * Confirmation that a shipment has been created
 */
export interface ShipmentConfirmation extends ShipmentIdentifier {
  /**
   * Shipment label
   */
  label: Label;

  /**
   * A document that is associated with the shipment, such as a customs form.
   */
  form?: Document;

  /**
   * The estimated date and time the shipment will be delivered
   */
  deliveryDateTime?: DateTimeZone | Date | string;

  /**
   * The breakdown of charges for this shipment.
   * If the carrier does not provide a detailed breakdown, then just use a single
   * charge of type "shipping".
   */
  charges: Charge[];

  /**
   * Confirmation details about each package in the shipment
   */
  packages: PackageConfirmation[];

}
