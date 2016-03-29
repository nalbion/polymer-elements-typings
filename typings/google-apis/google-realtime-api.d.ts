/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-jsonp-library/iron-jsonp-library.d.ts"/>

export declare class GoogleRealtimeApi extends polymer.Base implements Polymer.IronJsonpLibraryBehavior {
    /** @private */
    libraryUrl: string;
    /**
    * Fired when the API library is loaded and available.
    * @event api-load
    */
    /**
     * Name of event fired when library is loaded and available.
     */
    notifyEvent: string;
    api: any;
}
