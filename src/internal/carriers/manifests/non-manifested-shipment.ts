import { NonManifestedShipment as NonManifestedShipmentPOJO } from "../../../public";
import { hideAndFreeze, Joi, Note, _internal } from "../../common";
import { ShipmentIdentifier } from "../shipments/shipment-identifier";

export class NonManifestedShipment {
  public static [_internal] = {
    label: "manifest confirmation",
    schema: ShipmentIdentifier[_internal].schema.keys({
      code: Joi.string().trim().singleLine().allow("").max(100),
      description: Joi.string().trim().singleLine().allow("").max(1000),
      notes: Note[_internal].notesSchema,
    }),
  };

  public code: string;
  public description: string;
  public notes: Note[];

  public constructor(pojo: NonManifestedShipmentPOJO) {
    this.code = pojo.code || "";
    this.description = pojo.description || "";
    this.notes = pojo.notes || [];

    // Make this object immutable
    hideAndFreeze(this);
  }
}
