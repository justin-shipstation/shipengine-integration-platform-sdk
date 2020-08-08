import Joi = require("@hapi/joi");

export const ConnectSchema = Joi.function()
  .required()
  .arity(2)
  .message('The connect method is required and must contain the transaction and connection form data parameters.');
