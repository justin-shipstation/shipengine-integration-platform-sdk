import type { PackagingIdentifier } from "../packaging";

/**
 * The package information for a rate
 */
export interface RatePackage {
  /**
   * The packaging this rate is for
   */
  packaging: PackagingIdentifier | string;

}
