/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../neon-animation/neon-animation-behavior.d.ts"/>

export declare class PaperTooltip extends polymer.Base implements Polymer.NeonAnimationRunnerBehavior {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip.
     */
    for: string;
    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: string;
    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: boolean;
    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: number;
    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: number;
    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: number;
    /**
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: Object;

    target: any;
    attached(): void;
    detached(): void;
    show(): void;
    hide(): void;
    updatePosition(): void;
}
