import type { AppDefinition } from "./app";
import { FormDefinitionSchema} from "./form";
import { ConnectSchema } from "./methods";
import { URLStringSchema } from "./types";
import Joi = require("@hapi/joi");


export const ConnectionAppSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  websiteURL: URLStringSchema,
  logo: Joi.string().required(),
  icon: Joi.string().required(),
  connectionForm: FormDefinitionSchema,
  settingsForm: FormDefinitionSchema,
  connect: ConnectSchema
});
