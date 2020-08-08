import { CountrySchema } from "../country";
import Joi = require("@hapi/joi");

export const AddressSchema = Joi.object({
  company: Joi.string().optional(),
  addressLines: Joi.array().min(1).items(Joi.string().required()),
  cityLocality: Joi.string().required(),
  stateProvince: Joi.string().required(),
  postalCode: Joi.string().required(),
  country: CountrySchema,
  isResidential: Joi.boolean().optional()
})
