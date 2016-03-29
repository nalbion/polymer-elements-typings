
/** @polymerBehavior */
declare module Polymer {
    export interface IronSelectableBehavior {
        /**
         * If you want to use the attribute value of an element for `selected` instead of the index,
         * set this to the name of the attribute.
         */
        attrForSelected?: string;
        /**
         * Gets or sets the selected element. The default is to use the index of the item.
         */
        selected?: string;
        /**
         * Returns the currently selected item.
         *
         * @type {?Object}
         */
        selectedItem?: Object;
        /**
         * The event that fires from items when they are selected. Selectable
         * will listen for this event from items and update the selection state.
         * Set to empty string to listen to no events.
         */
        activateEvent?: string;
        /**
         * This is a CSS selector string.  If this is set, only items that match the CSS selector
         * are selectable.
         */
        selectable?: string;
        /**
         * The class to set on elements when selected.
         */
        selectedClass?: string;
        /**
         * The attribute to set on elements when selected.
         */
        selectedAttribute?: string;
        /**
         * The list of items from which a selection can be made.
         */
        items?: any[];

        indexOf?(item): number;
        select?(value: string);
        selectPrevious?();
        selectNext?();
    }
}
