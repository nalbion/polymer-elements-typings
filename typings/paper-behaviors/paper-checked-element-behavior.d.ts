/// <reference path="../paper-behaviors/paper-inky-focus-behavior.d.ts"/>
/// <reference path="../iron-behaviors"/>

declare module Polymer {
    /**
     * Use `Polymer.PaperCheckedElementBehavior` to implement a custom element
     * that has a `checked` property similar to `Polymer.IronCheckedElementBehavior`
     * and is compatible with having a ripple effect.
     * @polymerBehavior Polymer.PaperCheckedElementBehavior
     */
    export interface PaperCheckedElementBehavior extends Polymer.PaperInkyFocusBehavior, Polymer.IronCheckedElementBehavior {

    }
}
