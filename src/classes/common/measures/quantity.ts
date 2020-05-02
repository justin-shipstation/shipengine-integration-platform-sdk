import { QuantityUnit } from "../../../enums";
import { QuantityPOJO } from "../../../pojos/common";
import { Joi } from "../../../validation";
import { hideAndFreeze, _internal } from "../../utils";

/**
 * The quantity of items in a package
 */
export class Quantity {
  //#region Private/Internal Fields

  /** @internal */
  public static readonly [_internal] = {
    label: "quantity",
    schema: Joi.object({
      value: Joi.number().integer().min(1).required(),
      unit: Joi.string().enum(QuantityUnit).required(),
    }),
  };

  //#endregion
  //#region Public Fields

  public readonly value: number;
  public readonly unit: QuantityUnit;

  //#endregion

  public constructor(pojo: QuantityPOJO) {
    this.value = pojo.value;
    this.unit = pojo.unit;

    // Make this object immutable
    hideAndFreeze(this);
  }
}

// Prevent modifications to the class
hideAndFreeze(Quantity);