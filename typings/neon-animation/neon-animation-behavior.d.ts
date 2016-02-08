/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
   * Use `Polymer.NeonAnimationBehavior` to implement an animation.
   * @polymerBehavior
   */
declare module Polymer {
    interface NeonAnimationBehavior {
        /**
         * Defines the animation timing.
         */
        animationTiming: Object;
        constructor(): any;
    }
}
