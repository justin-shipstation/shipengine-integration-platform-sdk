import type { Country, Definition, DefinitionIdentifier } from "../common";
import type { DeliveryConfirmation, DeliveryConfirmationDefinition } from "./delivery-confirmation";
import type { DeliveryServiceClass, DeliveryServiceGrade, DocumentFormat, DocumentSize, ManifestType, ServiceArea } from "./enums";
import type { FulfillmentService } from "./fulfillment-service";
import type { Packaging, PackagingDefinition } from "./packaging";

/**
 * A delivery service that is offered by a carrier
 */
export interface DeliveryServiceDefinition extends Definition {
  /**
   * The user-friendly service name (e.g. "Priority Overnight", "2-Day Air")
   */
  name: string;

  /**
   * A short, user-friendly description of the service
   */
  description?: string;

  /**
   * The class of implements Iof service
   */
  class: DeliveryServiceClass;

  /**
   * The grade of service
   */
  grade: DeliveryServiceGrade;

  /**
   * If this service is fulfilled using a well-known third-party carrier, such as UPS, FedEx, DHL, etc.
   * then specify the carrier service here. This will allow more shippers to discover and use your service.
   */
  fulfillmentService?: FulfillmentService;

  /**
   * The service area this service covers
   */
  serviceArea?: ServiceArea;

  /**
   * Indicates whether this service is a consolidation of multiple carrier services
   */
  isConsolidationService?: boolean;

  /**
   * Indicates whether the service allows multiple packages in a single shipment
   */
  allowsMultiplePackages?: boolean;

  /**
   * Indicates whether shippers can purchase insurance from the carrier for this service
   */
  isInsurable?: boolean;

  /**
   * Indicates whether tracking numbers are provided
   */
  isTrackable?: boolean;

  /**
   * Indicates what type of manifests the carrier supports
   */
  manifestType: ManifestType;

  /**
   * Indicates if return shipments are supported
   */
  supportsReturns?: boolean;

  /**
   * Indicates whether the carrier provides a sandbox/development API for this delivery service.
   * A sandbox should mimic real functionality as much as possible but MUST NOT incur any actual
   * costs or affect production data.
   */
  hasSandbox?: boolean;

  /**
   * The label formats that are offered for this service
   */
  labelFormats?: DocumentFormat[];

  /**
   * The label dimensions that are used for this service
   */
  labelSizes?: DocumentSize[];

  /**
   * The countries that can be shipped from using this service
   */
  originCountries: Country[];

  /**
   * The countries that can be shipped to using this service
   */
  destinationCountries: Country[];

  /**
   * The types of packaging that are provided/allowed for this service
   */
  packaging: PackagingDefinition;

  /**
   * The types of package delivery confirmations offered for this service
   */
  deliveryConfirmations?: DeliveryConfirmationDefinition;
}


/**
 * Identifies a delivery service that is offered by a carrier
 */
export type DeliveryServiceIdentifier = DefinitionIdentifier;

/**
 * Identifies a delivery service that is offered by a carrier
 */
export type DeliveryServiceIdentifierPOJO = Definition;


/**
 * A delivery service that is offered by a carrier
 */
export interface DeliveryService extends DeliveryServiceIdentifier {
  /**
   * The user-friendly service name (e.g. "Priority Overnight", "2-Day Air")
   */
  name: string;

  /**
   * A short, user-friendly description of the service
   */
  description: string;

  /**
   * The class of implements Iof service
   */
  class: DeliveryServiceClass;

  /**
   * The grade of service
   */
  grade: DeliveryServiceGrade;

  /**
   * A well-known service that's used to fulfill this delivery service
   */
  fulfillmentService?: FulfillmentService;

  /**
   * The service area this service covers
   */
  serviceArea?: ServiceArea;

  /**
   * Indicates whether this service is a consolidation of multiple carrier services
   */
  isConsolidationService: boolean;

  /**
   * Indicates whether the service allows multiple packages in a single shipment
   */
  allowsMultiplePackages: boolean;

  /**
   * Indicates whether shippers can purchase insurance from the carrier for this service
   */
  isInsurable: boolean;

  /**
   * Indicates whether tracking numbers are provided
   */
  isTrackable: boolean;

  /**
   * Indicates is return shipments are supported
   */
  supportsReturns: boolean;

  /**
   * Indicates what type of manifests the carrier supports
   */
  manifestType: ManifestType;

  /**
   * Indicates whether the carrier provides a sandbox/development API for this delivery service.
   * A sandbox should mimic real functionality as much as possible but MUST NOT incur any actual
   * costs or affect production data.
   */
  hasSandbox: boolean;

  /**
   * The label formats that are offered for this service
   */
  labelFormats: DocumentFormat[];

  /**
   * The label dimensions that are used for this service
   */
  labelSizes: DocumentSize[];

  /**
   * The countries that can be shipped from using this service
   */
  originCountries: Country[];

  /**
   * The countries that can be shipped to using this service
   */
  destinationCountries: Country[];

  /**
   * The types of packaging that are provided/allowed for this service
   */
  packaging: Packaging[];

  /**
   * The types of package delivery confirmations offered for this service
   */
  deliveryConfirmations: DeliveryConfirmation[];

  /**
   * All countries that this service ships to or from.
   * This list includes all unique origin and destination countries.
   */
  countries: Country[];

  /**
   * Indicates whether the weight may be required when using this service.
   * This property is `true` if any of the service's packaging requires weight.
   */
  requiresWeight: boolean;

  /**
   * Indicates whether the dimensions may be required when using this service.
   * This property is `true` if any of the service's packaging requires dimensions.
   */
  requiresDimensions: boolean;
}
