import Joi = require("@hapi/joi");

export const CreateShipmentSchema = Joi.function().arity(2);
export const CancelShipmentsSchema = Joi.function().arity(2);
export const RateShipmentSchema = Joi.function().arity(2);
export const TrackShipmentSchema = Joi.function().arity(2);
export const CreateManifestSchema = Joi.function().arity(2);
export const SchedulePickupSchema = Joi.function().arity(2);
export const CancelPickupsSchema = Joi.function().arity(2);
