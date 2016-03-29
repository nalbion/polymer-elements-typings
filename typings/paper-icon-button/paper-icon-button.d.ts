/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../paper-behaviors/paper-inky-focus-behavior.d.ts"/>

declare class PaperIconButton extends polymer.Base implements Polymer.PaperInkyFocusBehavior {
    // stand-in properties for behavior mixins
    // IronButtonState
    pressed: boolean;
    toggles: boolean;
    active: boolean;
    pointerDown: boolean;
    receivedFocusFromKeyboard: boolean;
    ariaActiveAttribute: string;
    // IronA11yKeysBehavior
    keyEventTarget: EventTarget;
    stopKeyboardEventPropagation: boolean;
    keyBindings: any;
    // IronControlState
    focused: boolean;
    disabled: boolean;
    // PaperRippleBehavior
    noink: boolean;
    ensureRipple(optTriggeringEvent?: Event): any;
    getRipple(): any;
    hasRipple(): any;

    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: string;
    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: string;
    /**
     * Specifies the alternate text for the button, for accessibility.
     */
    alt: string;
}
