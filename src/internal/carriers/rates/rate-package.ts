import { RatePackage as RatePackagePOJO } from "../../../public";
import { App, DefinitionIdentifier, hideAndFreeze, Joi, _internal } from "../../common";
import { Packaging } from "../packaging";

export class RatePackage {
  public static [_internal] = {
    label: "package",
    schema: Joi.object({
      packaging: Joi.alternatives(
        DefinitionIdentifier[_internal].schema.unknown(true),
        Joi.string()
      ).required()
    }),
  };

  public packaging: Packaging;

  public constructor(pojo: RatePackagePOJO, app: App) {
    this.packaging = app[_internal].references.lookup(pojo.packaging, Packaging);

    // Make this object immutable
    hideAndFreeze(this);
  }
}
