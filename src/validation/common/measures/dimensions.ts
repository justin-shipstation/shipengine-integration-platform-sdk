import { LengthUnit } from "../../../public";
import Joi = require("@hapi/joi");

export const DimensionsSchema = Joi.object({
  length: Joi.number().required(),
  width: Joi.number().required(),
  height: Joi.number().required(),
  unit: Joi.string().required().allow(LengthUnit)
});
