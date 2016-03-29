/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../paper-behaviors/paper-checked-element-behavior.d.ts"/>

export declare class PaperCheckbox extends polymer.Base implements Polymer.PaperCheckedElementBehavior {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
    ariaActiveAttribute: string;
}
