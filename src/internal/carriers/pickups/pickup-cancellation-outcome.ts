import { CancellationStatus, PickupCancellationOutcome as PickupCancellationOutcomePOJO, UUID } from "../../../public";
import { hideAndFreeze, Joi, Note, _internal } from "../../common";

export class PickupCancellationOutcome {
  public static readonly [_internal] = {
    label: "pickup",
    schema: Joi.object({
      cancellationID: Joi.string().uuid().required(),
      status: Joi.string().enum(CancellationStatus).required(),
      confirmationNumber: Joi.string().trim().singleLine().allow("").max(100),
      code: Joi.string().trim().singleLine().allow("").max(100),
      description: Joi.string().trim().singleLine().allow("").max(1000),
      notes: Note[_internal].notesSchema,
      metadata: Joi.object(),
    }),
  };

  public readonly cancellationID: UUID;
  public readonly status: CancellationStatus;
  public readonly confirmationNumber: string;
  public readonly code: string;
  public readonly description: string;
  public readonly notes: readonly Note[];
  public readonly metadata: object;

  public constructor(pojo: PickupCancellationOutcomePOJO) {
    this.cancellationID = pojo.cancellationID;
    this.status = pojo.status;
    this.confirmationNumber = pojo.confirmationNumber || "";
    this.code = pojo.code || "";
    this.description = pojo.description || "";
    this.notes = pojo.notes || [];
    this.metadata = pojo.metadata || {};

    // Make this object immutable
    hideAndFreeze(this);
  }
}
