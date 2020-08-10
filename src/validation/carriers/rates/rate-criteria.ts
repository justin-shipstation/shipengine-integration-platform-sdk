import { AddressWithContactInfoSchema, DateTimeZoneSchema } from "../../common";
import { PackageRateCriteriaSchema } from "./package-rate-criteria";
import { DeliveryConfirmationSchema } from "../delivery-confirmation";
import Joi = require("@hapi/joi");

export const RateCriteriaSchema = Joi.object({
  deliveryService: Joi.string().optional(),
  deliveryConfirmation: DeliveryConfirmationSchema.optional(),
  shipDateTime: DateTimeZoneSchema.required(),
  deliveryDateTime: DateTimeZoneSchema.optional(),
  shipFrom: AddressWithContactInfoSchema.required(),
  shipTo: AddressWithContactInfoSchema.required(),
  returns: Joi.object({ 
    isReturn: Joi.boolean().required()
  }),
  package: PackageRateCriteriaSchema
})
