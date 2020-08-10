import { DocumentFormatSchema, DocumentSizeSchema, DocumentTypeSchema } from "../enums";
import Joi = require("@hapi/joi");

export const DocumentSchema = Joi.object({
  name: Joi.string().optional(),
  type: DocumentTypeSchema.required(),
  size: DocumentSizeSchema.required(),
  format: DocumentFormatSchema.required,
  data: Joi.any() // TODO: Check to how to validate Buffers
});
