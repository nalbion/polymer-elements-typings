/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
declare module Polymer {
    interface IronJsonpLibraryBehavior {
        /**
         * True if library has been successfully loaded
         */
        libraryLoaded: boolean;
        /**
         * Not null if library has failed to load
         */
        libraryErrorMessage: string;
        ready(): any;
    }
}
/** @constructor */
declare var Loader: (name: any, url: any, callbackName: any) => void;
/**
 * LoaderMap keeps track of all Loaders
 */
declare var LoaderMap: {
    apiMap: {};
    require: (url: any, notifyCallback: any, jsonpCallbackName: any) => void;
    nameFromUrl: (url: any) => string;
};
declare class IronJsonpLibrary extends polymer.Base implements Polymer.IronJsonpLibraryBehavior {
    /**
     * Library url. Must contain string `%%callback%%`.
     *
     * `%%callback%%` is a placeholder for jsonp wrapper function name
     *
     * Ex: https://maps.googleapis.com/maps/api/js?callback=%%callback%%
     */
    libraryUrl: string;
    /**
     * Set if library requires specific callback name.
     * Name will be automatically generated if not set.
     */
    callbackName: string;
    /**
     * event with name specified in 'notifyEvent' attribute
     * will fire upon successful load
     */
    notifyEvent: string;
}
