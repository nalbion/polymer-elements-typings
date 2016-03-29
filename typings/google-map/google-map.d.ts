/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts"/>

export declare class GoogleMap extends polymer.Base implements Polymer.IronResizableBehavior {
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
     * A latitude to center the map on.
     */
    latitude: number;
    /**
     * A Maps API object.
     */
    map: Object;
    /**
     * A longitude to center the map on.
     */
    longitude: number;
    /**
     * A kml file to load.
     */
    kml: string;
    /**
     * A zoom level to set the map to.
     */
    zoom: number;
    /**
     * When set, prevents the map from tilting (when the zoom level and viewport supports it).
     */
    noAutoTilt: boolean;
    /**
     * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
     */
    mapType: string;
    /**
     * Version of the Google Maps API to use.
     */
    version: string;
    /**
     * If set, removes the map's default UI controls.
     */
    disableDefaultUi: boolean;
    /**
     * If set, the zoom level is set such that all markers (google-map-marker children) are brought into view.
     */
    fitToMarkers: boolean;
    /**
     * If true, prevent the user from zooming the map interactively.
     */
    disableZoom: boolean;
    /**
     * If set, custom styles can be applied to the map.
     * For style documentation see developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
     */
    styles: Object;
    /**
     * A maximum zoom level which will be displayed on the map.
     */
    maxZoom: number;
    /**
     * A minimum zoom level which will be displayed on the map.
     */
    minZoom: number;
    /**
     * If true, sign-in is enabled.
     * See https://developers.google.com/maps/documentation/javascript/signedin#enable_sign_in
     */
    signedIn: boolean;
    /**
     * The localized language to load the Maps API with. For more information
     * see https://developers.google.com/maps/documentation/javascript/basics#Language
     *
     * Note: the Maps API defaults to the preffered language setting of the browser.
     * Use this parameter to override that behavior.
     */
    language: string;
    /**
     * When true, map *click events are automatically registered.
     */
    clickEvents: boolean;
    /**
     * When true, map drag* events are automatically registered.
     */
    dragEvents: boolean;
    /**
     * When true, map mouse* events are automatically registered.
     */
    mouseEvents: boolean;
    /**
     * Additional map options for google.maps.Map constructor.
     * Use to specify additional options we do not expose as
     * properties.
     * Ex: `<google-map additional-map-options='{"mapTypeId":"satellite"}'>`
     *
     * Note, you can't use API enums like `google.maps.ControlPosition.TOP_RIGHT`
     * when using this property as an HTML attribute. Instead, use the actual
     * value (e.g. `3`) or set `.additionalMapOptions` in JS rather than using
     * the attribute.
     */
    additionalMapOptions: Object;
    /**
     * The markers on the map.
     */
    markers: any[];
    /**
     * The non-marker objects on the map.
     */
    objects: any[];
    /**
     * If set, all other info windows on markers are closed when opening a new one.
     */
    singleInfoWindow: boolean;
    attached(): void;
    detached(): void;
    /**
     * Clears all markers from the map.
     *
     * @method clear
     */
    clear(): void;
    /**
     * Explicitly resizes the map, updating its center. This is useful if the
     * map does not show after you have unhidden it.
     *
     * @method resize
     */
    resize(): void;
    attributeChanged(attrName: string, oldVal: any, newVal: any): void;
}
