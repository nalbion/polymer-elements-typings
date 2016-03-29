/// <reference path="../../polymer-ts.d.ts" />
/**
   * @implements {Polymer.Iconset}
   */
export declare class IronIconset extends polymer.Base {
    /**
     * The URL of the iconset image.
     */
    src: string;
    /**
     * The name of the iconset.
     */
    name: string;
    /**
     * The width of the iconset image. This must only be specified if the
     * icons are arranged into separate rows inside the image.
     *
     * @attribute width
     * @type number
     * @default 0
     */
    width: number;
    /**
     * A space separated list of names corresponding to icons in the iconset
     * image file. This list must be ordered the same as the icon images
     * in the image file.
     */
    icons: string;
    /**
     * The size of an individual icon. Note that icons must be square.
     */
    size: number;
    /**
     * Array of fully-qualified names of icons in this set.
     */
    iconNames: any[];
    ready(): void;
    /**
     * Applies an icon to the given element as a css background image. This
     * method does not size the element, and it's usually necessary to set
     * the element's height and width so that the background image is visible.
     *
     * @param {Element} element The element to which the icon is applied.
     * @param {string|number} icon The name or index of the icon to apply.
     * @param {string=} theme (optional) The name or index of the icon to apply.
     * @param {number=} scale (optional, defaults to 1) Icon scaling factor.
     */
    applyIcon(element: Element, icon: string | number, theme?: string, scale?: number): void;
    /**
     * Remove an icon from the given element by undoing the changes effected
     * by `applyIcon`.
     *
     * @param {Element} element The element from which the icon is removed.
     */
    removeIcon(element: Element): void;
}
