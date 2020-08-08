import { IdentifiersSchema } from "./identifiers";
import { UUIDSchema } from "./types";
import Joi = require("@hapi/joi");

export const DefinitionIdentifierSchema = Joi.object({
  id: UUIDSchema,
  identifiers: IdentifiersSchema.optional(),
  code: Joi.string().optional()
});
