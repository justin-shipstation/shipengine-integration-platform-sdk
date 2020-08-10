import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import Joi = require("@hapi/joi");

export const TrackingCriteriaSchema = Joi.object({
  returns: Joi.object({
    isReturn: Joi.boolean().required()
  }),
  metadata: Joi.object().required()
}).concat(ShipmentIdentifierSchema);
