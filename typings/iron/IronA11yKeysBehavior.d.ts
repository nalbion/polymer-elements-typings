declare module Polymer {

    /**
     `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
     keyboard commands that pertain to [WAI-ARIA best practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding).
     The element takes care of browser differences with respect to Keyboard events
     and uses an expressive syntax to filter key presses.

     Use the `keyBindings` prototype property to express what combination of keys
     will trigger the event to fire.

     Use the `key-event-target` attribute to set up event handlers on a specific
     node.
     The `keys-pressed` event will fire when one of the key combinations set with the
     `keys` property is pressed.
     */
    export interface IronA11yKeysBehavior {

        keyBindings: {[s:string]: string};

        /** The HTMLElement that will be firing relevant KeyboardEvents. */
        keyEventTarget: HTMLElement;

        /**
         If true, this property will cause the implementing element to
         automatically stop propagation on any handled KeyboardEvents.
         */
        stopKeyboardEventPropagation: boolean;

        /**
         Can be used to imperatively add a key binding to the implementing
         element. This is the imperative equivalent of declaring a keybinding
         in the `keyBindings` prototype property.
         */
        addOwnKeyBinding(eventString: string, handlerName: string): void;

        keyboardEventMatchesKeys(event: Event, eventString: string): boolean;

        /** When called, will remove all imperatively-added key bindings. */
        removeOwnKeyBindings(): void;
    }
}
