import { DimensionsSchema, MonetaryValueSchema, WeightSchema } from "../../common";
import Joi = require("@hapi/joi");


export const PackageRateCriteriaSchema = Joi.object({
  packaging: Joi.array().required().items(Joi.string()),
  dimensions: DimensionsSchema.optional(),
  weight: WeightSchema.optional(),
  insuredValue: MonetaryValueSchema.optional(),
  containsAlcohol: Joi.boolean(),
  isNonMachinable: Joi.boolean()
});
