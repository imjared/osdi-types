interface profile {
  /**
   * The provider name of the profile.Example: “Facebook”
   */
  provider?:	string;
  
  /**
   * The unique identifier provided by the provider for the profile.Example: “135165”
   */
  id?:	string;
  
  /**
   * The URL to the person’s web viewable profile.Example: “http://facebook.com/john.doe”
   */
  url?:	string;
  
  /**
   * The handle name of the profile.Twitter handles should not include the “@” Example: “johndoe”
   */
  handle?:	string;
}

interface parties {
  /**
   * One of “None”, “Democratic”, “Republican”, “Independent”, or another free - form string.
   */
  identification?:	string;

  /**
   * A value representing the last verified date of the party registration.
   */
  last_verified_date?:	string;
  
  /**
   * Whether or not this party registration is active for the affiliated person.
   */
  active?:	boolean;
}

interface location {
  latitude: number;
  longitude: number;

  /**
   * A value representing the accuracy of the geocode. One of “Rooftop” or “Approximate”.
   */
  accuracy: "Rooftop" | "Approximate";
}

interface postalAddress {
  /**
   * Denotes if this is the primary address. A person can have only one primary address.
   */
  primary: boolean;
  
  /**
   * The type of address. One of “Home”, “Work”, or “Mailing”.
   */ 
  address_type: "Home" | "Work" | "Mailing";
  
  /**
   * Optional venue name at the address, useful for names of buildings. (ex: Smith Hall)
   */
  venue: string;
  
  /**
   * An array of strings representing the person’s street address.
   */
  address_lines: string[];
  
  /**
   * A city or other local administrative area.
   */
  locality: string;
  
  /**
   * State or subdivision codes according to ISO 3166-2 (Final 2 alpha digits).
   */
  region: string;
  
  /**
   * The region specific postal code, such as a zip code.
   */
  postal_code: string;
  
  /**
   * The country code according to ISO 3166-1 Alpha-2.
   */
  country: string;
  
  /**
   * Language in which the address is recorded – language code according to ISO 639.
   */
  language: string;
  
  /**
   * An object hash representing the geocoded location information for the address.
   */
  location: location;
  
  /**
   * A value representing the status of the address. One of “Potential”, “Verified”, “Bad”, or “Past”.
   */
  status: "Potential" | "Verified" | "Bad" | "Past";
  
  /**
   * A value representing the last verified date of the address.
   */
  last_verified_date: Date;

  occupation: string;
}

interface employerAddress {
  /**
   * Optional venue name at the employer address, useful for names of buildings. (ex: Smith Hall)
   */
  venue: string;

  /**
   * An array of strings representing the employer’s street address.
   */
  address_lines: string[];

  /**
   * A city or other local administrative area.
   */
  locality: string;

  /**
   * State or subdivision codes according to ISO 3166-2 (Final 2 alpha digits).
   */
  region: string;

  /**
   * The region specific postal code, such as a zip code.
   */
  postal_code: string;

  /**
   * The country code according to ISO 3166-1 Alpha-2.
   */
  country: string;

  /**
   * Language in which the address is recorded – language code according to ISO 639.
   */
  language: string;

  /**
   * An object hash representing the geocoded location information for the address.
   */
  location: location;

  /**
   * A value representing the status of the address. One of “Potential”, “Verified”, or “Bad”.
   */
  status: "Potential" | "Verified" | "Bad";
}

interface phoneNumber {
  /**
   * Denotes if this is the primary phone number. A person can have only one primary number.
   */
  primary: string;

  /**
   * The phone number of the person. Must include country code and must be numeric characters only.
   */
  number:  string;

  /**
   * An optional associated extension for the phone number.
   */
  extension: string;

  /**
   * A freeform description of the phone number.
   */
  description: string;

  /**
   * The type of phone number. One of “Home”, “Work”, “Mobile”, “Other”, “Daytime”, “Evening”, “Fax”, or another value.
   */
  number_type: string;

  /**
   * The operator or carrier associated with the number. Example: “Verizon”
   */
  operator:  string;

  /**
   * The country code according to ISO 3166-1 Alpha-2.
   */
  country: string;

  /**
   * True if the number can accept SMS text messages.
   */
  sms_capable: boolean;

  /**
   * True if this number is registered on the US FCC Do Not Call Registry.
   */
  do_not_call: boolean;
}

interface emailAddress {
  /**
   * Denotes if this is the primary address. A person can have only one primary address.
   */
  primary: boolean;

