/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts"/>
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts"/>

declare module Polymer {
    /**
     * Use `Polymer.IronCheckedElementBehavior` to implement a custom element
     * that has a `checked` property, which can be used for validation if the
     * element is also `required`. Element instances implementing this behavior
     * will also be registered for use in an `iron-form` element.
     *
     * @demo demo/index.html
     * @polymerBehavior Polymer.IronCheckedElementBehavior
     */
    export interface IronCheckedElementBehavior extends Polymer.IronFormElementBehavior, Polymer.IronValidatableBehavior {

        /**
         * Gets or sets the state, `true` is checked and `false` is unchecked.
         */
        checked?: boolean;

        /**
         * If true, the button toggles the active state with each tap or press
         * of the spacebar.
         */
        toggles?: boolean;

        /* Overriden from Polymer.IronFormElementBehavior */
        value?: string;
    }
}
