/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleJsApi extends polymer.Base implements Polymer.IronJsonpLibraryBehavior {
    /** @private */
    libraryUrl: string;
    /**
     * Fired when the API library is loaded and available.
     * @event js-api-load
     */
    /**
     * Name of event fired when library is loaded and available.
     */
    notifyEvent: string;
    api: any;
}
