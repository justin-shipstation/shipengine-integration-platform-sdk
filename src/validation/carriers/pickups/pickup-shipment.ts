import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import { PickupPackageSchema } from "./pickup-package";
import Joi = require("@hapi/joi");

export const PickupShipmentSchema = Joi.object({
  deliveryService: Joi.string().required(),
  metadata: Joi.object().required(),
  packages: Joi.array().required().items(PickupPackageSchema.required()),
}).concat(ShipmentIdentifierSchema);
