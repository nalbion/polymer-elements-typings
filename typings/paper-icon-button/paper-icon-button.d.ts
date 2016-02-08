/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperIconButton extends polymer.Base implements Polymer.PaperInkyFocusBehavior {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: string;
    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: string;
    /**
     * Specifies the alternate text for the button, for accessibility.
     */
    alt: string;
}
