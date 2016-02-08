/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleMapPoint extends polymer.Base {
    /**
     * The point's longitude coordinate.
     */
    longitude: number;
    /**
     * The point's latitude coordinate.
     */
    latitude: number;
    /**
     * Returns the point as a Google Maps LatLng object.
     *
     * @return {google.maps.LatLnt} The LatLng object.
     */
    getPosition(): any;
}
