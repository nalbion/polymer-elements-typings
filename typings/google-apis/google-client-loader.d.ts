/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleClientLoader extends polymer.Base {
    /**
     * Name of the API to load, e.g. 'urlshortener'.
     *
     * You can find the full list of APIs on the
     * <a href="https://developers.google.com/apis-explorer"> Google APIs
     * Explorer</a>.
     */
    name: string;
    /**
     * Version of the API to load, e.g. 'v1'.
     */
    version: string;
    /**
     * App Engine application ID for loading a Google Cloud Endpoints API.
     */
    appId: string;
    /**
     * Root URL where to load the API from, e.g. 'http://host/apis'.
     * For App Engine dev server this would be something like:
     * 'http://localhost:8080/_ah/api'.
     * Overrides 'appId' if both are specified.
     */
    apiRoot: string;
    /**
     * Name of the event fired when API library is loaded.
     */
    successEventName: string;
    /**
     * Name of the event fired when there is an error loading the library.
     */
    errorEventName: string;
    api: any;
    auth: any;
}
