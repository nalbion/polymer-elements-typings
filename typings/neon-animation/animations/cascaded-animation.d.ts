/// <reference path="../../../polymer-ts.d.ts" />
/// <reference path="../../neon-animation/neon-animation-behavior.d.ts"/>

export declare class CascadedAnimation extends polymer.Base implements Polymer.NeonAnimationBehavior {
    /**
     * @param {{
     *   animation: string,
     *   nodes: !Array<!Element>,
     *   nodeDelay: (number|undefined),
     *   timing: (Object|undefined)
     *  }} config
     */
    configure(config: {
        animation?: string;
        nodes: Element[];
        nodeDelay?: number;
        timing?: Object;
    }): any;
    complete(): void;
}
