import { DocumentSchema } from "./document";
import Joi = require("@hapi/joi");

export const LabelSchema = Joi.object({
  referenceFields: Joi.array().optional().items(Joi.string().required())
}).concat(DocumentSchema);
