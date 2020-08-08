import { ShipmentConfirmation as ShipmentConfirmationPOJO } from "../../../public";
import { calculateTotalCharges, Charge, DateTimeZone, hideAndFreeze, Joi, MonetaryValue, _internal } from "../../common";
import { Document } from "../documents/document";
import { Label } from "../documents/label";
import { PackageConfirmation } from "../packages/package-confirmation";
import { ShipmentIdentifier, ShipmentIdentifierBase } from "./shipment-identifier";

export class ShipmentConfirmation extends ShipmentIdentifierBase {
  public static [_internal] = {
    label: "shipment",
    schema: ShipmentIdentifier[_internal].schema.keys({
      label: Label[_internal].schema.required(),
      form: Document[_internal].schema,
      deliveryDateTime: DateTimeZone[_internal].schema,
      charges: Joi.array().min(1).items(Charge[_internal].schema).required(),
      packages: Joi.array().min(1).items(PackageConfirmation[_internal].schema).required(),
    }),
  };

  public label: Label;
  public form?: Document;
  public deliveryDateTime?: DateTimeZone;
  public charges: Charge[];
  public totalAmount: MonetaryValue;
  public packages: PackageConfirmation[];

  public get isTrackable(): boolean {
    return Boolean(this.trackingNumber);
  }

  public get package(): PackageConfirmation {
    return this.packages[0];
  }

  public constructor(pojo: ShipmentConfirmationPOJO) {
    super(pojo);

    this.deliveryDateTime = pojo.deliveryDateTime ? new DateTimeZone(pojo.deliveryDateTime) : undefined;
    this.charges = pojo.charges.map((charge) => new Charge(charge));
    this.totalAmount = calculateTotalCharges(this.charges);
    this.packages = pojo.packages.map((parcel) => new PackageConfirmation(parcel));

    this.label = new Label(pojo.label);

    this.form = pojo.form && new Document(pojo.form);

    // Make this object immutable
    hideAndFreeze(this);
  }
}
