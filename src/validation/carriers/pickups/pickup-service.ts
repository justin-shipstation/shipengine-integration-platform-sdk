import { DefinitionIdentifierSchema } from "../../common";
import Joi = require("@hapi/joi");

export const PickupServiceDefinitionSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  hasSandbox: Joi.string().optional()
}).concat(DefinitionIdentifierSchema);
