import type { JSONSchema6 } from "json-schema";
import type { UiSchema } from "react-jsonschema-form";

/**
 * Defines a user-interface form that collects data from the user.
 */
export interface FormDefinition {
  /**
   * A JSON Schema that defines the data collected by the form, including its constraints.
   */
  dataSchema: JSONSchema6;

  /**
   * A UI Schema that defines the appearance of the form.
   */
  uiSchema: UiSchema;
}
