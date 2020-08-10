import { DocumentFormatSchema, DocumentSizeSchema } from "../enums";
import Joi = require("@hapi/joi");

export const NewLabelSchema = Joi.object({
  format: DocumentFormatSchema.required(),
  size: DocumentSizeSchema.required(),
  referenceFields: Joi.array().required().items(Joi.string().required())
});
