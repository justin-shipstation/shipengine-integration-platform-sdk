import { UUIDSchema } from "../../common";
import { ShipmentIdentifierSchema } from "./shipment-identifier";
import Joi = require("@hapi/joi");

export const ShipmentCancellationSchema = Joi.object({
  cancellationID: UUIDSchema.required(),
  metadata: Joi.object().required()
}).concat(ShipmentIdentifierSchema);
