/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts"/>
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts"/>
/// <reference path="../iron-behaviors/iron-control-state.d.ts"/>

export declare class IronAutogrowTextarea extends polymer.Base
    implements polymer.IronFormElementBehavior, polymer.IronValidatableBehavior, polymer.IronControlState
{
    /**
     * Use this property instead of `value` for two-way data binding.
     *
     * @type {string|number|undefined|null}
     */
    bindValue: string | number;
    /**
     * The initial number of rows.
     *
     * @attribute rows
     * @type number
     * @default 1
     */
    rows: number;
    /**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     *
     * @attribute maxRows
     * @type number
     * @default 0
     */
    maxRows: number;
    /**
     * Bound to the textarea's `autocomplete` attribute.
     */
    autocomplete: string;
    /**
     * Bound to the textarea's `autofocus` attribute.
     */
    autofocus: boolean;
    /**
     * Bound to the textarea's `inputmode` attribute.
     */
    inputmode: string;
    /**
     * Bound to the textarea's `name` attribute.
     */
    name: string;
    /**
     * The value for this input, same as `bindValue`
     */
    value: string;
    /**
     * Bound to the textarea's `placeholder` attribute.
     */
    placeholder: string;
    /**
     * Bound to the textarea's `readonly` attribute.
     */
    readonly: string;
    /**
     * Set to true to mark the textarea as required.
     */
    required: boolean;
    /**
     * The maximum length of the input value.
     */
    maxlength: number;
    textarea: any;
    selectionStart: any;
    selectionEnd: any;
    /**
     * Returns true if `value` is valid. The validator provided in `validator`
     * will be used first, if it exists; otherwise, the `textarea`'s validity
     * is used.
     * @return {boolean} True if the value is valid.
     */
    validate(): any;
}
