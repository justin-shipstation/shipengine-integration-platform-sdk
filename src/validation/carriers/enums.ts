import Joi = require("@hapi/joi");
import { DeliveryServiceClass, DeliveryServiceGrade, ServiceArea, NonDeliveryOption, CustomsItemType, PickupCancellationReason, ManifestType, BilledParty, ShipmentStatus, DocumentFormat, DocumentSize, ManifestLocation, ManifestShipment } from "../../public";

export const DeliveryServiceClassSchema = Joi.string().allow(DeliveryServiceClass);
export const DeliveryServiceGradeSchema = Joi.string().allow(DeliveryServiceGrade);
export const ServiceAreaSchema = Joi.string().allow(ServiceArea);
export const NonDeliveryOptionSchema = Joi.string().allow(NonDeliveryOption);
export const CustomsItemTypeSchema = Joi.string().allow(CustomsItemType);
export const PickupCancellationReasonSchema = Joi.string().allow(PickupCancellationReason);
export const ManifestTypeSchema = Joi.string().allow(ManifestType);
export const BilledPartySchema = Joi.string().allow(BilledParty);
export const ShipmentStatusSchema = Joi.string().allow(ShipmentStatus);
export const DocumentFormatSchema = Joi.string().allow(DocumentFormat);
export const DocumentSizeSchema = Joi.string().allow(DocumentSize);
export const DocumentTypeSchema = Joi.string().allow(DocumentType);
export const ManifestLocationSchema = Joi.string().allow(ManifestLocation);
export const ManifestShipmentSchema = Joi.string().allow(ManifestShipment);
