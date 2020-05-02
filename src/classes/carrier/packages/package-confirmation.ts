import { PackageConfirmationPOJO } from "../../../pojos/carrier";
import { CustomData } from "../../common";
import { hideAndFreeze, _internal } from "../../utils";
import { Document } from "../document";
import { PackageIdentifier, packageIdentifierMixin } from "./package-identifier";

/**
 * Confirmation details about a package in a shipment
 */
export class PackageConfirmation extends packageIdentifierMixin() {
  //#region Private/Internal Fields

  /** @internal */
  public static readonly [_internal] = {
    label: "package",
    schema: PackageIdentifier[_internal].schema.keys({
      label: Document[_internal].schema.required(),
      customsForm: Document[_internal].schema,
      customData: CustomData[_internal].schema,
    }),
  };

  //#endregion
  //#region Public Fields

  /**
   * The shipping label for this package
   */
  public readonly label: Document;

  /**
   * The customs form for this package
   */
  public readonly customsForm?: Document;

  /**
   * Arbitrary data that will be persisted by the ShipEngine Integration Platform.
   */
  public readonly customData?: CustomData;

  //#endregion

  public constructor(pojo: PackageConfirmationPOJO) {
    super(pojo);

    this.label = new Document({
      ...pojo.label,
      name: pojo.label.name || "Label"
    });
    this.customsForm = pojo.customsForm && new Document({
      ...pojo.customsForm,
      name: pojo.customsForm.name || "Customs Form",
    });
    this.customData = pojo.customData && new CustomData(pojo.customData);

    // Make this object immutable
    hideAndFreeze(this);
  }
}

// Prevent modifications to the class
hideAndFreeze(PackageConfirmation);