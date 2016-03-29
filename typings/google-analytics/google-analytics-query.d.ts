/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleAnalyticsQuery extends polymer.Base {
    /**
     * The `data` attribute is the response from a query to the Google
     * Analytics Core Reporting API. This value will be updated as
     * subsequent requests are made.
     *
     * @attribute data
     * @type object
     */
    data: Object;
    /**
     * The `ids` attribute is the unique table ID of the form ga:XXXX,
     * where XXXX is the Analytics view (profile) ID for which the query
     * will retrieve the data.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#ids">Core Reporting API parameter reference</a> for more details.
     *
     * Note: you can find out the `ids` value for any of your Google Analytics account using the <a href="https://ga-dev-tools.appspot.com/explorer/">Google Analytics query explorer</a>.
     *
     * @attribute ids
     * @type string
     */
    ids: string;
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
     * The `metrics` attribute is a list of comma-separated metrics,
     * such as ga:sessions,ga:bounces.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#metrics">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute metrics
     * @type string
     */
    metrics: string;
    /**
     * The `dimensions` attribute is a list of comma-separated dimensions
     * for your Analytics data, such as ga:browser,ga:city.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#dimensions">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute dimensions
     * @type string
     */
    dimensions: string;
    /**
     * The `sort` attribute is a list of comma-separated dimensions
     * and metrics indicating the sorting order and sorting direction for
     * the returned data.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#sort">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute sort
     * @type string
     */
    sort: string;
    /**
     * The `filters` attribute is dimension or metric filters that restrict
     * the data returned for your request.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute filters
     * @type string
     */
    filters: string;
    /**
     * The `segment` attribute segments the data returned for your
     * request.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#segment">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute segment
     * @type string
     */
    segment: string;
    /**
     * The `samplingLevel` attribute sets the desired sampling level.
     * Allowed Values: `DEFAULT`, `FASTER`, `HIGHER_PRECISION`.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#samplingLevel">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute samplingLevel
     * @type string
     */
    samplingLevel: string;
    /**
     * The `startIndex` attribute sets the first row of data to retrieve,
     * starting at 1. Use this parameter as a pagination mechanism along
     * with the max-results parameter.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startIndex">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute startIndex
     * @type integer
     */
    startIndex: number;
    /**
     * The `maxResults` attribute is the maximum number of rows to include
     * in the response.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#maxResults">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute maxResults
     * @type integer
     */
    maxResults: number;
    /**
     * The `output` attribute sets the desired output type for the
     * Analytics data returned in the response. Acceptable values are json
     * and dataTable.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#output">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute output
     * @type string
     */
    output: string;
    /**
     * The `fields` attribute is a selector specifying a subset of
     * fields to include in the response.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#fields">Core Reporting API parameter reference</a> for more details.
     *
     * @attribute fields
     * @type string
     */
    fields: string;
    /**
     * true if data is getting loaded
     * @attribute loading
     * @type Boolean
     */
    loading: boolean;
    /**
     *
     *
     * @attribute getDataResponseHandler
     * @type Function
     */
    getDataResponseHandler: Function;
    /**
     * True if setup is ready
     *
     * @attribute setupReady
     * @type Boolean
     */
    setupReady: boolean;
    /**
     * Query the Google Analytics Core Reporting API.
     *
     * @method getData
     */
    getData(): boolean;
    /**
     * setData sets data fetched by getData.
     * Use it if you override getData response processing
     * @method setData
     */
    setData(data: any): void;
    /**
     * The callback for the query run in `getData`. This is a separate
     * function so subclasses can alter how the response is handled.
     *
     * @method handleResponse
     */
    handleResponse(response: any): void;
}
