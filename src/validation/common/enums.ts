import Joi = require("@hapi/joi");
import * as enums from "../../public/common/enums";

/**
 * The types of ShipEngine Integration Platform apps
 */
export const AppTypeSchema = Joi.string().valid(enums.AppType);

/**
 * The status of a cancellation request
 */
export const CancellationStatusSchema = Joi.string().valid(enums.CancellationStatus);


/**
 * The types of notes that can be returned
 */
export const NoteTypeSchema = Joi.string().valid(enums.NoteType);

/**
 * Types of delivery confirmations
 */
export const DeliveryConfirmationTypeSchema = Joi.string().valid(enums.DeliveryConfirmationType);

/**
 * The types of itemized charges or credits that can be specified
 * for a shipment or sales order
 */
export const ChargeTypeSchema = Joi.string().valid(enums.ChargeType);
