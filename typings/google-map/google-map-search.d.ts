/// <reference path="../../polymer-ts.d.ts" />

export declare class GoogleMapSearch extends polymer.Base {
    /**
     * The Google map object.
     */
    map: Object;
    /**
     * The search query.
     */
    query: string;
    /**
     * Latitude of the center of the search area.
     * Ignored if `globalSearch` is true.
     */
    latitude: number;
    /**
     * Longitude of the center of the search area.
     * Ignored if `globalSearch` is true.
     */
    longitude: number;
    /**
     * Search radius, in meters.
     * If `latitude` and `longitude` are not specified,
     * the center of the currently visible map area is used.
     *
     * If not set, search will be restricted to the currently visible
     * map area, unless `globalSearch` is set to true.
     */
    radius: number;
    /**
     * By default, search is restricted to the currently visible map area.
     * Set this to true to search everywhere.
     *
     * Ignored if `radius` is set.
     */
    globalSearch: boolean;
    /**
     * Space-separated list of result types.
     * The search will only return results of the listed types.
     * See https://developers.google.com/places/documentation/supported_types
     * for a list of supported types.
     * Leave empty or null to search for all result types.
     */
    types: string;
    /**
     * The search results.
     */
    results: any[];
    /**
     * The lat/lng location.
     */
    location: Object;
    /**
     * Fired when the details of a place are returned.
     *
     * @event google-map-search-place-detail
     * @param {google.maps.MarkerPlace} detail The place details.
     */
    /**
     * Fired when the search element returns a result.
     *
     * @event google-map-search-results
     * @param {Array<{latitude: number, longitude: number}>} detail An array of search results
     */
    /**
     * Perform a search using for `query` for the search term.
     */
    search(): void;
    /**
     * Fetches details for a given place.
     * @param {String} placeId The place id.
     * @return {Promise} place The place information.
     */
    getDetails(placeId: string): Promise;
}
