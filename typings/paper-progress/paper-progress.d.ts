/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-range-behavior/iron-range-behavior.d.ts"/>

export declare class PaperProgress extends polymer.Base implements Polymer.IronRangeBehavior {
    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: number;
    /**
     * The secondary ratio
     */
    secondaryRatio: number;
    /**
     * Use an indeterminate progress indicator.
     */
    indeterminate: boolean;
    /**
     * True if the progress is disabled.
     */
    disabled: boolean;
}
