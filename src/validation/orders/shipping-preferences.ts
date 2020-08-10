import type { DeliveryConfirmationType, MonetaryValue } from "../common";



export interface ShippingPreferences {
  
  deliveryConfirmationType?: DeliveryConfirmationType;

  
  containsAlcohol?: boolean;

  
  saturdayDelivery?: boolean;

  
  insuredValue?: MonetaryValue;
}
