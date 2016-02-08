/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class CascadedAnimation extends polymer.Base implements Polymer.NeonAnimationBehavior {
    constructor();
    /**
     * @param {{
     *   animation: string,
     *   nodes: !Array<!Element>,
     *   nodeDelay: (number|undefined),
     *   timing: (Object|undefined)
     *  }} config
     */
    configure(config: any): any;
    complete(): void;
}
