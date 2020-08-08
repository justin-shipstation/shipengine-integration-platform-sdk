/**
 * A UUID string
 */
export type UUID = string;

/**
 * A URL string
 */
export type URLString = string;

/**
 * Path to JSON or YAML file containing the definition of a ShipEngine Integration Platform app
 */
export type FilePath = string;

/**
 * A JavaScript module that is dynamically imported via `import()`
 */
export type DynamicImport<T> = Promise<EcmaScriptModule<T>>;

/**
 * An ECMAScript module
 */
export interface EcmaScriptModule<T = unknown> {
  default: T;
  [key: string]: unknown;
}
