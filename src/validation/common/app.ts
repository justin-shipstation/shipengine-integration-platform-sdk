import { UUIDSchema } from "./types";
import Joi = require("@hapi/joi");




export const AppSchema = Joi.object({
  id: UUIDSchema
});



export const AppManifestSchema = Joi.object({
  name: Joi.string().required(),
  version: Joi.string().required(),
  description: Joi.string().required(),
  dependencies: Joi.object().pattern(/.*/, [Joi.string()]),
  devDependencies: Joi.object().pattern(/.*/, [Joi.string()])
});
