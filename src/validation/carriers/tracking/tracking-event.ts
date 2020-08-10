import { AddressSchema, DateTimeZoneSchema, NoteSchema } from "../../common";
import { ShipmentStatusSchema } from "../enums";
import Joi = require("@hapi/joi");

export const TrackingEventSchema = Joi.object({
  name: Joi.string().optional(),
  dateTime: DateTimeZoneSchema.required(),
  status: ShipmentStatusSchema.required(),
  isError: Joi.boolean().optional(),
  code: Joi.string().optional(),
  description: Joi.string().optional(),
  address: AddressSchema.optional(),
  signer: Joi.string().optional(),
  notes: Joi.array().optional().items(NoteSchema)
});
