/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleAnalyticsDateSelector extends polymer.Base {
    /**
     * The `startDate` attribute is the start date for fetching Analytics
     * data. Requests can specify a start date formatted as YYYY-MM-DD, or
     * as a relative date (e.g., today, yesterday, or NdaysAgo where N is a
     * positive integer).
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startDate">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute startDate
     * @default '7daysAgo'
     * @type string
     */
    startDate: string;
    /**
     * The `endDate` attribute is the end date for fetching Analytics
     * data. Requests can specify an end date formatted as YYYY-MM-DD, or
     * as a relative date (e.g., today, yesterday, or NdaysAgo where N is a
     * positive integer).
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#endDate">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute endDate
     * @default 'yesterday'
     * @type string
     */
    endDate: string;
    /**
     * The `minStartDate` attribute is used as the `min` attribute on the
     * start date `<input>`.
     *
     * @attribute minStartDate
     * @default '2005-01-01'
     * @type string
     */
    minStartDate: string;
    /**
     * The `maxEndDate` attribute is used as the `max` attribute on the
     * end date `<input>`.
     *
     * @attribute maxEndDate
     * @default 'today'
     * @type string
     */
    maxEndDate: string;
    startDateChanged(cur: any, old: any): void;
    endDateChanged(cur: any, old: any): void;
}
