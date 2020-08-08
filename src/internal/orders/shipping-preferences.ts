import { DeliveryConfirmationType, ShippingPreferences as ShippingPreferencesPOJO } from "../../public";
import { hideAndFreeze, Joi, MonetaryValue, _internal } from "../common";

export class ShippingPreferences {
  public static [_internal] = {
    label: "shipping preferences",
    schema: Joi.object({
      deliveryConfirmationType: Joi.string().enum(DeliveryConfirmationType),
      containsAlcohol: Joi.boolean(),
      saturdayDelivery: Joi.boolean(),
      insuredValue: MonetaryValue[_internal].schema,
    }),
  };

  public deliveryConfirmationType?: DeliveryConfirmationType;
  public containsAlcohol: boolean;
  public saturdayDelivery: boolean;
  public insuredValue?: MonetaryValue;

  public constructor(pojo: ShippingPreferencesPOJO) {
    this.deliveryConfirmationType = pojo.deliveryConfirmationType;
    this.containsAlcohol = pojo.containsAlcohol || false;
    this.saturdayDelivery = pojo.saturdayDelivery || false;
    this.insuredValue = pojo.insuredValue && new MonetaryValue(pojo.insuredValue);

    // Make this object immutable
    hideAndFreeze(this);
  }
}
