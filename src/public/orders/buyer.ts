import type { Address, ContactInfo } from "../common";

/**
 * The person who bought a sales order
 */
export interface Buyer extends ContactInfo {
  /**
   * The marketplace's unique ID for the buyer
   */
  id: string;

  address?: Address;
}
