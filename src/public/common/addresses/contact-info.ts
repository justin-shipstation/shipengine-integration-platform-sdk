import type { PersonName, PersonName } from "./person-name";

/**
 * A person's contact information
 */
export interface ContactInfo {
  name: string | PersonName;
  email?: string;
  phoneNumber?: string;
}

/**
 * A person's contact information
 */
export interface ContactInfo {
  name: PersonName;
  email: string;
  phoneNumber: string;
}
