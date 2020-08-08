import { WeightUnit } from "../../../public";
import Joi = require("@hapi/joi");

export const WeightSchema = Joi.object({
  value: Joi.number().required(),
  unit: Joi.string().valid(WeightUnit)
})
