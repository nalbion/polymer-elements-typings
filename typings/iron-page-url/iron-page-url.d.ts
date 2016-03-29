/// <reference path="../../polymer-ts.d.ts" />
export declare class IronPageUrl extends polymer.Base {
    /**
     * The pathname component of the URL.
     */
    path: string;
    /**
     * The query string portion of the URL.
     */
    query: string;
    /**
     * The hash component of the URL.
     */
    hash: string;
    /**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be replaced
     * by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the user's
     * browser history. Disable by setting to a negative number.
     */
    dwellTime: number;
    /**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /search/ do:
     *     url-space-regex="^/search/"
     *
     * @type {string|RegExp}
     */
    urlSpaceRegex: string | RegExp;
    attached(): void;
    detached(): void;
}
