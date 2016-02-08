/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
  Polymer.IronFormElementBehavior enables a custom element to be included
  in an `iron-form`.

  @demo demo/index.html
  @polymerBehavior
  */
declare module Polymer {
    interface IronFormElementBehavior {
        /**
         * Fired when the element is added to an `iron-form`.
         *
         * @event iron-form-element-register
         */
        /**
         * Fired when the element is removed from an `iron-form`.
         *
         * @event iron-form-element-unregister
         */
        /**
         * The name of this element.
         */
        name: string;
        /**
         * The value for this element.
         */
        value: string;
        /**
         * Set to true to mark the input as required. If used in a form, a
         * custom element that uses this behavior should also use
         * Polymer.IronValidatableBehavior and define a custom validation method.
         * Otherwise, a `required` element will always be considered valid.
         * It's also strongly recommended to provide a visual style for the element
         * when its value is invalid.
         */
        required: boolean;
        attached(): any;
        detached(): any;
    }
}
