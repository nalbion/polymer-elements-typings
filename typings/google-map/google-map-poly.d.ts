/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleMapPoly extends polymer.Base {
    /**
     * A Google Maps polyline or polygon object (depending on value of "closed" attribute).
     * @type google.maps.Polyline|google.maps.Polygon
     */
    poly: Object;
    /**
     * An array of the Google Maps LatLng objects that define the poly shape.
     * @type MVCArray.<LatLng>
     */
    path: Object;
    /**
     * The Google map object.
     * @type google.maps.Map
     */
    map: Object;
    /**
     * When true, the poly will generate mouse events.
     */
    clickable: boolean;
    /**
     * When true, the google-map-poly-*click events will be automatically registered.
     */
    clickEvents: boolean;
    /**
     * When true, the path will be closed by connecting the last point to the first one and
     * treating the poly as a polygon.
     */
    closed: boolean;
    /**
     * When true, the poly may be dragged to a new position.
     */
    draggable: boolean;
    /**
     * When true, the google-map-poly-drag* events will be automatically registered.
     */
    dragEvents: boolean;
    /**
     * When true, the poly's vertices may be individually moved or new ones added.
     */
    editable: boolean;
    /**
     * When true, indicates that the user has begun editing the poly path (adding vertices).
     */
    editing: boolean;
    /**
     * If the path is closed, the polygon fill color. All CSS3 colors are supported except for
     * extended named colors.
     */
    fillColor: string;
    /**
     * If the path is closed, the polygon fill opacity (between 0.0 and 1.0).
     */
    fillOpacity: number;
    /**
     * When true, the poly's edges are interpreted as geodesic and will follow the curvature of
     * the Earth. When not set, the poly's edges are rendered as straight lines in screen space.
     * Note that the poly of a geodesic poly may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth.
     */
    geodesic: boolean;
    /**
     * If the path is not closed, the icons to be rendered along the polyline.
     */
    icons: any[];
    /**
     * When true, the google-map-poly-mouse* events will be automatically registered.
     */
    mouseEvents: boolean;
    /**
     * The color to draw the poly's stroke with. All CSS3 colors are supported except for extended
     * named colors.
     */
    strokeColor: string;
    /**
     * The stroke opacity (between 0.0 and 1.0).
     */
    strokeOpacity: number;
    /**
     * The stroke position (center, inside, or outside).
     */
    strokePosition: string;
    /**
     * The stroke width in pixels.
     */
    strokeWeight: number;
    /**
     * The Z-index relative to other objects on the map.
     */
    zIndex: number;
    detached(): void;
    attached(): void;
    attributeChanged(attrName: string, oldVal: any, newVal: any): void;
}
