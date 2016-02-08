/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleStreetviewPano extends polymer.Base {
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
     * The localized language to load the Maps API with. For more information
     * see https://developers.google.com/maps/documentation/javascript/basics#Language
     *
     * Note: the Maps API defaults to the preferred language setting of the browser.
     * Use this parameter to override that behavior.
     *
     */
    language: string;
    /**
     * Version of the Google Maps API to use.
     *
     */
    version: string;
    /**
     * Specifies which photosphere to load
     *
     *
     */
    panoId: string;
    /**
     * Specifies which position to load
     *
     *
     */
    position: Object;
    /**
     * The camera heading in degrees relative to true north. True north is 0°, east is 90°, south is 180°, west is 270°.
     */
    heading: number;
    /**
     * The camera pitch in degrees, relative to the street view vehicle. Ranges from 90° (directly upwards) to -90° (directly downwards).
     */
    pitch: number;
    /**
     * Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees.
     */
    zoom: number;
    /**
     * If true, disables all default UI.
     */
    disableDefaultUi: boolean;
    /**
     * If true, disables the auto panning animation
     */
    disableAutoPan: boolean;
    pano: any;
    rAFid: any;
    /**
     * Fired every rAF. Updates the heading to create a slow pan effect
     * Will be canceled by mouse enter or calling stop()
     */
    update(): void;
    /**
     * Reset the pov for the panorama.
     * @method reset
     */
    reset(): void;
    /**
     * Cancel the slow panning animation.
     * @method stop
     */
    stop(): void;
}
