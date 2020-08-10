import { AddressSchema, ContactInfoSchema, NoteSchema, TimeRangeSchema } from "../../common";
import { PickupShipmentSchema } from "./pickup-shipment";
import Joi = require("@hapi/joi");

export const PickupRequestSchema = Joi.object({
  pickupService: Joi.string().required(),
  timeWindow: TimeRangeSchema.required(),
  address: AddressSchema.required(),
  contact: ContactInfoSchema.required(),
  notes: Joi.array().required().items(NoteSchema.required()),
  shipments: Joi.array().required().items(PickupShipmentSchema.required())
});
