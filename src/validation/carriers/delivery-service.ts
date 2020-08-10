import { CountrySchema, DefinitionIdentifierSchema, DeliveryConfirmationTypeSchema } from "../common";
import { PackagingDefinitionSchema } from "./packaging";
import Joi = require("@hapi/joi");
import { DeliveryServiceClassSchema, DeliveryServiceGradeSchema, ServiceAreaSchema, ManifestTypeSchema, DocumentFormatSchema, DocumentSizeSchema } from "./enums";

export const DeliveryServiceDefinitionSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  class: DeliveryServiceClassSchema.required(),
  grade: DeliveryServiceGradeSchema.required,
  serviceArea: ServiceAreaSchema.optional(),
  isConsolidationService: Joi.boolean().optional(),
  allowsMultiplePackages: Joi.boolean().optional(),
  isInsurable: Joi.boolean().optional(),
  isTrackable: Joi.boolean().optional(),
  manifestType: ManifestTypeSchema.required(),
  supportsReturns: Joi.boolean().optional(),
  hasSandbox: Joi.boolean().optional(),
  labelFormats: Joi.array().optional().items(DocumentFormatSchema.required()),
  labelSizes: Joi.array().optional().items(DocumentSizeSchema.required()),
  originCountries: Joi.array().required().items(CountrySchema).min(1),
  destinationCountries: Joi.array().optional().items(CountrySchema),
  packaging: Joi.array().required().items(PackagingDefinitionSchema),
  deliveryConfirmations: DeliveryConfirmationTypeSchema.optional(),
}).concat(DefinitionIdentifierSchema);
