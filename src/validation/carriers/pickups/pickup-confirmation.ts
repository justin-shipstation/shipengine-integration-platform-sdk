import { ChargeSchema, IdentifiersSchema, NoteSchema, TimeRangeSchema } from "../../common";
import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import Joi = require("@hapi/joi");


export const PickupConfirmation = Joi.object({
  id: Joi.string().required(),
  identifiers: IdentifiersSchema.optional(),
  timeWindows: Joi.array().required().items(TimeRangeSchema.required()).min(1),
  charges: Joi.array().required().items(ChargeSchema.required()),
  shipments: Joi.array().optional().items(ShipmentIdentifierSchema),
  notes: Joi.array().optional().items(NoteSchema),
  metadata: Joi.object().optional()
});
