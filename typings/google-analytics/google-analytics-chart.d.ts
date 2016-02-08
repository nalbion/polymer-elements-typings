/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleAnalyticsChart extends polymer.Base {
    /**
     * Sets the type of the chart.
     *
     * Should be one of:
     * - `area`, `bar`, `column`, `line`, `pie`, `geo`.
     *
     * @attribute type
     * @default 'area'
     * @type string
     */
    type: string;
    /**
     * Sets the options for the chart.
     *
     * Example:
     * <pre>{
     *   title: "Chart title goes here",
     *   hAxis: {title: "Categories"},
     *   vAxis: {title: "Values", minValue: 0, maxValue: 2},
     *   legend: "none"
     * };</pre>
     * See <a href="https://google-developers.appspot.com/chart/interactive/docs/gallery">Google Visualization API reference (Chart Gallery)</a>
     * for the options available to each chart type.
     *
     * @attribute options
     * @default null
     * @type object
     */
    options: Object;
    /**
     * True after the chart has been rendered for the first time.
     *
     * @attribute rendered
     * @type boolean
     */
    rendered: boolean;
    /**
     * True if the chart is currently loading data.
     *
     * @attribute loading
     * @type boolean
     */
    loading: boolean;
    /**
     * True if setup is ready
     *
     * @attribute setupReady
     * @type Boolean
     */
    setupReady: boolean;
    /**
     * google-analytics-query passthrough properties
     * See google-analytics-query for documentation
     * startDate, endDate, data, ids, metrics, dimensions, sort, filters, segment, samplingLevel, startIndex, maxResults
     */
    startDate: string;
    endDate: string;
    data: Object;
    ids: string;
    metrics: string;
    dimensions: string;
    sort: string;
    filters: string;
    segment: string;
    samplingLevel: string;
    startIndex: number;
    maxResults: number;
    constructor();
    ready(): void;
    setupReadyChanged(newVal: any, oldVal: any): void;
    handleResponse(response: any): void;
}
