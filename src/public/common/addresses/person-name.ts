/**
 * A person's complete name
 */
export interface PersonNamePOJO {
  title?: string;
  given: string;
  middle?: string;
  family?: string;
  suffix?: string;
}


/**
 * A person's complete name
 */
export interface PersonName {
  title: string;
  given: string;
  middle: string;
  family: string;
  suffix: string;
}
