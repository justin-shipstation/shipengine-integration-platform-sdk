import { ConnectionAppSchema, URLStringSchema } from "../common";
import { DeliveryServiceDefinitionSchema } from "./delivery-service";
import { ManifestLocationSchema, ManifestShipmentSchema, ManifestTypeSchema } from "./enums";
import { CancelPickupsSchema, CancelShipmentsSchema, CreateManifestSchema, CreateShipmentSchema, RateShipmentSchema, SchedulePickupSchema, TrackShipmentSchema } from "./methods";
import { PickupServiceDefinitionSchema } from "./pickups/pickup-service";
import Joi = require("@hapi/joi");

Joi.object({
  manifestLocations: ManifestLocationSchema.optional(),
  manifestShipments: ManifestShipmentSchema.optional(),
  manifestType: ManifestTypeSchema.required(),
  trackingURLTemplate: URLStringSchema.optional(),
  deliveryServices: Joi.array().required().items(DeliveryServiceDefinitionSchema.required()).min(1),
  pickupServices: PickupServiceDefinitionSchema,
  createShipment: CreateShipmentSchema.optional(),
  cancelShipments: CancelShipmentsSchema.optional(),
  rateShipment: RateShipmentSchema.optional(),
  trackShipment: TrackShipmentSchema.optional(),
  createManifest: CreateManifestSchema.optional(),
  schedulePickup: SchedulePickupSchema.optional(),
  cancelPickups: CancelPickupsSchema.optional(),
}).concat(ConnectionAppSchema);
