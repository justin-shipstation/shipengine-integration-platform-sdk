import { AddressSchema, DateTimeZoneSchema } from "../../common";
import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import Joi = require("@hapi/joi");

export const NewManifestSchema = Joi.object({
  shipFrom: AddressSchema.optional(),
  openDateTime: DateTimeZoneSchema.required(),
  closeDateTime: DateTimeZoneSchema.required(),
  shipments: Joi.array().required().items(ShipmentIdentifierSchema.required())
});
