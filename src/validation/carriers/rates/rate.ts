import type { Charge, DateTimeZone, Note } from "../../common";
import type { RatePackage } from "./rate-package";
import type { DeliveryConfirmationIdentifier } from "../delivery-confirmation";

/**
 * A quoted shipping rate based on the specified rate criteria
 */
export interface Rate {
  /**
   * The delivery service this rate is for
   */
  deliveryService: string;

  /**
   * The date/time that the package is expected to ship.
   * This is not guaranteed to be in the future.
   */
  shipDateTime?: DateTimeZone | Date | string;

  /**
   * The estimated date and time the shipment will be delivered
   */
  deliveryDateTime?: DateTimeZone | Date | string;

  /**
   * Indicates whether this rate is based on pre-negotiated terms
   */
  isNegotiatedRate?: boolean;

  /**
   * Indicates whether tracking numbers are provided
   */
  isTrackable?: boolean;

  /**
   * The breakdown of charges for this rate.
   * If the carrier does not provide a detailed breakdown, then just use a single
   * charge of type "shipping".
   */
  charges: Charge[];

  /**
   * Human-readable information regarding this rate quote, such as limitations or restrictions
   */
  notes?: Note[];

  /**
   * Package in the shipment
   */
  package: RatePackage;

  /**
   * The delivery confirmation included in this rate
   */
  deliveryConfirmation?: DeliveryConfirmationIdentifier | string;
}
