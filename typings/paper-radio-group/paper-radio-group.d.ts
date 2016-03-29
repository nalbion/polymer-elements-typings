/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts"/>
/// <reference path="../iron-selector/iron-selectable.d.ts"/>

export declare class PaperRadioGroup extends polymer.Base implements Polymer.IronA11yKeysBehavior, Polymer.IronSelectableBehavior {
    /**
     * Fired when the radio group selection changes.
     *
     * @event paper-radio-group-changed
     */
    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    attrForSelected: string;
    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectedAttribute: string;
    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectable: string;
    /**
     * If true, radio-buttons can be deselected
     */
    allowEmptySelection: boolean;
    keyBindings: {
        'left up': string;
        'right down': string;
    };
    /**
     * Selects the given value.
     */
    select(value: any): void;
    /**
     * Selects the previous item. If the previous item is disabled, then it is
     * skipped, and its previous item is selected
     */
    selectPrevious(): void;
    /**
     * Selects the next item. If the next item is disabled, then it is
     * skipped, and the next item after it is selected.
     */
    selectNext(): void;
}
