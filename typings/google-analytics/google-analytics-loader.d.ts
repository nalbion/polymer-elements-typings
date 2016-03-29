/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleAnalyticsLoader extends polymer.Base {
    /**
     * True when user is authorized, and api is loaded
     * @attribute allReady
     * @type {Boolean}
     */
    allReady: boolean;
    /**
     * True when api is loaded
     * @attribute apiReady
     * @type {Boolean}
     */
    apiReady: boolean;
    /**
     * True when user is authorized
     * @attribute authorized
     * @type {Boolean}
     */
    authorized: boolean;
    computeAllReady(apiReady: any, authorized: any): any;
    handleApiLoad(): void;
    handleApiFailedToLoad(ev: any, detail: any): void;
    handleAuthSuccess(): void;
    handleAuthSignout(): void;
}
