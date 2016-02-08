/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperRipple extends polymer.Base implements Polymer.IronA11yKeysBehavior {
    /**
     * The initial opacity set on the wave.
     *
     * @attribute initialOpacity
     * @type number
     * @default 0.25
     */
    initialOpacity: number;
    /**
     * How fast (opacity per second) the wave fades out.
     *
     * @attribute opacityDecayVelocity
     * @type number
     * @default 0.8
     */
    opacityDecayVelocity: number;
    /**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */
    recenters: boolean;
    /**
     * If true, ripples will center inside its container
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */
    center: boolean;
    /**
     * A list of the visual ripples.
     *
     * @attribute ripples
     * @type Array
     * @default []
     */
    ripples: any[];
    /**
     * True when there are visible ripples animating within the
     * element.
     */
    animating: boolean;
    /**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */
    holdDown: boolean;
    /**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */
    noink: boolean;
    keyBindings: {
        'enter:keydown': string;
        'space:keydown': string;
        'space:keyup': string;
    };
    constructor();
    target: any;
    attached(): void;
    detached(): void;
    shouldKeepAnimating: boolean;
    simulatedRipple(): void;
    /**
     * Provokes a ripple down effect via a UI event,
     * respecting the `noink` property.
     * @param {Event=} event
     */
    uiDownAction(event?: Event): void;
    /**
     * Provokes a ripple down effect via a UI event,
     * *not* respecting the `noink` property.
     * @param {Event=} event
     */
    downAction(event?: Event): void;
    /**
     * Provokes a ripple up effect via a UI event,
     * respecting the `noink` property.
     * @param {Event=} event
     */
    uiUpAction(event?: Event): void;
    /**
     * Provokes a ripple up effect via a UI event,
     * *not* respecting the `noink` property.
     * @param {Event=} event
     */
    upAction(event?: Event): void;
    onAnimationComplete(): void;
    addRipple(): any;
    removeRipple(ripple: any): void;
    animate(): void;
}
