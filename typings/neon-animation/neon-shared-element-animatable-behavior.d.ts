/// <reference path="neon-animatable-behavior.d.ts"/>

declare module Polymer {
    /**
     * Use `Polymer.NeonSharedElementAnimatableBehavior` to implement elements containing shared element
     * animations.
     * @polymerBehavior Polymer.NeonSharedElementAnimatableBehavior
     */
    export interface NeonSharedElementAnimatableBehavior extends Polymer.NeonAnimatableBehavior {
        /**
         * A map of shared element id to node.
         */
        sharedElements?: Object;
    }
}
