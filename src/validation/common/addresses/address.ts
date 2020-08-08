import type { Country } from "../country";
/**
 * A mailing address
 */
export interface Address {
  company?: string;
  addressLines: string[];
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  country: Country;
  isResidential?: boolean;
}
