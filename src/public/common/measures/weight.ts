/**
 * A weight measurement unit
 */
export enum WeightUnit {
  Grams = "g",
  Ounces = "oz",
  Kilograms = "kg",
  Pounds = "lb"
}

/**
 * The weight of a package
 */
export interface WeightPOJO {
  value: number;
  unit: WeightUnit;
}

/**
 * The weight of a package
 */
export interface Weight {
  value: number;
  unit: WeightUnit;

  /**
   * The weight in ounces
   */
  ounces: number;

  /**
   * The weight in grams
   */
  grams: number;

  /**
   * Returns the weight in ounces
   */
  toOunces(): Weight;

  /**
   * Returns the weight in grams
   */
  toGrams(): Weight;
}
