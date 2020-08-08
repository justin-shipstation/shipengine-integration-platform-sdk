import { Rate as RatePOJO } from "../../../public";
import { App, calculateTotalCharges, Charge, DateTimeZone, DefinitionIdentifier, hideAndFreeze, Joi, MonetaryValue, Note, _internal } from "../../common";
import { DeliveryService } from "../delivery-service";
import { RatePackage } from "./rate-package";
import { DeliveryConfirmation } from "../delivery-confirmation";

export class Rate {
  public static [_internal] = {
    label: "rate",
    schema: Joi.object({
      deliveryService: Joi.alternatives(
        DefinitionIdentifier[_internal].schema.unknown(true),
        Joi.string()
      ).required(),
      shipDateTime: DateTimeZone[_internal].schema,
      deliveryDateTime: DateTimeZone[_internal].schema,
      isNegotiatedRate: Joi.boolean(),
      isTrackable: Joi.boolean(),
      charges: Joi.array().min(1).items(Charge[_internal].schema).required(),
      notes: Note[_internal].notesSchema,
      package: RatePackage[_internal].schema.required(),
      deliveryConfirmation: Joi.alternatives(
        DefinitionIdentifier[_internal].schema.unknown(true),
        Joi.string()
      )
    }),
  };

  public deliveryService: DeliveryService;
  public shipDateTime?: DateTimeZone;
  public deliveryDateTime?: DateTimeZone;
  public isNegotiatedRate: boolean;
  public isTrackable: boolean;
  public charges: Charge[];
  public totalAmount: MonetaryValue;
  public notes: Note[];
  public package: RatePackage;
  public deliveryConfirmation?: DeliveryConfirmation;

  public constructor(pojo: RatePOJO, app: App) {
    this.deliveryService = app[_internal].references.lookup(pojo.deliveryService, DeliveryService);
    this.shipDateTime = pojo.shipDateTime ? new DateTimeZone(pojo.shipDateTime) : undefined;
    this.deliveryDateTime = pojo.deliveryDateTime ? new DateTimeZone(pojo.deliveryDateTime) : undefined;
    this.isNegotiatedRate = pojo.isNegotiatedRate || false;
    this.isTrackable = pojo.isTrackable || false;
    this.charges = pojo.charges.map((charge) => new Charge(charge));
    this.totalAmount = calculateTotalCharges(this.charges);
    this.notes = pojo.notes || [];
    this.package = new RatePackage(pojo.package, app);
    this.deliveryConfirmation =
      app[_internal].references.lookup(pojo.deliveryConfirmation, DeliveryConfirmation);

    // Make this object immutable
    hideAndFreeze(this);
  }
}
