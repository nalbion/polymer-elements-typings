/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleAnalyticsViewSelector extends polymer.Base {
    /**
     * The `ids` attribute, when found is used to preselect the chosen
     * account, property, and view.
     *
     * See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#ids">Core Reporting API parameter reference</a> for more details.
     *
     * @property ids
     * @type string
     */
    ids: string;
    /**
     * The `summaries` attribute contains an account summaries utility object
     * with various helper methods for quickly getting account data.
     *
     * See the <a href="https://github.com/googleanalytics/javascript-api-utils">Github repo</a> for more details.
     *
     * @property summaries
     * @type Object
     */
    summaries: Object;
    /**
     * The `account` attribute is the currently selected account.
     *
     * @property account
     * @type Object
     */
    account: Object;
    /**
     * The `property` attribute is the currently selected property.
     *
     * @property property
     * @type Object
     */
    property: Object;
    /**
     * The `view` attribute is the currently selected view.
     *
     * @property view
     * @type Object
     */
    view: Object;
    /**
    * True if setup is ready
    *
    * @attribute setupReady
    * @type Boolean
    */
    setupReady: boolean;
    setupReadyChanged(newVal: any, oldVal: any): void;
    /**
     * The `updateAccount` method is bound to the change event on the
     * account `<select>`. It updates the property and view `<select>`s based
     * on the new account data. It also updates the `ids` attribute.
     */
    updateAccount(): void;
    /**
     * The `updateProperty` method is bound to the change event on the
     * property `<select>`. It updates the view `<select>` based
     * on the new property data. It also updates the `ids` attribute.
     */
    updateProperty(): void;
    /**
     * The `updateView` method is bound to the change event on the
     * view `<select>`. It updates the `ids` attribute.
     */
    updateView(): void;
    accountChanged(newAccount: any, oldAccount: any): void;
    propertyChanged(newProperty: any, oldProperty: any): void;
    viewChanged(newView: any, oldView: any): void;
    idsChanged(newIds: any, oldIds: any): void;
    /**
     * Fire a change event passing all the currently stored data.
     */
    fireChangeEvent(): void;
}
