/// <reference path="../../polymer-ts.d.ts" />
export declare class IronIcon extends polymer.Base {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: string;
    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: string;
    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: string;
}
