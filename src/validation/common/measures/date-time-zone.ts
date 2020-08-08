import Joi = require("@hapi/joi");

export const DateTimeZoneSchema = Joi.object({
  value: Joi.string().required(),
  timeZone: Joi.string().required()
});
