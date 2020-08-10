import { IdentifiersSchema, NoteSchema } from "../../common";
import { DocumentSchema } from "../documents/document";
import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import Joi = require("@hapi/joi");


export const ManifestSchema = Joi.object({
  id: Joi.string().optional(),
  identifiers: IdentifiersSchema.optional(),
  shipments: Joi.array().required().items(ShipmentIdentifierSchema.required()),
  document: DocumentSchema.optional(),
  notes: Joi.array().optional().items(NoteSchema.required()),
  metadata: Joi.object().optional()
});
