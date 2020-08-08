/**
 * A length measurement unit
 */
export enum LengthUnit {
  Inches = "in",
  Centimeters = "cm"
}

/**
 * The dimensions of a package
 */
export interface DimensionsPOJO {
  length: number;
  width: number;
  height: number;
  unit: LengthUnit;
}

/**
 * The dimensions of a package
 */
export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: LengthUnit;

  /**
   * Returns the dimensions in inches
   */
  toInches(): Dimensions;

  /**
   * Returns the dimensions in centimeters
   */
  toCentimeters(): Dimensions;
}
