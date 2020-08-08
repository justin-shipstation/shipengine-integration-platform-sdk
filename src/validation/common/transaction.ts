import Joi = require("@hapi/joi");
import { UUIDSchema } from "./types";

export const TransactionSchema = Joi.object({
  id: UUIDSchema,
  useSandbox: Joi.boolean().required(),
  session: Joi.object().required()
});
