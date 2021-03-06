import { PaymentMethod, SalesOrder as SalesOrderPOJO, SalesOrderStatus } from "../../public";
import { AddressWithContactInfo, calculateTotalCharges, Charge, DateTimeZone, hideAndFreeze, Joi, MonetaryValue, Note, _internal } from "../common";
import { Buyer } from "./buyer";
import { SalesOrderIdentifier, SalesOrderIdentifierBase } from "./sales-order-identifier";
import { SalesOrderItem } from "./sales-order-item";
import { ShippingPreferences } from "./shipping-preferences";


export class SalesOrder extends SalesOrderIdentifierBase {
  public static readonly [_internal] = {
    label: "sales order",
    schema: SalesOrderIdentifier[_internal].schema.keys({
      createdDateTime: DateTimeZone[_internal].schema.required(),
      status: Joi.string().enum(SalesOrderStatus).required(),
      paymentMethod: Joi.string().enum(PaymentMethod),
      orderURL: Joi.alternatives(Joi.object().website(), Joi.string().website()),
      shipTo: AddressWithContactInfo[_internal].schema.required(),
      buyer: Buyer[_internal].schema.required(),
      shippingPreferences: ShippingPreferences[_internal].schema,
      charges: Joi.array().min(1).items(Charge[_internal].schema),
      items: Joi.array().min(1).items(SalesOrderItem[_internal].schema).required(),
      notes: Note[_internal].notesSchema,
      metadata: Joi.object(),
    }),
  };

  public readonly createdDateTime: DateTimeZone;
  public readonly status: SalesOrderStatus;
  public readonly paymentMethod?: PaymentMethod;
  public readonly orderURL?: URL;
  public readonly shipTo: AddressWithContactInfo;
  public readonly buyer: Buyer;
  public readonly shippingPreferences: ShippingPreferences;
  public readonly charges: readonly Charge[];
  public readonly totalCharges: MonetaryValue;
  public readonly items: readonly SalesOrderItem[];
  public readonly notes: readonly Note[];
  public readonly metadata: object;

  public constructor(pojo: SalesOrderPOJO) {
    super(pojo);

    this.createdDateTime = new DateTimeZone(pojo.createdDateTime);
    this.status = pojo.status;
    this.paymentMethod = pojo.paymentMethod;
    this.orderURL = pojo.orderURL ? new URL(pojo.orderURL as string) : undefined;
    this.shipTo = new AddressWithContactInfo(pojo.shipTo);
    this.buyer = new Buyer(pojo.buyer);
    this.shippingPreferences = new ShippingPreferences(pojo.shippingPreferences || {});
    this.charges = pojo.charges ? pojo.charges.map((charge) => new Charge(charge)) : [];
    this.totalCharges = calculateTotalCharges(this.charges);
    this.items = pojo.items.map((item) => new SalesOrderItem(item));
    this.notes = pojo.notes || [];
    this.metadata = pojo.metadata || {};

    // Make this object immutable
    hideAndFreeze(this);
  }
}
