/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-behaviors/iron-control-state.d.ts"/>
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts"/>
/// <reference path="../neon-animation/neon-animation-behavior.d.ts"/>

export declare class IronDropdown extends polymer.Base
    implements Polymer.IronControlState, polymer.IronA11yKeysBehavior, polymer.IronOverlayBehavior, polymer.NeonAnimationRunnerBehavior
{
    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: string;
    /**
     * The orientation against which to align the dropdown content
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: string;
    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left", this offset will increase or decrease
     * the distance to the left side of the screen: a negative offset will
     * move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */
    horizontalOffset: number;
    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top", this offset will increase or decrease
     * the distance to the top side of the screen: a negative offset will
     * move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */
    verticalOffset: number;
    /**
     * The element that should be used to position the dropdown when
     * it is opened.
     */
    positionTarget: Object;
    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown.
     */
    openAnimationConfig: Object;
    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown.
     */
    closeAnimationConfig: Object;
    /**
     * If provided, this will be the element that will be focused when
     * the dropdown opens.
     */
    focusTarget: Object;
    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: boolean;
    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */
    allowOutsideScroll: boolean;
    attached(): void;
    containedElement: any;
}
