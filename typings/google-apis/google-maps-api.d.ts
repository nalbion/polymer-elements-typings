/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleMapsApi extends polymer.Base implements Polymer.IronJsonpLibraryBehavior {
    /** @private */
    mapsUrl: string;
    /**
     * A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
     */
    apiKey: string;
    /**
     * A Maps API for Business Client ID. To obtain a Maps API for Business Client ID, see developers.google.com/maps/documentation/business/.
     * If set, a Client ID will take precedence over an API Key.
     */
    clientId: string;
    /**
     * Version of the Maps API to use.
     */
    version: string;
    /**
     * The localized language to load the Maps API with. For more information
     * see https://developers.google.com/maps/documentation/javascript/basics#Language
     *
     * Note: the Maps API defaults to the preffered language setting of the browser.
     * Use this parameter to override that behavior.
     */
    language: string;
    /**
     * If true, sign-in is enabled.
     * See https://developers.google.com/maps/documentation/javascript/signedin#enable_sign_in
     */
    signedIn: boolean;
    /**
     * Fired when the Maps API library is loaded and ready.
     * @event api-load
     */
    /**
     * Name of event fired when library is loaded and available.
     */
    notifyEvent: string;
    /** @private */
    libraryUrl: string;
    api: any;
}
