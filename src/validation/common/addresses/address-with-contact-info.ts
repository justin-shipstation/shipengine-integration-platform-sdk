import { AddressSchema } from "./address";
import { ContactInfoSchema } from "./contact-info";

export const AddressWithContactInfoSchema = AddressSchema.concat(ContactInfoSchema);
