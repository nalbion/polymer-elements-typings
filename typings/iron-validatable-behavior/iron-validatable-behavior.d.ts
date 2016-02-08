/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
   * `Use Polymer.IronValidatableBehavior` to implement an element that validates user input.
   * Use the related `Polymer.IronValidatorBehavior` to add custom validation logic to an iron-input.
   *
   * By default, an `<iron-form>` element validates its fields when the user presses the submit button.
   * To validate a form imperatively, call the form's `validate()` method, which in turn will
   * call `validate()` on all its children. By using `Polymer.IronValidatableBehavior`, your
   * custom element will get a public `validate()`, which
   * will return the validity of the element, and a corresponding `invalid` attribute,
   * which can be used for styling.
   *
   * To implement the custom validation logic of your element, you must override
   * the protected `_getValidity()` method of this behaviour, rather than `validate()`.
   * See [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
   * for an example.
   *
   * ### Accessibility
   *
   * Changing the `invalid` property, either manually or by calling `validate()` will update the
   * `aria-invalid` attribute.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */
declare module Polymer {
    interface IronValidatableBehavior {
        /**
         * Namespace for this validator.
         */
        validatorType: string;
        /**
         * Name of the validator to use.
         */
        validator: string;
        /**
         * True if the last call to `validate` is invalid.
         */
        invalid: boolean;
        ready(): any;
        /**
         * @return {boolean} True if the validator `validator` exists.
         */
        hasValidator(): any;
        /**
         * Returns true if the `value` is valid, and updates `invalid`. If you want
         * your element to have custom validation logic, do not override this method;
         * override `_getValidity(value)` instead.
          * @param {Object} value The value to be validated. By default, it is passed
         * to the validator's `validate()` function, if a validator is set.
         * @return {boolean} True if `value` is valid.
         */
        validate(value: Object): any;
    }
}
