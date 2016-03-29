/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleAnalyticsDashboard extends polymer.Base {
    /**
     * The `query` attribute represents the internal query object of this
     * dashboard. It is updated when control elements fire the
     * `analytics-dashboard-control-change` event and pass along query data.
     */
    query: Object;
    /**
     * True if user has been authorized
     */
    authorized: boolean;
    ready(): void;
    /**
     * The `queryUpdated` method is the callback for whenever the
     * `analytics-dashboard-control-change` event is fired. It updates the
     * query attribute, which is then sent to child charts.
     *
     * @method queryUpdated
     * @param {CustomEvent} event - The event with the query data.
     */
    queryUpdated(event: CustomEvent): void;
    /**
     * The `updateChildren` method updates each of this dashboards
     * `<google-analytics-chart>` element with its current query value.
     *
     * @method updateChildren
     */
    updateChildren(): void;
}
