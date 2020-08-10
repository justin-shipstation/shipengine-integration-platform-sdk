import { NonDeliveryOptionSchema } from "../enums";
import { CustomsItemSchema } from "./customs-item";
import Joi = require("@hapi/joi");

export const CustomsSchema = Joi.object({
  nonDeliveryOption: NonDeliveryOptionSchema.optional(),
  contents: Joi.array().optional().items(CustomsItemSchema.required())
});
