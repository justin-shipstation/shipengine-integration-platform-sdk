import { CancellationStatusSchema, NoteSchema, UUIDSchema } from "../../common";
import Joi = require("@hapi/joi");

export const PickupCancellationOutcomeSchema = Joi.object({
  cancellationID: UUIDSchema.required(),
  status: CancellationStatusSchema.required(),
  confirmationNumber: Joi.string().optional(),
  code: Joi.string().optional(),
  description: Joi.string().optional(),
  notes: Joi.array().optional().items(NoteSchema),
  metadata: Joi.object().optional()
});
