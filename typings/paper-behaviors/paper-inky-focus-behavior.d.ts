/// <reference path="../iron-behaviors/iron-button-state.d.ts"/>
/// <reference path="../iron-behaviors/iron-control-state.d.ts"/>
/// <reference path="../paper-behaviors/paper-ripple-behavior.d.ts"/>

/**
 * `Polymer.PaperInkyFocusBehavior` implements a ripple when the element has keyboard focus.
 *
 * @polymerBehavior Polymer.PaperInkyFocusBehavior
 */
declare module Polymer {
    export interface PaperInkyFocusBehavior extends Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior {
        //_focusedChanged: (receivedFocusFromKeyboard: boolean) => void;
        //_createRipple: () => Polymer.PaperRipple;
    }
}
