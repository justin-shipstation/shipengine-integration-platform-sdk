import Joi = require("@hapi/joi");

export const ContactInfoSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().optional(),
  phoneNumber: Joi.string().optional()
});
