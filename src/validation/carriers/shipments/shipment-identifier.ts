import { IdentifiersSchema } from "../../common";
import Joi = require("@hapi/joi");


export const ShipmentIdentifierSchema = Joi.object({
  trackingNumber: Joi.string().required(),
  identifiers: IdentifiersSchema.required()
});
