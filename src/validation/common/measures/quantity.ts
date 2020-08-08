import Joi = require("@hapi/joi");

export const QuantitySchema = Joi.object({
  value: Joi.number().required()
});
