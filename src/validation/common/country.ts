import Joi = require("@hapi/joi");
import { Country } from "../../public";

export const CountrySchema = Joi.string().allow(Country);
