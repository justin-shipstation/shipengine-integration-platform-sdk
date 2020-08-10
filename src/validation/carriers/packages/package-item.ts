import { IdentifiersSchema, MonetaryValueSchema, QuantitySchema } from "../../common";
import { SalesOrderIdentifierSchema, SalesOrderItemIdentifierSchema } from "../../orders";
import { ProductIdentifierSchema } from "../../products";
import Joi = require("@hapi/joi");



export const PackageItemSchema = Joi.object({
  sku: Joi.string().required(),
  identifiers: IdentifiersSchema.required(),
  salesOrder: SalesOrderIdentifierSchema.optional(),
  salesOrderItem: SalesOrderItemIdentifierSchema.optional(),
  product: ProductIdentifierSchema.optional(),
  quantity: QuantitySchema.required(),
  unitPrice: MonetaryValueSchema.required(),
  totalPrice: MonetaryValueSchema.required()
})
