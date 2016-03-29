/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleFeeds extends polymer.Base {
    /**
     * url of the feed to fetch.
     */
    feed: string;
    /**
     * An array of multiple feeds. Feed will load, and report results in `google-feeds-response` event.
     */
    feeds: any[];
    /**
     * Result of loading a single feed url
     */
    results: Object;
    /**
     * Query for google.feeds.findFeeds(). Query result will be reported through `google-feeds-queryresponse` event
     */
    query: string;
    /**
     * Number of feed items to fetch in fetchFeed
     */
    count: number;
    /**
     * True if feeds API is loading an item
     */
    loading: boolean;
    /**
     * Format the data is returned. json(default)|xml|mixed
     * Only applies for one feed.
     */
    format: string;
    attached(): void;
}
