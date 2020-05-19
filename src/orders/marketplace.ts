import { ErrorCode, FilePath, LocalizedBrandingPOJO, Transaction, TransactionPOJO, UUID } from "../common";
import { App, error, hideAndFreeze, Joi, Localization, localize, validate, _internal } from "../common/internal";
import { MarketplacePOJO } from "./marketplace-pojo";
import { GetSalesOrder, GetSalesOrdersByDate, GetSeller, ShipmentCancelled, ShipmentCreated } from "./methods";
import { Seller } from "./sellers/seller";
import { SellerIdentifier, SellerIdentifierPOJO } from "./sellers/seller-identifier";

const _private = Symbol("private fields");

/**
 * A marketplace where orders originate
 */
export class Marketplace {
  //#region Private/Internal Fields

  /** @internal */
  public static readonly [_internal] = {
    label: "marketplace",
    schema: Joi.object({
      id: Joi.string().uuid().required(),
      name: Joi.string().trim().singleLine().min(1).max(100).required(),
      description: Joi.string().trim().singleLine().allow("").max(1000),
      websiteURL: Joi.string().website().required(),
      logo: Joi.string().filePath({ ext: ".svg" }).required(),
      localization: Joi.object().localization({
        name: Joi.string().trim().singleLine().allow("").max(100),
        description: Joi.string().trim().singleLine().allow("").max(1000),
        websiteURL: Joi.string().website(),
      }),
      getSeller: Joi.function().required(),
      getSalesOrder: Joi.function().required(),
      getSalesOrdersByDate: Joi.function().required(),
      shipmentCreated: Joi.function(),
      shipmentCancelled: Joi.function(),
    }),
  };

  /** @internal */
  private readonly [_private]: {
    readonly app: App;
    readonly localization: Localization<LocalizedBrandingPOJO>;
    readonly getSeller: GetSeller;
    readonly getSalesOrder: GetSalesOrder;
    readonly getSalesOrdersByDate: GetSalesOrdersByDate;
    readonly shipmentCreated?: ShipmentCreated;
    readonly shipmentCancelled?: ShipmentCancelled;
  };

  //#endregion
  //#region Public Fields

  /**
   * A UUID that uniquely identifies the marketplace.
   * This ID should never change, even if the marketplace name changes.
   */
  public readonly id: UUID;

  /**
   * The user-friendly marketplace name (e.g. "FedEx", "Shopify")
   */
  public readonly name: string;

  /**
   * A short, user-friendly description of the marketplace
   */
  public readonly description: string;

  /**
   * The URL of the third-party service's website
   */
  public readonly websiteURL: URL;

  /**
   * The third party service's logo image
   */
  public readonly logo: FilePath;

  //#endregion

  public constructor(pojo: MarketplacePOJO, app: App) {
    this.id = pojo.id;
    this.name = pojo.name;
    this.description = pojo.description || "";
    this.websiteURL = new URL(pojo.websiteURL);
    this.logo =  pojo.logo;

    this[_private] = {
      app,
      localization: new Localization(pojo.localization || {}),
      getSeller: pojo.getSeller,
      getSalesOrder: pojo.getSalesOrder,
      getSalesOrdersByDate: pojo.getSalesOrdersByDate,
      shipmentCreated: pojo.shipmentCreated,
      shipmentCancelled: pojo.shipmentCancelled,
    };

    // Make this object immutable
    hideAndFreeze(this);

    app[_internal].references.add(this);
  }

  /**
   * Creates a copy of the marketplace, localized for the specified locale if possible.
   */
  public localize(locale: string): Marketplace {
    let pojo = localize(this, locale);
    return new Marketplace(pojo, this[_private].app);
  }

  /**
   * Returns the marketplace as a POJO that can be safely serialized as JSON.
   * Optionally returns the POJO localized to the specifeid language and region.
   */
  public toJSON(locale?: string): MarketplacePOJO {
    let { localization } = this[_private];
    let methods = this[_private];
    let localizedValues = locale ? localization.lookup(locale) : {};

    return {
      ...this,
      websiteURL: this.websiteURL.href,
      getSeller: methods.getSeller,
      getSalesOrder: methods.getSalesOrder,
      getSalesOrdersByDate: methods.getSalesOrdersByDate,
      shipmentCreated: methods.shipmentCreated,
      shipmentCancelled: methods.shipmentCancelled,
      localization: localization.toJSON(),
      ...localizedValues,
    };
  }

