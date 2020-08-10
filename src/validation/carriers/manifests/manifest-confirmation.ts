import { ManifestSchema } from "./manifest";
import { NonManifestedShipmentSchema } from "./non-manifested-shipment";
import Joi = require("@hapi/joi");


export const ManifestConfirmationSchema = Joi.object({
  manifests: Joi.array().required().items(ManifestSchema.required()),
  notManifested: Joi.array().optional().items(NonManifestedShipmentSchema.required())
})
