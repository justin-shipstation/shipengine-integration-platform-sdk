import Joi = require("@hapi/joi");

export const FormDefinitionSchema = Joi.object({
  dataSchema: Joi.object().required(),
  uiSchema: Joi.object().required()
});
