import Joi = require("@hapi/joi");

export const UUIDSchema = Joi.string().guid();

export const URLStringSchema = Joi.string().uri();
