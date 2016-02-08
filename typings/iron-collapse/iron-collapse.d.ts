/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronCollapse extends polymer.Base {
    /**
     * If true, the orientation is horizontal; otherwise is vertical.
     *
     * @attribute horizontal
     */
    horizontal: boolean;
    /**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */
    opened: boolean;
    /**
     * Set noAnimation to true to disable animations
     *
     * @attribute noAnimation
     */
    noAnimation: boolean;
    attached(): void;
    /**
     * Toggle the opened state.
     *
     * @method toggle
     */
    toggle(): void;
    show(): void;
    hide(): void;
    updateSize(size: any, animated: any): void;
    /**
     * enableTransition() is deprecated, but left over so it doesn't break existing code.
     * Please use `noAnimation` property instead.
     *
     * @method enableTransition
     * @deprecated since version 1.0.4
     */
    enableTransition(enabled: any): void;
}
