/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperDrawerPanel extends polymer.Base implements Polymer.IronResizableBehavior {
    /**
     * The panel to be selected when `paper-drawer-panel` changes to narrow
     * layout.
     */
    defaultSelected: string;
    /**
     * If true, swipe from the edge is disabled.
     */
    disableEdgeSwipe: boolean;
    /**
     * If true, swipe to open/close the drawer is disabled.
     */
    disableSwipe: boolean;
    /**
     * Whether the user is dragging the drawer interactively.
     */
    dragging: boolean;
    /**
     * Width of the drawer panel.
     */
    drawerWidth: string;
    /**
     * How many pixels on the side of the screen are sensitive to edge
     * swipes and peek.
     */
    edgeSwipeSensitivity: number;
    /**
     * If true, ignore `responsiveWidth` setting and force the narrow layout.
     */
    forceNarrow: boolean;
    /**
     * Whether the browser has support for the transform CSS property.
     */
    hasTransform: boolean;
    /**
     * Whether the browser has support for the will-change CSS property.
     */
    hasWillChange: boolean;
    /**
     * Returns true if the panel is in narrow layout.  This is useful if you
     * need to show/hide elements based on the layout.
     */
    narrow: boolean;
    /**
     * Whether the drawer is peeking out from the edge.
     */
    peeking: boolean;
    /**
     * Max-width when the panel changes to narrow layout.
     */
    responsiveWidth: string;
    /**
     * If true, position the drawer to the right.
     */
    rightDrawer: boolean;
    /**
     * The panel that is being selected. `drawer` for the drawer panel and
     * `main` for the main panel.
     */
    selected: string;
    /**
     * The attribute on elements that should toggle the drawer on tap, also elements will
     * automatically be hidden in wide layout.
     */
    drawerToggleAttribute: string;
    constructor();
    /**
     * Toggles the panel open and closed.
     *
     * @method togglePanel
     */
    togglePanel(): void;
    /**
     * Opens the drawer.
     *
     * @method openDrawer
     */
    openDrawer(): void;
    /**
     * Closes the drawer.
     *
     * @method closeDrawer
     */
    closeDrawer(): void;
    ready(): void;
}
