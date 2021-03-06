import type { Identifiers } from "../common";


/**
 * Identifies a sales order
 */
export interface SalesOrderIdentifierPOJO {
  /**
   * The marketplace's unique ID for the sales order
   */
  id: string;

  /**
   * Your own identifiers for this sales order
   */
  identifiers?: Identifiers;
}


/**
 * Identifies a sales order
 */
export interface SalesOrderIdentifier {
  /**
   * The marketplace's unique ID for the sales order
   */
  readonly id: string;

  /**
   * Your own identifiers for this sales order
   */
  readonly identifiers: Identifiers;
}
