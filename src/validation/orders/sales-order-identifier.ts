import { IdentifiersSchema } from "../common";
import Joi = require("@hapi/joi");

export const SalesOrderIdentifierSchema = Joi.object({
  id: Joi.string().required(),
  identifiers: IdentifiersSchema.required()
});
