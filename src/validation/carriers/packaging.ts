import { DefinitionIdentifierSchema } from "../common";
import Joi = require("@hapi/joi");

export const PackagingDefinitionSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  requiresWeight: Joi.boolean().optional(),
  requiresDimensions: Joi.boolean().optional()
}).concat(DefinitionIdentifierSchema);
