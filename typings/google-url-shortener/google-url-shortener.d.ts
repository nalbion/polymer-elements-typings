/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class GoogleUrlShortener extends polymer.Base {
    /**
     * The URL to be shortened.
     */
    longUrl: string;
    /**
     * Shortened URL
     */
    shortUrl: string;
    /**
     * Error when url was shortened
     */
    error: string;
    /**
     * If true, automatically performs the shortening request when `longUrl`
     * changes.
     */
    auto: boolean;
    /**
     * Shortens the URL in `longUrl`. Use if `auto` is not set.
      */
    shorten(): void;
}
