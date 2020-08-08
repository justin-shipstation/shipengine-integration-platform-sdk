import Joi = require("@hapi/joi");

export const MonetaryValueSchema = Joi.object({
  value: Joi.number().required(),
  currency: Joi.number().required()
});
