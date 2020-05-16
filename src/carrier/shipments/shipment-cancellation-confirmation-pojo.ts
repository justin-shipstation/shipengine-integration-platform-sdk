
/**
 * Confirmation that a shipment has been canceled
 */
export interface ShipmentCancellationConfirmationPOJO {
  /**
   * The unique identifier for the shipment. Indicates which shipment this cancellation
   * confirmation is for.
   */
  shipmentID: string;

  /**
   * The carrier's cancellation number, if any
   */
  cancellationNumber?: string;

  /**
   * Indicates whether the cancellation failed or was successful
   */
  isError?: boolean;

  /**
   * The carrier's error code
   */
  errorCode?: string;

  /**
   * The carrier's description of the error code.
   * This description should not be specific to this particular shipment
   */
  errorDescription?: string;

  /**
   * Human-readable information/instructions regarding the cancellation
   * (e.g. "Please call ###-#### to cancel", "Cannot cancel because driver is en-route")
   */
  note?: string;

  /**
   * Arbitrary data about this shipment that will be persisted by the ShipEngine Integration Platform.
   * Must be JSON serializable.
   */
  metadata?: object;
}
