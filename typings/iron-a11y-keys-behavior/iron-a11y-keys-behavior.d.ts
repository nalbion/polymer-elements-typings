/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding).
 * The element takes care of browser differences with respect to Keyboard events
 * and uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the event to fire.
 *
 * Use the `key-event-target` attribute to set up event handlers on a specific
 * node.
 * The `keys-pressed` event will fire when one of the key combinations set with the
 * `keys` property is pressed.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
declare module Polymer {
    export interface IronA11yKeysBehavior {
        /**
         * The HTMLElement that will be firing relevant KeyboardEvents.
         */
        keyEventTarget?: EventTarget;
        /**
         * If true, this property will cause the implementing element to
         * automatically stop propagation on any handled KeyboardEvents.
         */
        stopKeyboardEventPropagation?: boolean;
        keyBindings?: any;
    }
}
declare function parseEventString(eventString: any): any;
declare function parseKeyComboString(keyComboString: any): any;
declare function keyComboMatchesEvent(keyCombo: any, event: any): boolean;
/**
  * Calculates the normalized key for a KeyboardEvent.
  * @param {KeyboardEvent} keyEvent
  * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
  * transformation to alpha-numeric chars. This is useful with key
  * combinations like shift + 2, which on FF for MacOS produces
  * keyEvent.key = @
  * To get 2 returned, set noSpecialChars = true
  * To get @ returned, set noSpecialChars = false
 */
declare function normalizedKeyForEvent(keyEvent: any, noSpecialChars: any): string;
declare function transformKeyCode(keyCode: any): string;
declare function transformKeyIdentifier(keyIdent: any): string;
/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */
declare function transformKey(key: any, noSpecialChars: any): string;
/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */
declare var SPACE_KEY: RegExp;
/**
 * Matches arrow keys in Gecko 27.0+
 */
declare var ARROW_KEY: RegExp;
/**
 * Matches a keyIdentifier string.
 */
declare var IDENT_CHAR: RegExp;
/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */
declare var KEY_CHAR: RegExp;
/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */
declare var MODIFIER_KEYS: {
    'shift': string;
    'ctrl': string;
    'alt': string;
    'meta': string;
};
/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */
declare var KEY_CODE: {
    8: string;
    9: string;
    13: string;
    27: string;
    32: string;
    33: string;
    34: string;
    35: string;
    36: string;
    37: string;
    38: string;
    39: string;
    40: string;
    46: string;
    106: string;
};
