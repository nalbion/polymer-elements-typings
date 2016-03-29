/// <reference path="neon-animatable-behavior.d.ts"/>

declare module Polymer {
    /**
     * `Polymer.NeonAnimationRunnerBehavior` adds a method to run animations.
     *
     * @polymerBehavior Polymer.NeonAnimationRunnerBehavior
     */
    export interface NeonAnimationRunnerBehavior extends Polymer.NeonAnimatableBehavior {
        /**
         * Plays an animation with an optional `type`.
         * @param {string=} type
         * @param {!Object=} cookie
         */
        playAnimation?(type: string, cookie?);

        /**
         * Cancels the currently running animation.
         */
        cancelAnimation?();
    }
}
