/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperInputContainer extends polymer.Base {
    /**
     * Set to true to disable the floating label. The label disappears when the input value is
     * not null.
     */
    noLabelFloat: boolean;
    /**
     * Set to true to always float the floating label.
     */
    alwaysFloatLabel: boolean;
    /**
     * The attribute to listen for value changes on.
     */
    attrForValue: string;
    /**
     * Set to true to auto-validate the input value when it changes.
     */
    autoValidate: boolean;
    /**
     * True if the input is invalid. This property is set automatically when the input value
     * changes if auto-validating, or when the `iron-input-validate` event is heard from a child.
     */
    invalid: boolean;
    /**
     * True if the input has focus.
     */
    focused: boolean;
    constructor();
    ready(): void;
    attached(): void;
    /**
     * Call this to update the state of add-ons.
     * @param {Object} state Add-on state.
     */
    updateAddons(state: Object): void;
}
