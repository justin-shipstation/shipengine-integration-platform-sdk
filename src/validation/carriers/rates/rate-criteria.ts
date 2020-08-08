import type { AddressWithContactInfo, DateTimeZone } from "../../common";
import type { FulfillmentService } from "../fulfillment-service";
import type { PackageRateCriteria } from "./package-rate-criteria";
import type { DeliveryConfirmation } from "../delivery-confirmation";


/**
 * Specifies the criteria for rate quotes
 */
export interface RateCriteria {
  /**
   * The delivery services that may be used. If neither `deliveryService` nor
   * `fulfillmentService` are specified, then rate quotes should be returned for all
   * applicable services.
   */
  deliveryService?: string;

  /**
   * Well-known carrier services that may be used to fulfill the shipment.
   * If neither `deliveryService` nor `fulfillmentService` are specified, then rate quotes
   * should be returned for all applicable services.
   */
  fulfillmentService?: FulfillmentService;

  /**
   * The delivery confirmation that may be used. If not specified, then rate quotes
   * should be returned for all applicable delivery confirmations.
   */
  deliveryConfirmation?: DeliveryConfirmation;

  /**
   * The date/time that the shipment is expected to ship.
   * This is not guaranteed to be in the future.
   */
  shipDateTime: DateTimeZone;

  /**
   * The latest date and time that the shipment can be delivered
   */
  deliveryDateTime?: DateTimeZone;

  /**
   * The sender's contact info and address
   */
  shipFrom: AddressWithContactInfo;

  /**
   * The recipient's contact info and address
   */
  shipTo: AddressWithContactInfo;

  /**
   * Return shipment details
   */
  returns: {
    /**
     * Indicates whether this is a return shipment
     */
    isReturn: boolean;
  };

  /**
   * The package in the shipment
   */
  package: PackageRateCriteria;

}
