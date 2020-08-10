import { NoteSchema } from "../../common";
import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import Joi = require("@hapi/joi");

export const NonManifestedShipmentSchema = Joi.object({
  code: Joi.string().optional(),
  description: Joi.string().optional(),
  notes: Joi.array().optional().items(NoteSchema.required())
}).concat(ShipmentIdentifierSchema);