  //#region Wrappers around user-defined methdos

  /**
   * Returns detailed information about a seller on the marketplace
   */
  public async getSeller(transaction: TransactionPOJO, id: SellerIdentifierPOJO): Promise<Seller> {
    let _transaction, _id;
    let { getSeller } = this[_private];

    try {
      _transaction = new Transaction(validate(transaction, Transaction));
      _id = new SellerIdentifier(validate(id, SellerIdentifier));
    }
    catch (originalError) {
      throw error(ErrorCode.InvalidInput, "Invalid input to the getSeller method.", { originalError });
    }

    try {
      let seller = await getSeller(_transaction, _id);
      return new Seller(validate(seller, Seller));
    }
    catch (originalError) {
      let transactionID = _transaction.id;
      throw error(ErrorCode.AppError, "Error in the getSeller method.", { originalError, transactionID });
    }
  }

  /**
   * Returns a specific sales order
   */
  public async getSalesOrder(transaction: TransactionPOJO): Promise<void> {
    let _transaction, _arg2;
    let { getSalesOrder } = this[_private];

    try {
      _transaction = new Transaction(validate(transaction, Transaction));
      // _arg2 = new Arg2(validate(_arg2, Arg2));
    }
    catch (originalError) {
      throw error(ErrorCode.InvalidInput, "Invalid input to the getSalesOrder method.", { originalError });
    }

    try {
      await getSalesOrder(_transaction);
    }
    catch (originalError) {
      let transactionID = _transaction.id;
      throw error(ErrorCode.AppError, "Error in the getSalesOrder method.", { originalError, transactionID });
    }
  }

  /**
   * Returns all orders that were created and/or modified within a given timeframe
   */
  public async getSalesOrdersByDate(transaction: TransactionPOJO): Promise<void> {
    let _transaction, _arg2;
    let { getSalesOrdersByDate } = this[_private];

    try {
      _transaction = new Transaction(validate(transaction, Transaction));
      // _arg2 = new Arg2(validate(_arg2, Arg2));
    }
    catch (originalError) {
      throw error(ErrorCode.InvalidInput, "Invalid input to the getSalesOrdersByDate method.", { originalError });
    }

    try {
      await getSalesOrdersByDate(_transaction);
    }
    catch (originalError) {
      let transactionID = _transaction.id;
      throw error(ErrorCode.AppError, "Error in the getSalesOrdersByDate method.", { originalError, transactionID });
    }
  }

  /**
   * Called when a shipment is created for one or more items in one or more sales orders.
   *
   * A single shipment may contain items from multiple sales orders, and a single sales order
   * may be fulfilled by multiple shipments.
   */
  public async shipmentCreated?(transaction: TransactionPOJO): Promise<void> {
    let _transaction, _arg2;
    let { shipmentCreated } = this[_private];

    try {
      _transaction = new Transaction(validate(transaction, Transaction));
      // _arg2 = new Arg2(validate(_arg2, Arg2));
    }
    catch (originalError) {
      throw error(ErrorCode.InvalidInput, "Invalid input to the shipmentCreated method.", { originalError });
    }

    try {
      await shipmentCreated!(_transaction);
    }
    catch (originalError) {
      let transactionID = _transaction.id;
      throw error(ErrorCode.AppError, "Error in the shipmentCreated method.", { originalError, transactionID });
    }
  }

  /**
   * Called when a shipment is cancelled for one or more items in one or more sales orders.
   *
   * A single shipment may contain items from multiple sales orders, and a single sales order
   * may be fulfilled by multiple shipments.
   */
  public async shipmentCancelled?(transaction: TransactionPOJO): Promise<void> {
    let _transaction, _arg2;
    let { shipmentCancelled } = this[_private];

    try {
      _transaction = new Transaction(validate(transaction, Transaction));
      // _arg2 = new Arg2(validate(_arg2, Arg2));
    }
    catch (originalError) {
      throw error(ErrorCode.InvalidInput, "Invalid input to the shipmentCancelled method.", { originalError });
    }

    try {
      await shipmentCancelled!(_transaction);
    }
    catch (originalError) {
      let transactionID = _transaction.id;
      throw error(ErrorCode.AppError, "Error in the shipmentCancelled method.", { originalError, transactionID });
    }
  }

  //#endregion
}

// Prevent modifications to the class
hideAndFreeze(Marketplace);