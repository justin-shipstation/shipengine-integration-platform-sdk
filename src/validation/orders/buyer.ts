import type { Address, ContactInfo } from "../common";


export interface Buyer extends ContactInfo {
  
  id: string;

  address?: Address;
}
