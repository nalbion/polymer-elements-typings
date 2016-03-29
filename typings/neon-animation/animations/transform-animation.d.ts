/// <reference path="../../../polymer-ts.d.ts" />
/// <reference path="../../neon-animation/neon-animation-behavior.d.ts"/>

export declare class TransformAnimation extends polymer.Base implements Polymer.NeonAnimationBehavior {
    /**
     * @param {{
     *   node: !Element,
     *   transformOrigin: (string|undefined),
     *   transformFrom: (string|undefined),
     *   transformTo: (string|undefined),
     *   timing: (Object|undefined)
     * }} config
     */
    configure(config: any): any;
}
