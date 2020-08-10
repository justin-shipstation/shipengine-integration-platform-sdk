import { ChargeSchema, DateTimeZoneSchema, NoteSchema } from "../../common";
import { RatePackageSchema } from "./rate-package";
import { DeliveryConfirmationSchema } from "../delivery-confirmation";
import Joi = require("@hapi/joi");


export const RateSchema = Joi.object({
  deliveryService: Joi.string().required(),
  shipDateTime: DateTimeZoneSchema.optional(),
  deliveryDateTime: DateTimeZoneSchema.optional(),
  isNegotiatedRate: Joi.boolean().optional(),
  isTrackable: Joi.boolean().optional(),
  charges: Joi.array().required().items(ChargeSchema),
  notes: Joi.array().optional().items(NoteSchema),
  package: RatePackageSchema.required(),
  deliveryConfirmation: DeliveryConfirmationSchema.optional()
});
