/// <reference path="../../polymer-ts.d.ts" />

export declare class GoogleCalendarList extends polymer.Base {
    /**
     * A title to be displayed on top of the calendar list.
     */
    title: string;
    /**
     * List of calendars
     */
    calendars: any[];
    /**
     * Displays the calendar list if the user is signed in to Google.
     */
    displayCalendars(): void;
}
