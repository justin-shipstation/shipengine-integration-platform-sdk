
import { PackageIdentifierSchema } from "./package-identifier";
import Joi = require("@hapi/joi");

export const PackageConfirmationSchema = Joi.object({
  metadata: Joi.object().optional()
}).concat(PackageIdentifierSchema);