  /**
   * The email address for the person.
   */
  address: string;

  /**
   * The type of email address. One of “personal”, “work”, “other”, or another value.
   */
  address_type: string;

  /**
   * Indicates whether this email address is subscribed to receive emails in the system,
   * either on one or more email lists. One of “subscribed”, “unsubscribed”, “bouncing”, “spam complaints”.
   */
  status: string;
}

interface birthdate {
  month: number;
  day: number;

  /**
   * An integer representing the 4 digit year of the birth date of the person.
   */
  year: number;
}

interface Person {
  /**
   * The person’s last name.
   */
  family_name: string;

  /**
   * The person’s first name.
   */
  given_name: string;

  /**
   * An additional name not included in family or given. Usually a middle name.
   */
  additional_name: string

  /**
   * An honorific prefix like “Dr”, “Mr”, “Mx” etc…
   */
  honorific_prefix: string;

  /**
   * An honorific suffix like “Jr.”, “Ph.D”, etc…
   */
  honorific_suffix: string;

  /**
   * The gender binary with which a person most closely identifies, or “Other” 
   * if the person identifies with neither. One of “Female”, “Male”, or “Other”.
   */
  gender: "Female" | "Male" | "Other";

  /**
   * The self-described gender with which a person identifies.
   * While this field is free-form, data should still follow standardized forms 
   * whenever possible (i.e. use “Female” and not “female” or “F”). Examples: 
   * If a person self-identifies as “Female”, both gender and gender_identity 
   * fields should have a value of “Female”. If a person self-identifies as 
   * “Transgender Female”, gender should have a value of “Female” and 
   * gender_identity should have a value of “Transgender Female”.
   */
  gender_identity: string;

  /**
   * An array of gender identities
   */
  additional_gender_identities: string[]

  /**
   * An object hash representing the persons desired gender pronouns
   */
  gender_pronouns: {
    
    /**
     * A string representing the subject(nominative) pronoun.One of “She”, “He”, “They” or another value
     */
    subject: string;

    /**
     * A string representing the object (oblique) pronoun. One of “Her”, “Him”, “Them” or another value
     */
    object: string;

    /**
     * A string representing the posessive pronoun.One of “Hers”, “His”, “Theirs” or another value
     */
    posessive: string;
  }

  /**
   * Flexenum describing the person’s political party identification. 
   * One of “None”, “Democratic”, “Republican”, “Independent”, or another free-form string.
   */
  party_identification: string;

  /**
   * An array of all party object hashes associated with the person(past and present).
   */
  parties: parties[];

  /**
   * Information about the source where this person record was acquired. Example: “facebook-ad-october”
   */
  source: string;

  /**
   * A unique string array representing a person’s ethnicities.
   */
  ethnicities: string[];

  /**
   * Unique string array of RFC5646 tags representing the languages spoken by the person. 
   * Example: en, en-US, fr-CA, pt-BR
   */
  languages_spoken: string[];

  /**
   * The RFC5646 tag representing the person’s preferred language.
   */
  preferred_language: string;

  /**
   * A URL string pointing to the publicly available person page on the web, such as a public profile page.
   */
  browser_url: string;

  /**
   * A URL string pointing to the person’s administrative page on the web, 
   * such as a page for managing this person’s record.
   */
  administrative_url: string;

  /**
   * An object hash representing the birthdate of the person.
   */
  birthdate: birthdate;

  /**
   * The name of the person’s employer.
   */
  employer: string;

  /**
   * The person’s job title at work, eg ‘Developer’, ‘Field Director’, ‘Minion’
   */
  work_title: string;

  /**
   * The department the person works in, eg ‘Engineering’, ‘OSDI Fire Department’
   */
  work_department: string;

  /**
   * An object hash representing the postal address of the person’s employer.
   */
  employer_address: employerAddress;

  /**
   * An array of postal address object hashes associated with the person.
   */
  postal_addresses: postalAddress[];

  /**
   * An array of email address object hashes associated with the person.
   */
  email_addresses: emailAddress[];

  /**
   * An array of phone number object hashes associated with the person.
   */
  phone_numbers: phoneNumber[];

  /**
   * An array of profile object hashes for online services related to the person.
   */
  profiles: profile[]

  /**
   * An object hash of key/value pairs associated with the person created by a user rather than a service or vendor.
   */
  custom_fields: {
    [key: string]: string;
  }
}