import { DateTimeZoneSchema } from "./date-time-zone";
import Joi = require("@hapi/joi");

export const TimeRangeSchema = Joi.object({
  startDateTime: DateTimeZoneSchema,
  endDateTime: DateTimeZoneSchema
});
