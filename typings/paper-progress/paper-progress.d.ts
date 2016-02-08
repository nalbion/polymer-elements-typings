/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
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
