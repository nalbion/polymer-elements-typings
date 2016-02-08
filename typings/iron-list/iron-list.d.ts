/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronList extends polymer.Base implements Polymer.Templatizer, Polymer.IronResizableBehavior {
    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: any[];
    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: string;
    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: string;
    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: string;
    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: boolean;
    /**
     * When `multiSelection` is false, this is the currently selected item, or `null`
     * if no item is selected.
     */
    selectedItem: Object;
    /**
     * When `multiSelection` is true, this is an array that contains the selected items.
     */
    selectedItems: Object;
    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: boolean;
    firstVisibleIndex: any;
    ready(): void;
    /**
     * When the element has been attached to the DOM tree.
     */
    attached(): void;
    /**
     * When the element has been removed from the DOM tree.
     */
    detached(): void;
    /**
     * Invoke this method if you dynamically update the viewport's
     * size or CSS padding.
     *
     * @method updateViewportBoundaries
     */
    updateViewportBoundaries(): void;
    /**
     * Scroll to a specific item in the virtual list regardless
     * of the physical items in the DOM tree.
     *
     * @method scrollToIndex
     * @param {number} idx The index of the item
     */
    scrollToIndex(idx: number): void;
    /**
     * Select the list item at the given index.
     *
     * @method selectItem
     * @param {(Object|number)} item The item object or its index
     */
    selectItem(item: (Object | number)): void;
    /**
     * Deselects the given item list if it is already selected.
     *
      * @method deselect
     * @param {(Object|number)} item The item object or its index
     */
    deselectItem(item: (Object | number)): void;
    /**
     * Select or deselect a given item depending on whether the item
     * has already been selected.
     *
     * @method toggleSelectionForItem
     * @param {(Object|number)} item The item object or its index
     */
    toggleSelectionForItem(item: (Object | number)): void;
    /**
     * Clears the current selection state of the list.
     *
     * @method clearSelection
     */
    clearSelection(): void;
    /**
     * Updates the size of an item.
     *
     * @method updateSizeForItem
     * @param {(Object|number)} item The item object or its index
     */
    updateSizeForItem(item: (Object | number)): void;
}
