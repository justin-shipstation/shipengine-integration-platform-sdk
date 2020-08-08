import { NoteTypeSchema } from "./enums";
import Joi = require("@hapi/joi");

export const NoteSchema = Joi.object({
  type: NoteTypeSchema,
  test: Joi.string().required()
})
