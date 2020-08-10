import { IdentifiersSchema } from "../common";
import Joi = require("@hapi/joi");

export const ProductIdentifierSchema = Joi.object({
  id: Joi.string().required(),
  sku: Joi.string().required(),
  identifiers: IdentifiersSchema.required()
});
