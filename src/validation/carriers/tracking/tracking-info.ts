import { DateTimeZoneSchema } from "../../common";
import { ShipmentIdentifierSchema } from "../shipments/shipment-identifier";
import { PackageTrackingInfoSchema } from "./package-tracking-info";
import { TrackingEventSchema } from "./tracking-event";
import Joi = require("@hapi/joi");

export const TrackingInfoSchema = Joi.object({
  deliveryDateTime: DateTimeZoneSchema.optional(),
  packages: Joi.array().required().items(PackageTrackingInfoSchema),
  events: Joi.array().required().items(TrackingEventSchema)
}).concat(ShipmentIdentifierSchema);
