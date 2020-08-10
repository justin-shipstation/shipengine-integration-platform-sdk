import { DefinitionIdentifierSchema, DeliveryConfirmationTypeSchema } from "../common";
import Joi = require("@hapi/joi");

export const DeliveryConfirmationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  type: DeliveryConfirmationTypeSchema.required()
}).concat(DefinitionIdentifierSchema);
