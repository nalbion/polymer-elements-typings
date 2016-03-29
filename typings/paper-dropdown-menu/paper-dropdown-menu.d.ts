/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-behaviors/iron-button-state.d.ts"/>
/// <reference path="../iron-behaviors/iron-control-state.d.ts"/>
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts"/>
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts"/>

export declare class PaperDropdownMenu extends polymer.Base
    implements Polymer.IronButtonState, Polymer.IronControlState, Polymer.IronFormElementBehavior, Polymer.IronValidatableBehavior
{
    /**
     * The derived "label" of the currently selected item. This value
     * is the `label` property on the selected item if set, or else the
     * trimmed text content of the selected item.
     */
    selectedItemLabel: string;
    /**
     * The last selected item. An item is selected if the dropdown menu has
     * a child with class `dropdown-content`, and that child triggers an
     * `iron-select` event with the selected `item` in the `detail`.
     *
     * @type {?Object}
     */
    selectedItem: Object;
    /**
     * The value for this element that will be used when submitting in
     * a form. It is read only, and will always have the same value
     * as `selectedItemLabel`.
     */
    value: string;
    /**
     * The label for the dropdown.
     */
    label: string;
    /**
     * The placeholder for the dropdown.
     */
    placeholder: string;
    /**
     * True if the dropdown is open. Otherwise, false.
     */
    opened: boolean;
    /**
     * Set to true to disable the floating label. Bind this to the
     * `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: boolean;
    /**
     * Set to true to always float the label. Bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: boolean;
    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: boolean;
    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: string;
    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: string;
    keyBindings: {
        'up down': string;
        'esc': string;
    };
    attached(): void;
    contentElement: any;
    /**
     * Show the dropdown content.
     */
    open(): void;
    /**
     * Hide the dropdown content.
     */
    close(): void;
}
