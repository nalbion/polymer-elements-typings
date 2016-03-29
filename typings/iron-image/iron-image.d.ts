/// <reference path="../../polymer-ts.d.ts" />
export declare class IronImage extends polymer.Base {
    /**
     * The URL of an image.
     */
    src: string;
    /**
     * A short text alternative for the image.
     */
    alt: string;
    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: boolean;
    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: string;
    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: string;
    /**
     * When `true`, any change to the `src` property will cause the `placeholder`
     * image to be shown until the new image has loaded.
     */
    preload: boolean;
    /**
     * This image will be used as a background/placeholder until the src image has
     * loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
     */
    placeholder: string;
    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: boolean;
    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: boolean;
    /**
     * Read-only value that tracks the loading state of the image when the `preload`
     * option is used.
     */
    loading: boolean;
    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: boolean;
    /**
     * Can be used to set the width of image (e.g. via binding); size may also be
     * set via CSS.
     */
    width: number;
    /**
     * Can be used to set the height of image (e.g. via binding); size may also be
     * set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: number;
    ready(): void;
}
