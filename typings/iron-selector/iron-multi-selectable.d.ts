/// <reference path="../iron-selector/iron-selectable.d.ts"/>

declare module Polymer {
    export interface IronMultiSelectableBehavior extends Polymer.IronSelectableBehavior {
        /**
         * If true, multiple selections are allowed.
         */
        multi?: boolean;

        /**
         * Gets or sets the selected elements. This is used instead of `selected` when `multi`
         * is true.
         */
        selectedValues?: any[];

        /**
         * Returns an array of currently selected items.
         */
        selectedItems?: any[];

        /**
         * Selects the given value. If the `multi` property is true, then the selected state of the
         * `value` will be toggled; otherwise the `value` will be selected.
         *
         * @method select
         * @param {string} value the value to select.
         */
        select?(value:string);

        multiChanged?(multi:boolean);
    }
}
