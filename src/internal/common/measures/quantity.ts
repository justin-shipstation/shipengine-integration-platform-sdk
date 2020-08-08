import { Quantity as IQuantity, QuantityPOJO } from "../../../public";
import { hideAndFreeze, _internal } from "../utils";
import { Joi } from "../validation";

export class Quantity implements IQuantity {
  public static [_internal] = {
    label: "quantity",
    schema: Joi.object({
      value: Joi.number().integer().min(1).required()
    }),
  };

  public value: number;

  public constructor(pojo: QuantityPOJO) {
    this.value = pojo.value;

    // Make this object immutable
    hideAndFreeze(this);
  }
}
