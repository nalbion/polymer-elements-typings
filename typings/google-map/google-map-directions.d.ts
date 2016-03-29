/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleMapDirections extends polymer.Base {
    /**
     * A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
     */
    apiKey: string;
    /**
     * The Google map object.
     *
     * @type google.maps.Map
     */
    map: Object;
    /**
     * Start address or latlng to get directions from.
     *
     * @type string|google.maps.LatLng
     */
    startAddress: string;
    /**
     * End address or latlng for directions to end.
     *
     * @type string|google.maps.LatLng
     */
    endAddress: string;
    /**
     * Travel mode to use.  One of 'DRIVING', 'WALKING', 'BICYCLING', 'TRANSIT'.
     */
    travelMode: string;
    /**
     * Array of intermediate waypoints. Directions will be calculated
     * from the origin to the destination by way of each waypoint in this array.
     * The maximum allowed waypoints is 8, plus the origin, and destination.
     * Maps API for Business customers are allowed 23 waypoints,
     * plus the origin, and destination.
     * Waypoints are not supported for transit directions. Optional.
     *
     * @type google.maps.DirectionsWaypoint
     */
    waypoints: any[];
    /**
     * The localized language to load the Maps API with. For more information
     * see https://developers.google.com/maps/documentation/javascript/basics#Language
     *
     * Note: the Maps API defaults to the preffered language setting of the browser.
     * Use this parameter to override that behavior.
     */
    language: string;
    /**
     * Options for the display of results
     */
    rendererOptions: Object;
    /**
     * The response from the directions service.
     *
     */
    response: Object;
}
