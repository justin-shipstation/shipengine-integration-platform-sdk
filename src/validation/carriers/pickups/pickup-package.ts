import { DimensionsSchema, WeightSchema } from "../../common";
import { PackageIdentifierSchema } from "../packages/package-identifier";
import Joi = require("@hapi/joi");

export const PickupPackageSchema = Joi.object({
  packaging: Joi.string().required(),
  dimensions: DimensionsSchema.optional(),
  weight: WeightSchema.optional(),
  metadata: Joi.object().optional()
}).concat(PackageIdentifierSchema);
