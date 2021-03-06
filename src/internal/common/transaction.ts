import { Transaction as ITransaction, UUID } from "../../public";
import { hideAndFreeze, _internal } from "./utils";
import { Joi, validate } from "./validation";

const _private = Symbol("private fields");


export interface TransactionPOJO<T extends object = object> {
  id: UUID;
  useSandbox?: boolean;
  session?: T;
}


export class Transaction<T extends object = object> implements ITransaction {
  public static readonly [_internal] = {
    label: "transaction",
    schema: Joi.object({
      id: Joi.string().uuid().required(),
      useSandbox: Joi.boolean(),
      session: Joi.object(),
    }),
  };

  private readonly [_private]: {
    session: T;
  };

  public readonly id: UUID;
  public readonly useSandbox: boolean;

  public get session(): T {
    return this[_private].session;
  }

  public set session(value: T) {
    if (value === undefined) {
      value = {} as unknown as T;
    }

    validate(value, "session data", Joi.object());

    let session = this[_private].session as Record<string, unknown>;
    let keys = Object.getOwnPropertyNames(session).concat(Object.getOwnPropertyNames(value));

    for (let key of keys) {
      if (key in value) {
        session[key] = (value as Record<string, unknown>)[key];
      }
      else {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete session[key];
      }
    }
  }

  public constructor(pojo: TransactionPOJO<T>) {
    this.id = pojo.id;
    this.useSandbox = pojo.useSandbox || false;

    this[_private] = {
      session: pojo.session || {} as unknown as T,
    };

    // Make the session getter/setter look like a normal property
    Object.defineProperty(this, "session", {
      ...Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), "session"),
      enumerable: true,
    });

    // Make this object immutable (except for the session property)
    hideAndFreeze(this, "session");
  }
}
