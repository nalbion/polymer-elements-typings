/// <reference path="../iron-selector/iron-multi-selectable.d.ts"/>
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts"/>

declare module Polymer {
    /**
     * `Polymer.IronMenuBehavior` implements accessible menu behavior.
     *
     * @demo demo/index.html
     * @polymerBehavior Polymer.IronMenuBehavior
     */
    export interface IronMenuBehavior extends Polymer.IronMultiSelectableBehavior, Polymer.IronA11yKeysBehavior {
        /**
         * Returns the currently focused item.
         * @type {?Object}
         */
        focusedItem?: Object;

        /**
         * The attribute to use on menu items to look up the item title. Typing the first
         * letter of an item when the menu is open focuses that item. If unset, `textContent`
         * will be used.
         */
        attrForItemTitle?: string;

        attached?();

        /**
         * Selects the given value. If the `multi` property is true, then the selected state of the
         * `value` will be toggled; otherwise the `value` will be selected.
         *
         * @param {string} value the value to select.
         */
        select?(value);
    }
}
