/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts"/>

export declare class PaperBadge extends polymer.Base implements Polymer.IronResizableBehavior {
    /**
     * The id of the element that the badge is anchored to. This element
     * must be a sibling of the badge.
     */
    for: string;
    /**
     * The label displayed in the badge. The label is centered, and ideally
     * should have very few characters.
     */
    label: string;
    /**
     * An iron-icon ID. When given, the badge content will use an
     * `<iron-icon>` element displaying the given icon ID rather than the
     * label text. However, the label text will still be used for
     * accessibility purposes.
     */
    icon: string;
    attached(): void;
    target: any;
    /**
     * Repositions the badge relative to its anchor element. This is called
     * automatically when the badge is attached or an `iron-resize` event is
     * fired (for exmaple if the window has resized, or your target is a
     * custom element that implements IronResizableBehavior).
     *
     * You should call this in all other cases when the achor's position
     * might have changed (for example, if it's visibility has changed, or
     * you've manually done a page re-layout).
     */
    updatePosition(): void;
}
