import { IdentifiersSchema } from "../../common";
import Joi = require("@hapi/joi");


export const PackageIdentifierSchema = Joi.object({
  trackingNumber: Joi.string().required(),
  identifiers: IdentifiersSchema.required()
});
