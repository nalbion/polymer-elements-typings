/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleMapMarker extends polymer.Base {
    /**
     * A Google Maps marker object.
     * @type google.maps.Marker
     */
    marker: Object;
    /**
     * The Google map object.
     * @type google.maps.Map
     */
    map: Object;
    /**
     * A Google Map Infowindow object.
     */
    info: Object;
    /**
     * When true, marker *click events are automatically registered.
     */
    clickEvents: boolean;
    /**
     * When true, marker drag* events are automatically registered.
     */
    dragEvents: boolean;
    /**
     * Image URL for the marker icon.
     * @type string|google.maps.Icon|google.maps.Symbol
     */
    icon: Object;
    /**
     * When true, marker mouse* events are automatically registered.
     */
    mouseEvents: boolean;
    /**
     * Z-index for the marker icon.
     */
    zIndex: number;
    /**
     * The marker's longitude coordinate.
     */
    longitude: number;
    /**
     * The marker's latitude coordinate.
     */
    latitude: number;
    /**
     * A animation for the marker. "DROP" or "BOUNCE". See
     * https://developers.google.com/maps/documentation/javascript/examples/marker-animations.
     */
    animation: string;
    /**
     * Specifies whether the InfoWindow is open or not
     */
    open: boolean;
    detached(): void;
    attached(): void;
    attributeChanged(attrName: string, oldVal: any, newVal: any): void;
}
