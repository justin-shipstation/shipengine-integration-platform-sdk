import { AddressPOJO, DateTimeZonePOJO, ErrorCode, ManifestLocation, NewManifest as INewManifest, ShipmentIdentifierPOJO } from "../../../public";
import { Address, DateTimeZone, error, hideAndFreeze, Joi, _internal } from "../../common";
import { CarrierApp } from "../carrier-app";
import { ShipmentIdentifier } from "../shipments/shipment-identifier";


export interface NewManifestPOJO {
  shipFrom?: AddressPOJO;
  openDateTime: DateTimeZonePOJO | Date | string;
  closeDateTime: DateTimeZonePOJO | Date | string;
  shipments: ShipmentIdentifierPOJO[];
}


export class NewManifest implements INewManifest {
  public static [_internal] = {
    label: "manifest",
    schema: Joi.object({
      shipFrom: Address[_internal].schema.required(),
      openDateTime: DateTimeZone[_internal].schema.required(),
      closeDateTime: DateTimeZone[_internal].schema.required(),
      shipments: Joi.array().items(ShipmentIdentifier[_internal].schema.unknown(true)).required(),
    }),
  };

  public shipFrom?: Address;
  public openDateTime: DateTimeZone;
  public closeDateTime: DateTimeZone;
  public shipments: ShipmentIdentifier[];

  public constructor(pojo: NewManifestPOJO, carrier: CarrierApp) {
    this.shipFrom = pojo.shipFrom && new Address(pojo.shipFrom);
    this.openDateTime = new DateTimeZone(pojo.openDateTime);
    this.closeDateTime = new DateTimeZone(pojo.closeDateTime);
    this.shipments = pojo.shipments.map((shipment) => new ShipmentIdentifier(shipment));

    switch (carrier.manifestLocations) {
      case ManifestLocation.AllLocations:
        if (pojo.shipFrom) {
          throw error(ErrorCode.Validation,
            `manifest.shipFrom is not allowed because carrier.manifestLocations is ${ManifestLocation.AllLocations}`);
        }
        break;

      case ManifestLocation.SingleLocation:
      default:
        if (!pojo.shipFrom) {
          throw error(ErrorCode.Validation,
            `manifest.shipFrom is required because carrier.manifestLocations is ${ManifestLocation.SingleLocation}`);
        }
    }

    // Make this object immutable
    hideAndFreeze(this);
  }
}
