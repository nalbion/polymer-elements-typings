/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
   * Use `Polymer.IronValidatorBehavior` to implement a custom input/form validator. Element
   * instances implementing this behavior will be registered for use in elements that implement
   * `Polymer.IronValidatableBehavior`.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */
declare module Polymer {
    interface IronValidatorBehavior {
        /**
         * Namespace for this validator.
         */
        validatorType: string;
        /**
         * Name for this validator, used by `Polymer.IronValidatableBehavior` to lookup this element.
         */
        validatorName: string;
        constructor(): any;
    }
}
