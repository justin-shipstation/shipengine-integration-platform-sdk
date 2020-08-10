import Joi = require("@hapi/joi");

export const RatePackageSchema = Joi.object({
  packaging: Joi.string().required()
});
