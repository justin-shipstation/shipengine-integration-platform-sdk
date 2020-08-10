import { AddressSchema, ContactInfoSchema, IdentifiersSchema, NoteSchema, TimeRangeSchema, UUIDSchema } from "../../common";
import { PickupCancellationReasonSchema } from "../enums";
import { PickupShipmentSchema } from "./pickup-shipment";
import Joi = require("@hapi/joi");

export const PickupCancellationSchema = Joi.object({
  cancellationID: UUIDSchema.required(),
  id: Joi.string().required(),
  identifiers: IdentifiersSchema.required(),
  pickupService: Joi.string().required(),
  reason: PickupCancellationReasonSchema.required(),
  notes: Joi.array().required().items(NoteSchema.required()),
  address: AddressSchema.required(),
  contact: ContactInfoSchema.required(),
  timeWindows: Joi.array().required().min(1).items(TimeRangeSchema.required()),
  shipments: Joi.array().required().items(PickupShipmentSchema.required()),
  metadata: Joi.object().required()
});
