import Joi = require("@hapi/joi");

export const IdentifiersSchema  = Joi.object().pattern(/.*/, [Joi.string()]);
