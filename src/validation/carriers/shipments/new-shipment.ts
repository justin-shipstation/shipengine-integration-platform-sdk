import { AddressWithContactInfoSchema, DateTimeZoneSchema, MonetaryValueSchema } from "../../common";
import { NewPackageSchema } from "../packages/new-package";
import { DeliveryConfirmationSchema } from "../delivery-confirmation";
import Joi = require("@hapi/joi");


export const NewShipmentSchema = Joi.object({
  deliveryService: Joi.string().required(),
  shipFrom: AddressWithContactInfoSchema.required(),
  shipTo: AddressWithContactInfoSchema.required(),
  returnTo: AddressWithContactInfoSchema.required(),
  shipDateTime: DateTimeZoneSchema.required(),
  totalInsuredValue: MonetaryValueSchema.required(),
  isNonMachinable: Joi.boolean().required(),
  returns: Joi.object({
    isReturn: Joi.boolean().required(),
    rmaNumber: Joi.string().required()
  }),
  packages: Joi.array().required().items(NewPackageSchema.required()),
  deliveryConfirmation: DeliveryConfirmationSchema.optional()
});
