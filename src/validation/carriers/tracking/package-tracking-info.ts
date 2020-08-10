import { DimensionsSchema, WeightSchema } from "../../common";
import Joi = require("@hapi/joi");

export const PackageTrackingInfoSchema = Joi.object({
  packaging: Joi.string().optional(),
  dimensions: DimensionsSchema.optional(),
  weight: WeightSchema.optional()
});
