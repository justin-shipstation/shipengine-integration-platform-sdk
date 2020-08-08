import type { DateTimeZone, DateTimeZone } from "./date-time-zone";

/**
 * A range of time
 */
export interface TimeRange {
  /**
   * The start date/time of the range
   */
  startDateTime: DateTimeZone | Date | string;

  /**
   * The end date/time of the range
   */
  endDateTime: DateTimeZone | Date | string;
}


/**
 * A range of time
 */
export interface TimeRange {
  /**
   * The start date/time of the range
   */
  startDateTime: DateTimeZone;

  /**
   * The end date/time of the range
   */
  endDateTime: DateTimeZone;

  /**
   * Returns the time range as a string
   */
  toString(): string;
}
