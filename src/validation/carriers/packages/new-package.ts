import { DimensionsSchema, MonetaryValueSchema, WeightSchema } from "../../common";
import { CustomsSchema } from "../customs/customs";
import { NewLabelSchema } from "../documents/new-label";
import { PackageItemSchema } from "./package-item";
import Joi = require("@hapi/joi");


export const NewPackageSchema = Joi.object({
  packaging: Joi.string().required(),
  dimensionså: DimensionsSchema.optional(),
  weight: WeightSchema.optional(),
  insuredValue: MonetaryValueSchema.required(),
  containsAlcohol: Joi.boolean().required(),
  isNonMachinable: Joi.boolean().required(),
  label: NewLabelSchema.required(),
  customs: CustomsSchema.required(),
  contents: Joi.array().required().items(PackageItemSchema.required())
});
