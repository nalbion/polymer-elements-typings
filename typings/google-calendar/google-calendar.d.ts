/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleCalendarList extends polymer.Base {
    /**
     * A title to be displayed on top of the calendar list.
     */
    title: string;
    /**
     * List of calendars
     */
    calendars: any[];
    constructor();
    /**
     * Displays the calendar list if the user is signed in to Google.
     */
    displayCalendars(): void;
}
