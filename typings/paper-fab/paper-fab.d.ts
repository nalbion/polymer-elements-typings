/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperFab extends polymer.Base implements Polymer.PaperButtonBehavior {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     *
     * @attribute src
     * @type string
     * @default ''
     */
    src: string;
    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     *
     * @attribute icon
     * @type string
     * @default ''
     */
    icon: string;
    /**
     * Set this to true to style this is a "mini" FAB.
     *
     * @attribute mini
     * @type boolean
     * @default false
     */
    mini: boolean;
}