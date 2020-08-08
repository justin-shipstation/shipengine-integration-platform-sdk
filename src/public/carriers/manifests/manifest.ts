import type { Identifiers, Note } from "../../common";
import type { Document } from "../documents/document";
import type { ShipmentIdentifier } from "../shipments/shipment-identifier";

/**
 * An end-of-day manifest
 */
export interface Manifest {
  /**
   * The carrier's manifest ID, if any
   */
  id?: string;

  /**
   * Your own identifiers for this manifest
   */
  identifiers?: Identifiers;

  /**
   * The shipments that are included on this manifest.
   */
  shipments: ShipmentIdentifier[];

  /**
   * The digital manifest document, such as a PDF SCAN form
   */
  document?: Document;

  /**
   * Human-readable information about the manifest
   */
  notes?: Note[];

  /**
   * Arbitrary data about this manifest that will be persisted by the ShipEngine Integration Platform.
   * Must be JSON serializable.
   */
  metadata?: object;
}
