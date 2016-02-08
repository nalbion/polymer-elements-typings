/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperCard extends polymer.Base {
    /**
     * The title of the card.
     */
    heading: string;
    /**
     * The url of the title image of the card.
     */
    image: string;
    /**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */
    preloadImage: boolean;
    /**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */
    fadeImage: boolean;
    /**
     * The z-depth of the card, from 0-5.
     */
    elevation: number;
    /**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */
    animatedShadow: boolean;
    /**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */
    animated: boolean;
}
