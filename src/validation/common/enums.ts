import Joi = require("@hapi/joi");
import * as enums from "../../public/common/enums";

export const AppTypeSchema = Joi.string().valid(enums.AppType);
export const CancellationStatusSchema = Joi.string().valid(enums.CancellationStatus);
export const NoteTypeSchema = Joi.string().valid(enums.NoteType);
export const DeliveryConfirmationTypeSchema = Joi.string().valid(enums.DeliveryConfirmationType);
export const ChargeTypeSchema = Joi.string().valid(enums.ChargeType);
