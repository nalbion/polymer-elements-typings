/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleYoutubeApi extends polymer.Base implements Polymer.IronJsonpLibraryBehavior {
    /** @private */
    libraryUrl: string;
    /**
     * Fired when the API library is loaded and available.
     * @event api-load
     */
    /**
     * Name of event fired when library loads.
     */
    notifyEvent: string;
    callbackName: string;
    api: any;
}
