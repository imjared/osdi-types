declare namespace OSDI {
  interface OSDIResource {
    /**
     * A unique string array of identifiers in the format[system name]: [id].See the general concepts document for more information about identifiers.
     */
    identifiers:	string[];

    /**
     * A read - only property representing the date and time the resource was created on the local system.
     */
    created_date:	Date;

    /**
     * A read - only property representing the date and time the resource was last modified on the local system.
     */
    modified_date:	Date;
  }

  interface OSDICollection {
    /**
     * The number of pages applicable to this collection.
     */
    total_pages: number;

    /**
     * The total number of resources matching this collection.
     */
    total_records: number;
    
    /**
     * The page number of this response.
     */
    page: number;
  }

  interface IShareOptions {
    facebook_share: {
      /**
       * The title of the post created when an activist shares content on Facebook.
       */
      title: string;

      /**
       * The description of the post created when an activist shares content on Facebook.
       */
      description: string;

      /**
       * The URL of an image that goes with post created when an activist shares content on Facebook.
       */
      image: string;

      /**
       * A computed property representing the current count of the total number of times the content has been shared on Facebook.
       */
      total_shares: number;

      /**
       * A URL string pointing to the page that is used specifically for Facebook sharing
       */
      share_url: string;
    }

    twitter_share: {
      /**
       * The text of the post created when an activist shares content on Twitter. Some systems may use templating or appends to insert the share_url into the tweet automatically.
       */
      message: string;

      /**
       * A computed property representing the current count of the total number of times the content has been shared on Twitter.
       */
      total_shares: number;

      /**
       * A URL string pointing to the page that is used specifically for Twitter sharing
       */
      share_url: string;
    }

    email_share: {
      /**
       * The subject line of the email created when an activist shares content via email.
       */
      subject: string;

      /**
       * The body text of the email created when an activist shares content via email. Some systems may use templating or appends to insert the share_url into the email body automatically.
       */
      body: string;

      /**
       * A computed property representing the current count of the total number of times content has been shared via email.
       */
      total_shares: number;

      /**
       * A URL string pointing to the page that is used specifically for email sharing
       */
      share_url: string;
    }
  }

  interface IReferrer {
    /**
     * The source code that was used when this donation was created. Typically used to track individual links, such as a post on social media or a link in a specific email. (ex: “facebook-101016-mainpage”)
     */
    source: string;

    /**
     * The code or ID representing a person or group that referred this donation. Typically used to track which person referred the person who made this donation. (ex: “jane-doe”)
     */
    referrer: string;

    /**
     * The top level domain of the website where the person clicked from to then subsequently make this donation. (ex: “facebook.com”)
     */
    website: string;

    /**
     * The specific URL where the person clicked from to then subsequently make this submission. (ex: “https://facebook.com/posts/12345”)
     */
    url: string;
  }

  interface IPhoneNumber {
    /**
     * Denotes if this is the primary phone number. A person can have only one primary number.
     */
    primary: string;

    /**
     * The phone number of the person. Must include country code and must be numeric characters only.
     */
    number: string;

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
    operator: string;

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

  interface IPostalAddress {
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

  interface IEmailAddress {
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

  /**
   * People are individual users who are stored in the OSDI system’s database in some way.
   * People have names, email addresses, and other information, and they have associated action histories recording the actions they’ve taken on the system, such as a list of their signatures on various petitions.
   */
  interface Person extends OSDIResource {
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
    parties: Array<{
      /**
       * One of “None”, “Democratic”, “Republican”, “Independent”, or another free - form string.
       */
      identification?: string;

      /**
       * A value representing the last verified date of the party registration.
       */
      last_verified_date?: string;

      /**
       * Whether or not this party registration is active for the affiliated person.
       */
      active?: boolean;
    }>;

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
    birthdate: {
      month: number;
      day: number;

      /**
       * An integer representing the 4 digit year of the birth date of the person.
       */
      year: number;
    };

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
    employer_address: {
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
      location: {
        latitude: number;
        longitude: number;

        /**
         * A value representing the accuracy of the geocode. One of “Rooftop” or “Approximate”.
         */
        accuracy: "Rooftop" | "Approximate";
      };

      /**
       * A value representing the status of the address. One of “Potential”, “Verified”, or “Bad”.
       */
      status: "Potential" | "Verified" | "Bad";
    };

    /**
     * An array of postal address object hashes associated with the person.
     */
    postal_addresses: IPostalAddress;

    /**
     * An array of email address object hashes associated with the person.
     */
    email_addresses: IEmailAddress[];

    /**
     * An array of phone number object hashes associated with the person.
     */
    phone_numbers: IPhoneNumber[];

    /**
     * An array of profile object hashes for online services related to the person.
     */
    profiles: Array<{
      /**
       * The provider name of the profile.Example: “Facebook”
       */
      provider?: string;

      /**
       * The unique identifier provided by the provider for the profile.Example: “135165”
       */
      id?: string;

      /**
       * The URL to the person’s web viewable profile.Example: “http://facebook.com/john.doe”
       */
      url?: string;

      /**
       * The handle name of the profile.Twitter handles should not include the “@” Example: “johndoe”
       */
      handle?: string;
    }>

    /**
     * An object hash of key/value pairs associated with the person created by a user rather than a service or vendor.
     */
    custom_fields: {
      [key: string]: string;
    }
  }

  /**
   * Donations are a type of action that a user may take by donating on a fundraising page. Donations have fields to describe them such as when the donation was created, the amount that was donated, and typically are linked to the person who made the donation.
   */
  interface Donation extends OSDIResource {
    /**
     * Human readable text identifying the system where this donation was created.
     */
    origin_system: string;

    /**
     * Date the donation was made.
     */
    action_date: Date;

    /**
     * Amount of total donation(after any credits) in specified currency.
     */
    amount: number;

    /**
     * Amount credited back to donor in specified currency.
     */
    credited_amount: number;

    /**
     * Date of the credit.
     */
    credited_date: Date;

    /**
     * ISO 4217 designation of currency.Example: USD, JPY
     */
    currency: string;

    recipients: Array<{
      /**
       * The recipient’s display name.Example: Barack Obama
       */
      display_name: string;

      /**
       * The recipient’s legal name.Example: Obama for America
       */
      legal_name: string;

      /**
       * The amount donated to the recipient.
       */
      amount: number;
    }>

    payment: Array<{
      /**
       * A flexible enumeration of “Credit Card”, “Check”, “Cash”, or “Electronic Funds Transfer”.
       */
      method: "Credit Card" | "Check" | "Cash";

      /**
       * A check number, transaction ID, or some other information referencing the payment.
       */
      reference_number: string;

      /**
       * Indicates if payment information has been stored for future automatic payments.
       */
      authorization_stored: boolean;
    }>;

    /**
     * A sequence number or some other value unique to this instance of the donation in the context of a subscription.Examples: 5, JAN - 2014
     */
    subscription_instance: string;

    /**
     * Indicates if the donation has been voided.
     */
    voided: boolean;

    /**
     * Date of the void.
     */
    voided_date: Date;

    /**
     * URL at which the donation was taken.
     */
    url: string;

    /**
     * An object hash representing referrer and sourcing information about this donation.
     */
    referrer_data: IReferrer;
  }

  /**
   * Wrapper resources represent a some type of standard wrapper around a Message resource. For example a mass email will have HTML that typically adds a standard header and footer to the email message, whereas SMS will have standard from lines and unsubscribe text that will be added, etc… Wrappers have fields to describe them such as HTML headers and footers. Wrappers can be linked by Messages to show which wrapper the message is using.
   */
  interface Wrapper extends OSDIResource {
    /**
     * A human readable identifier of the system where this wrapper was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The name of the wrapper.Intended for administrative display rather than a public title, though may be shown to a user.
     */
    name: string;

    /**
     * The header content of the wrapper.May contain HTML.
     */
    header: string;

    /**
     * The footer content of the wrapper.May contain HTML.
     */
    footer: string;

    /**
     * A URL string pointing to the wrapper’s administrative page on the web.
     */
    administrative_url: string;

    /**
     * The type of wrapper.One of “email” or “sms”.
     */
    wrapper_type: "email" | "sms";

    /**
     * Whether this wrapper is the default wrapper for messages or not.
     */
    default: boolean;

  }

  /**
   * Share pages represent a page on a website that is used to share content (including other pages) with others, chiefly through social media or email. Share pages have fields to describe them such as names, titles, summaries, and descriptions, and have attributes to describe the default language and other attributes that should be used when activists use the page to share content.
   */
  interface SharePage extends OSDIResource {
    /**
     * A human readable identifier of the system where this share page was created. (ex: “OSDI System”)
     */
    origin_system:	string;

    /**
     * The name of the share page.Intended for administrative display rather than a public title, though may be shown to a user.
     */
    name:	string;

    /**
     * The title of the share page.Intended for public display rather than administrative purposes.
     */
    title:	string;

    /**
     * A description of the share page, usually displayed publicly.May contain text and / or HTML.
     */
    description:	string;

    /**
     * A text - only single paragraph summarizing the share page.Shown on listing pages that have more than titles, but not enough room for full description.
     */
    summary:	string;

    /**
     * A URL string pointing to the publicly available share page page on the web.
     */
    browser_url:	string;

    /**
     * A URL string pointing to the share page’s administrative page on the web.
     */
    administrative_url:	string;

    /**
     * A URL string pointing to the page that will be shared when this content is shared. (This may be subsumed by a particular share_option’s share_url)
     */
    share_url:	string;

    /**
     * A computed property representing the current count of the total number of times the content has been shared by activists.
     */
    total_shares:	number;

    share_options: IShareOptions[];
  }
  
  /**
   * Message resources represent a some type of mass communication – a mass email to an email list, an SMS sent to an SMS list, etc… – that is sent or otherwise communicated to to a list of people. Messages have fields to describe them such as names, subjects, bodies, statistics about delivery and engagement, and the like. Messages contain arrays that link to queries or lists representing people who are targeted to receive the message, and link to recipient lists for showing who received the message, and similar metadata. Messages can be one of two types, email or sms, indicating how the message was delivered.
   */
  interface Message extends OSDIResource {
    /**
     * A human readable identifier of the system where this message was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The name of the message. Intended for administrative display rather than a public title, though may be shown to a user.
     */
    name: string;

    /**
     * The subject of the message. (ex: email type messages will put the subject line of the email in this field)
     */
    subject: string;

    /**
     * The content of the message. May contain text and/or HTML. (ex: email type messages will put the HTML content of the email here)
     */
    body: string;

    /**
     * The from line of the message. (ex: email messages can be from “John Doe” or “Progressives United”. SMS messages can be from “202-123-4567”)
     */
    from: string;

    /**
     * The reply to field for the message. (ex: emails may have a reply_to of “info@progressivesunited.org”)
     */
    reply_to: string;

    /**
     * A URL string pointing to the message’s administrative page on the web.
     */
    administrative_url: string;

    /**
     * A URL string pointing to the message’s public page on the web.
     */
    browser_url: string;

    /**
     * The type of message. One of “email” or “sms”.
     */
    type: "email" | "sms";

    /**
     * Array of queries and/or lists representing the people targeted to receive this message.
     */
    targets: Array<{
      /**
       * A link to a Query or List resource representing a group of people targeted to receive this message.
       */
      href: string;
    }>

    sections: Array<{
      /**
       * The text in an incoming response that triggers this section’s auto_reply.
       */
      keyword: string;

      /**
       * The text that is sent back to the person who responded with this section’s keyword.
       */
      auto_reply: string;
    }>

    /**
     * A read-only computed property representing the current count of the total number of people targeted to receive this message.
     */
    total_targeted: number;

    /**
     * Status of the message. Possible values are: “draft”, “calculating”, “scheduled”, “sending”, “stopped”, or “sent”.
     */
    status: "draft" | "calculating" | "scheduled" | "sending" | "stopped" | "sent";

    /**
     * The date and time the message is scheduled to start sending to targets.
     */
    scheduled_start_date: Date;

    /**
     * The date and time the message is scheduled to stop sending to targets.
     */
    scheduled_end_date: Date;

    /**
     * The date and time the message started sending.
     */
    sent_start_date: Date;

    /**
     * The date and time the message finished sending.
     */
    sent_end_date: Date;

    /**
     * The hour of the day messages should start sending. (ex: SMS campaigns may only be sent during certain hours of the day)
     */
    daily_start_hour: number;

    /**
     * The hour of the day messages should stop sending. (ex: SMS campaigns may only be sent during certain hours of the day)
     */
    daily_stop_hour: number;
  
    /**
     * An object hash representing the engagement statistics for this message. (ex: open rate and unsubscribe rate)
     */
    statistics: {
      /**
       * A read-only computed property representing the total number of messages sent.
       */
      sent: number;

      /**
       * A read-only computed property representing the messages that were delivered to the recipients. You may have Email and SMS systems that confirm the delivery of message to recipient email or mobile numbers, ‘delivered’ is used in such scenarios.
       */
      delivered: number;

      /**
       * A read-only computed property representing the total number of messages opened.
       */
      opened: number;

      /**
       * A read-only computed property representing the total number of messages where a link was clicked.
       */
      clicked: number;

      /**
       * A read-only computed property representing the total number of action taken by people after clicking links in this message.
       */
      actions: number;

      /**
       * A read-only computed property representing the total number of times this message was forwarded.
       */
      forwards: number;

      /**
       * A read-only computed property representing the total number of messages where the person receiving the message unsubscribed.
       */
      unsubscribed: number;

      /**
       * A read-only computed property representing the total number of messages that bounced or were otherwise undelivered.
       */
      bounced: number;

      /**
       * A read-only computed property representing the SMS messages that could not be delievered due to invalid mobile numbers or bad phone numbers. (Applicable to SMS messages)
       */
      failed: number;

      /**
       * A read-only computed property representing the number of SMS messages where the number was temporarily out of network. (Applicable to SMS messages)
       */
      no_route: number;

      /**
       * A read-only computed property representing the total number of messages marked as spam by people receiving them.
       */
      spam_reports: number;
    }
  }

  /**
   * Event resources represent an event that a user may attend by submitting their RSVP information. Events have fields to describe them such as names, titles, summaries, descriptions, dates, times, and locations, and when people RSVP to attend an event, Attendance resources are created representing the individual RSVP made by an activist made for that event. Events can be one of two types, open or ticketed. Ticketed events typically charge money for tickets when a person RSVPs, while open events do not.
   */
  interface Event extends OSDIResource {
    /**
     * A human readable identifier of the system where this event was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The name of the event. Intended for administrative display rather than a public title, though may be shown to a user.
     */
    name: string;

    /**
     * The title of the event. Intended for public display rather than administrative purposes.
     */
    title: string;

    /**
     * A description of the event, usually displayed publicly. May contain text and/or HTML.
     */
    description: string;

    /**
     * A text-only single paragraph summarizing the event. Shown on listing pages that have more than titles, but not enough room for full description.
     */
    summary: string;

    /**
     * A URL string pointing to the publicly available event page on the web.
     */
    browser_url: string;

    /**
     * A URL string pointing to the event’s administrative page on the web.
     */
    administrative_url: string;

    /**
     * Whether the event asks people to purches tickets to RSVP or is an open RSVP. One of “ticketed” or “open”.
     */
    type: "ticketed" | "open";

    /**
     * An array of object hashes representing the different ticket levels available for purches. (ex: $5 general admission tickets and $50 VIP tickets)
     */
    ticket_levels: Array<{
      /**
       * The name of the ticket level. (ex: “General admission”)
       */
      title: string;

      /**
       * A longer description of the ticket level. (ex: “Gets you access to the convention floor.”)
       */
      description: string;

      /**
       * The price of each ticket for this ticket level, in the specified currency. (ex: “10.50”)
       */
      amount: number;

      /**
       * ISO 4217 designation of currency. (ex: “USD”, “JPY”)
       */
      currency: string;

      /**
       * The total amount of tickets available for this ticket level, not including tickets already sold. (ex: There may be 10 tickets of this ticket level available and five already sold, but the limit field would still read “10”.)
       */
      limit: number;

      /**
       * A read-only computed property representing the current count of the total number of tickets sold for the ticket level.
       */
      total_tickets: number;

      /**
       * A read-only computed property representing the current count of the total amount of money generated by selling tickets for the ticket level.
       */
      total_amount: number;
    }>

    /**
     * A URL string pointing to a publicly available featured image file for this event on the web.
     */
    featured_image_url: string;

    /**
     * A read-only computed property representing the current count of the total number of attendances on the event.
     */
    total_accepted: number;

    /**
     * A read - only computed property representing the current count of the total number of tickets sold for the event.
     */
    total_tickets: number;

    /**
     * A read - only computed property representing the current count of the total amount of money generated by selling tickets for the event.
     */
    total_amount: number;

    /**
     * Status of the event.Possible values are: “confirmed”, “tentative”, or “cancelled”.
     */
    status: "confirmed" | "tentative" | "cancelled";

    /**
     * The instructions for the event shown to attendees after they have RSVPed.May contain text and / or HTML.
     */
    instructions: string;

    /**
     * The start time for the event.
     */
    start_date: Date;

    /**
     * The end time for the event.
     */
    end_date: Date;

    /**
     * The date for all day events.
     */
    all_day_date: Date;

    /**
     * True if the event is an all day event.
     */
    all_day: boolean;

    /**
     * The max capacity of attendees for the event.
     */
    capacity: number;

    /**
     * Attendees can invite guests to the event.
     */
    guests_can_invite_others: boolean;

    /**
     * Whether the event blocks time on online calendar systems. Possible values are “opaque” or “transparent”. Opaque is the default, but this can be overridden by a user.
     */
    transparence: "opaque" | "transparent";

    /**
     * Visibility of the event.Possible values are “public” and “private”.
     */
    visibility: "public" | "private";

    location: {
      /**
       * Optional venue name at the event address, useful for names of buildings. (ex: Smith Hall)
       */
      venue: string;

      /**
       * An array of strings representing the event’s street address.
       */
      address_lines: string[];

      /**
       * A city or other local administrative area.
       */
      locality: string;

      /**
       * State or subdivision codes according to ISO 3166 - 2(Final 2 alpha digits).
       */
      region: string;

      /**
       * The region specific postal code, such as a zip code.
       */
      postal_code: string;

      /**
       * The country code according to ISO 3166 - 1 Alpha - 2.
       */
      country: string;

      /**
       * Language in which the address is recorded – language code according to ISO 639.
       */
      language: string;

      location: {
        latitude: number;
        longitude: number;

        /**
         * A value representing the accuracy of the geocode.One of “Rooftop” or “Approximate”.
         */
        accuracy: "Rooftop" | "Approximate";
      }

      /**
       * Whether the venue’s location should be shared publicly, or if false, only shared with RSVPs(for example, someone’s house)
       */
      public: boolean;
    }

    contact: {
      /**
       * Name of the host or contact person for event(e.g., Jane Doe)
       */
      name: string;

      /**
       * Email address of the host(jane.doe@hotmail.co.uk)
       */
      email_address: string;

      /**
       * Phone number of the host(214 - 555 - 0869)
       */
      phone_number: string;

      /**
       * Free form place for information about the event contact
       */
      additional_info: string;

      /**
       * Whether the host’s info should be shared publicly (if false, should only be shared with RSVPs)
       */
      public: boolean;
    }

    reminders: {
      /**
       * The way the reminder is to be delivered. One of “email” or “sms”.
       */
      method: "email" | "sms";

      /**
       * The number of minutes before the start of the event to send the reminder.
       */
      minutes: number;
    }

    /**
     * The IANA timezone identifier representing the timezone in which the event occurs. See https://www.iana.org/time-zones
     */
    timezone_identifier: string;

    /**
     * A URL string pointing to the page that will be shared when this content is shared.
     */
    share_url: string;

    /**
     * A computed property representing the current count of the total number of times the content has been shared by activists.
     */
    total_shares: number;

    /**
     * An array of share options objects representing the default language and attributes used when an activist shares this content via various mediums. More than one share_options object is allowed. Depending on server implementations, these could represent different share language variations to test or rotate.
     */
    share_options: IShareOptions[];
  }

  /**
   * Forms represent a page, survey, or interaction that a user may participate in by submitting their information. Forms have fields to describe them such as names, titles, summaries, and descriptions, and when activists submit a form, Submission resources are created representing the individual submission an activist made on that form.
   */
  interface Form extends OSDIResource {
    /**
     * A human readable identifier of the system where this form was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The name of the form.Intended for administrative display rather than a public title, though may be shown to a user.
     */
    name: string;

    /**
     * The title of the form.Intended for public display rather than administrative purposes.
     */
    title: string;

    /**
     * A description of the form, usually displayed publicly.May contain text and / or HTML.
     */
    description: string;

    /**
     * A text - only single paragraph summarizing the form.Shown on listing pages that have more than titles, but not enough room for full description.
     */
    summary: string;

    /**
     * The text of the call to action of the form. (ex: “Fill out our survey”)
     */
    call_to_action: string;

    /**
     * A URL string pointing to the publicly available form page on the web.
     */
    browser_url: string;

    /**
     * A URL string pointing to the form’s administrative page on the web.
     */
    administrative_url: string;

    /**
     * A URL string pointing to a publicly available featured image file for this form on the web.
     */
    featured_image_url: string;

    /**
     * A read - only computed property representing the current count of the total number of submissions on the form.
     */
    total_submissions: number;

    /**
     * A URL string pointing to the page that will be shared when this content is shared. (This may be subsumed by a particular share_option’s share_url)
     */
    share_url: string;

    /**
     * A computed property representing the current count of the total number of times the content has been shared by activists.
     */
    total_shares: number;
  }

  /**
   * Submissions are a type of action that a user may take by completing a form. Submissions have fields to describe them such as when the submission was created and typically are linked to the person who made the submission as well as any information they submitted in the form of Question and Question Answer resources.
   */
  interface Submission extends OSDIResource {
    /**
     * A human readable identifier of the system where this submission was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The date and time the submission was made by the person.
     */
    action_date: string;

    /**
     * An object hash representing referrer and sourcing information about this submission.
     */
    referrer_data: IReferrer;
  }

  /**
   * Outreaches are a type of action that a user may take by participating in an advocacy campaign. Outreaches have fields to describe them such as when the outreach was created, who the user contacted as the target of their advocacy, and the content of the message a user sent to that target, and typically are linked to the person who made the outreach.
   */
  interface Outreach extends OSDIResource {
    /**
     * A human readable identifier of the system where this outreach was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The date and time the outreach was made by the person.
     */
    action_date: string;

    /**
     * The subject of the outreach, if applicable. (ex: subject will only be present on email outreach types)
     */
    subject: string;

    /**
     * The message of the outreach, if applicable. (ex: message will only be present on email or postal mail outreach types)
     */
    message: string;

    /**
     * Notes left by the person doing the outreach, if any. For example, any feedback they got from the person they called.
     */
    notes: string;

    /**
     * The type of outreach, specifying how the user performed the outreach to targets.One of “email”, “in -person”, “phone”, “postal mail”, or another type as needed.
     */
    type: "email" | "in-person" | "phone" | "postal mail" | string;

    /**
     * The duration in seconds of the outreach, if applicable. (ex: duration will only be present on phone outreach types)
     */
    duration: number;

    referrer_data: IReferrer;

    targets: Array<{
      /**
       * The title or position of the target. (ex: “Senator” or “CEO”)
       */
      title: string;

      /**
       * The organization the target belongs to. (ex: “U.S. Senate” or “Acme Corporation”)
       */
      organization: string;

      /**
       * The first or given name of the target. (ex: “John”)
       */
      given_name: string;

      /**
       * The last or family name of the target. (ex: “Smith”)
       */
      family_name: string;

      /**
       * The Open Civic Data Division ID for this target’s political geography, if applicable. See here for more documentation. (ex: “ocd-division/country:us/state:ny/cd:18”, which corresponds to New York’s 18th Congressional District)
       */
      ocdid: string;

      postal_addresses: IPostalAddress[];
      email_addresses: IEmailAddress[];
      phone_numbers: IPhoneNumber[];
    }>
  }

  /**
   * Signatures are a type of action that a user may take by completing a petition. Signatures have fields to describe them such as when the signature was created and typically are linked to the person who made the signature.
   */
  interface Signature extends OSDIResource {
    /**
     * A human readable identifier of the system where this signature was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The date and time the signature was made by the person.
     */
    action_date: string;

    /**
     * The comments left by the person when the signature was created.
     */
    comments: string;

    referrer_data: IReferrer;
  }

  /**
   * Fundraising pages represent a page on a website that can take donations or other types of payment from end users. Fundraising pages have fields to describe them such as names, titles, summaries, and descriptions, and when activists submit a fundraising page and are charged money, Donation resources are created representing the individual donation an activist made on that fundraising page.
   */
  interface FundraisingPage extends OSDIResource {
    /**
     * A human readable identifier of the system where this fundraising page was created. (ex: “OSDI System”)
     */
    origin_system: string;

    /**
     * The name of the fundraising page. Intended for administrative display rather than a public title, though may be shown to a user.
     */
    name: string;

    /**
     * The title of the fundraising page. Intended for public display rather than administrative purposes.
     */
    title: string;

    /**
     * A description of the fundraising page, usually displayed publicly. May contain text and/or HTML.
     */
    description: string;

    /**
     * A text-only single paragraph summarizing the fundraising page. Shown on listing pages that have more than titles, but not enough room for full description.
     */
    summary: string;

    /**
     * A URL string pointing to the publicly available fundraising page on the web.
     */
    browser_url: string;

    /**
     * A URL string pointing to the fundraising page’s administrative page on the web.
     */
    administrative_url: string;

    /**
     * A URL string pointing to a publicly available featured image file for this fundraising page on the web.
     */
    featured_image_url: string;

    /**
     * ISO 4217 designation of currency. (ex: “USD” or “JPY”)
     */
    currency: string;

    /**
     * A URL string pointing to the page that will be shared when this content is shared. (This may be subsumed by a particular share_option’s share_url)
     */
    share_url: string;

    /**
     * A read-only computed property representing the current count of the total number of donations on the fundraising page.
     */
    total_donations: number;

    /**
     * A read-only computed property representing the current count of the total amount of money raised on the fundraising page.
     */
    total_amount: number;

    /**
     * A computed property representing the current count of the total number of times the content has been shared by activists.
     */
    total_shares: number;

    share_options: IShareOptions[];
  }
}
