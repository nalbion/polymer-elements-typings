/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperSubmenu extends polymer.Base implements Polymer.IronControlState {
    /**
     * Fired when the submenu is opened.
     *
     * @event paper-submenu-open
     */
    /**
     * Fired when the submenu is closed.
     *
     * @event paper-submenu-close
     */
    /**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */
    opened: boolean;
    attached(): void;
    dettached(): void;
    /**
     * Expand the submenu content.
     */
    open(): void;
    /**
     * Collapse the submenu content.
     */
    close(): void;
    /**
     * Toggle the submenu.
     */
    toggle(): void;
}
