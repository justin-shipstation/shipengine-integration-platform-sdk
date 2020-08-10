import { CountrySchema, MonetaryValueSchema, QuantitySchema } from "../../common";
import { CustomsItemTypeSchema } from "../enums";
import Joi = require("@hapi/joi");

export const CustomsItemSchema = Joi.object({
  type: CustomsItemTypeSchema,
  sku: Joi.string().optional(),
  description: Joi.string().optional(),
  quantity: QuantitySchema.required(),
  unitValue: MonetaryValueSchema.required(),
  countryOfOrigin: CountrySchema.optional(),
  countryOfManufacture: CountrySchema.optional(),
  harmonizedTariffCode: Joi.string().optional(),
});
