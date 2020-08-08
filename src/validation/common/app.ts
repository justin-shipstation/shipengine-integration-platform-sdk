import { UUIDSchema } from "./types";
import Joi = require("@hapi/joi");



/**
 * A ShipEngine Integration Platform app
 */
export const AppSchema = Joi.object({
  id: UUIDSchema
});


/**
 * A ShipEngine Integration Platform app manifest (package.json file)
 */
export const AppManifestSchema = Joi.object({
  name: Joi.string().required(),
  version: Joi.string().required(),
  description: Joi.string().required(),
  dependencies: Joi.object().pattern(/.*/, [Joi.string()]),
  devDependencies: Joi.object().pattern(/.*/, [Joi.string()])
});
