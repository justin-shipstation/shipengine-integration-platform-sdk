import { ChargeSchema, DateTimeZoneSchema } from "../../common";
import { DocumentSchema } from "../documents/document";
import { LabelSchema } from "../documents/label";
import { PackageConfirmationSchema } from "../packages/package-confirmation";
import { ShipmentIdentifierSchema } from "./shipment-identifier";
import Joi = require("@hapi/joi");

export const ShipmentConfirmationSchema = Joi.object({
  label: LabelSchema.required(),
  form: DocumentSchema.optional(),
  deliveryDateTime: Joi.optional().allow(Joi.date(), Joi.string(), DateTimeZoneSchema),
  charges: Joi.array().required().items(ChargeSchema),
  packages: Joi.array().required().items(PackageConfirmationSchema)
}).concat(ShipmentIdentifierSchema);
