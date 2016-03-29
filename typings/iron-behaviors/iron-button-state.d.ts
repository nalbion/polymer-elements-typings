/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts"/>

/**
 * @demo demo/index.html
 * @polymerBehavior Polymer.IronButtonState
 */
declare module Polymer {
    export interface IronButtonState extends Polymer.IronA11yKeysBehavior {
        /**
         * If true, the user is currently holding down the button.
         */
        pressed?: boolean;

        /**
         * If true, the button toggles the active state with each tap or press
         * of the spacebar.
         */
        toggles?: boolean;

        /**
         * If true, the button is a toggle and is currently in the active state.
         */
        active?: boolean;

        /**
         * True if the element is currently being pressed by a "pointer," which
         * is loosely defined as mouse or touch input (but specifically excluding
         * keyboard input).
         */
        pointerDown?: boolean;

        /**
         * True if the input device that caused the element to receive focus
         * was a keyboard.
         */
        receivedFocusFromKeyboard?: boolean;

        /**
         * The aria attribute to be set if the button is a toggle and in the
         * active state.
         */
        ariaActiveAttribute?: string;

        /*_tapHandler: function() {
         if (this.toggles) {
         // a tap is needed to toggle the active state
         this._userActivate(!this.active);
         } else {
         this.active = false;
         }
         },

         _detectKeyboardFocus: function(focused) {
         this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
         },

         // to emulate native checkbox, (de-)activations from a user interaction fire
         // 'change' events
         _userActivate: function(active) {
         if (this.active !== active) {
         this.active = active;
         this.fire('change');
         }
         },

         _downHandler: function(event) {
         this._setPointerDown(true);
         this._setPressed(true);
         this._setReceivedFocusFromKeyboard(false);
         },

         _upHandler: function() {
         this._setPointerDown(false);
         this._setPressed(false);
         },

         _spaceKeyDownHandler: function(event) {
         var keyboardEvent = event.detail.keyboardEvent;
         keyboardEvent.preventDefault();
         keyboardEvent.stopImmediatePropagation();
         this._setPressed(true);
         },

         _spaceKeyUpHandler: function() {
         if (this.pressed) {
         this._asyncClick();
         }
         this._setPressed(false);
         },

         // trigger click asynchronously, the asynchrony is useful to allow one
         // event handler to unwind before triggering another event
         _asyncClick: function() {
         this.async(function() {
         this.click();
         }, 1);
         },

         // any of these changes are considered a change to button state

         _pressedChanged: function(pressed) {
         this._changedButtonState();
         },

         _ariaActiveAttributeChanged: function(value, oldValue) {
         if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
         this.removeAttribute(oldValue);
         }
         },

         _activeChanged: function(active, ariaActiveAttribute) {
         if (this.toggles) {
         this.setAttribute(this.ariaActiveAttribute,
         active ? 'true' : 'false');
         } else {
         this.removeAttribute(this.ariaActiveAttribute);
         }
         this._changedButtonState();
         },

         _controlStateChanged: function() {
         if (this.disabled) {
         this._setPressed(false);
         } else {
         this._changedButtonState();
         }
         },

         // provide hook for follow-on behaviors to react to button-state

         _changedButtonState: function() {
         if (this._buttonStateChanged) {
         this._buttonStateChanged(); // abstract
         }
         }*/
    }
}
