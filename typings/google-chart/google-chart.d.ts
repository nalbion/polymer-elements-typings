/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleChart extends polymer.Base {
    /**
     * Sets the type of the chart.
     *
     * Should be one of:
     * - `area`, `bar`, `bubble`, `candlestick`, `column`, `combo`, `geo`,
     *   `histogram`, `line`, `pie`, `scatter`, `stepped-area`, `treemap`
     *
     * See <a href="https://google-developers.appspot.com/chart/interactive/docs/gallery">Google Visualization API reference (Chart Gallery)</a> for details.
     *
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
     */
    options: Object;
    /**
     * Sets the data columns for this object.
     *
     * When specifying data with `cols` you must also specify `rows`, and
     * not specify `data`.
     *
     * Example:
     * <pre>[{label: "Categories", type: "string"},
     *  {label: "Value", type: "number"}]</pre>
     * See <a href="https://google-developers.appspot.com/chart/interactive/docs/reference#DataTable_addColumn">Google Visualization API reference (addColumn)</a>
     * for column definition format.
     *
     * @attribute cols
     * @type array
     */
    cols: any[];
    /**
     * Sets the data rows for this object.
     *
     * When specifying data with `rows` you must also specify `cols`, and
     * not specify `data`.
     *
     * Example:
     * <pre>[["Category 1", 1.0],
     *  ["Category 2", 1.1]]</pre>
     * See <a href="https://google-developers.appspot.com/chart/interactive/docs/reference#addrow">Google Visualization API reference (addRow)</a>
     * for row format.
     *
     * @attribute rows
     * @type array
     */
    rows: any[];
    /**
     * Sets the entire dataset for this object.
     * Can be used to provide the data directly, or to provide a URL from
     * which to request the data.
     *
     * The data format can be a two-dimensional array or the DataTable format
     * expected by Google Charts.
     * See <a href="https://google-developers.appspot.com/chart/interactive/docs/reference#DataTable">Google Visualization API reference (DataTable constructor)</a>
     * for data table format details.
     *
     * When specifying data with `data` you must not specify `cols` or `rows`.
     *
     * Example:
     * <pre>[["Categories", "Value"],
     *  ["Category 1", 1.0],
     *  ["Category 2", 1.1]]</pre>
     *
     * @attribute data
     * @type array, object, or string
     */
    data: Object;
    /**
     * Selected datapoint(s) in the map.
     *
     * An array of objects, each with a numeric row and/or column property.
     * `row` and `column` are the zero-based row or column number of an item
     * in the data table to select.
     *
     * To select a whole column, set row to null;
     * to select a whole row, set column to null.
     *
     * Example:
     * <pre>
     *   [{row:0,column:1}, {row:1, column:null}]
     * </pre>
     *
     * @attribute selection
     * @type array
     */
    selection: any[];
    /**
     * Draws the chart.
     *
     * Called automatically on first load and whenever one of the attributes
     * changes. Can be called manually to handle e.g. page resizes.
     *
     * @method drawChart
     * @return {Object} Returns null.
     */
    drawChart(): any;
    /**
     * Returns the chart serialized as an image URI.
     *
     * Call this after the chart is drawn (google-chart-render event).
     *
     * @return {string} Returns image URI.
     */
    getImageURI(): any;
}
