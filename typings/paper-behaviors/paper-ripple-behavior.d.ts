/**
   * `Polymer.PaperRippleBehavior` dynamically implements a ripple
   * when the element has focus via pointer or keyboard.
   *
   * NOTE: This behavior is intended to be used in conjunction with and after
   * `Polymer.IronButtonState` and `Polymer.IronControlState`.
   *
   * @polymerBehavior Polymer.PaperRippleBehavior
   */
declare module Polymer {
    export interface PaperRippleBehavior {
        /**
         * If true, the element will not produce a ripple effect when interacted
         * with via the pointer.
         */
        noink?: boolean;
        /**
         * Ensures this element contains a ripple effect. For startup efficiency
         * the ripple effect is dynamically on demand when needed.
         * @param {!Event=} optTriggeringEvent (optional) event that triggered the
         * ripple.
         */
        ensureRipple?(optTriggeringEvent?: Event): any;
        /**
         * Returns the `<paper-ripple>` element used by this element to create
         * ripple effects. The element's ripple is created on demand, when
         * necessary, and calling this method will force the
         * ripple to be created.
         */
        getRipple?(): any;
        /**
         * Returns true if this element currently contains a ripple effect.
         * @return {boolean}
         */
        hasRipple?(): any;
    }
}
