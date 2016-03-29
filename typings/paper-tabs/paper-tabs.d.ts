/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts"/>
/// <reference path="../iron-menu-behavior/iron-menu-behavior.d.ts"/>

export declare class PaperTabs extends polymer.Base implements Polymer.IronResizableBehavior, Polymer.IronMenubarBehavior {
    /**
     * If true, ink ripple effect is disabled. When this property is changed,
     * all descendant `<paper-tab>` elements have their `noink` property
     * changed to the new value as well.
     */
    noink: boolean;
    /**
     * If true, the bottom bar to indicate the selected tab will not be shown.
     */
    noBar: boolean;
    /**
     * If true, the slide effect for the bottom bar is disabled.
     */
    noSlide: boolean;
    /**
     * If true, tabs are scrollable and the tab width is based on the label width.
     */
    scrollable: boolean;
    /**
     * If true, dragging on the tabs to scroll is disabled.
     */
    disableDrag: boolean;
    /**
     * If true, scroll buttons (left/right arrow) will be hidden for scrollable tabs.
     */
    hideScrollButtons: boolean;
    /**
     * If true, the tabs are aligned to bottom (the selection bar appears at the top).
     */
    alignBottom: boolean;
    /**
     * Gets or sets the selected element. The default is to use the index of the item.
     */
    selected: string;
    selectable: string;
    created(): void;
    ready(): void;
}
