import { ChargeTypeSchema } from "./enums";
import { MonetaryValueSchema } from "./measures/monetary-value";
import Joi = require("@hapi/joi");

export const ChargeSchema = Joi.object({
  name: Joi.string().optional(),
  type: ChargeTypeSchema,
  amount: MonetaryValueSchema
});
