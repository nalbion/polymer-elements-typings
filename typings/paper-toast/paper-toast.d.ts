/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperToast extends polymer.Base implements Polymer.IronOverlayBehavior {
    /**
     * The duration in milliseconds to show the toast.
     * Set to `0`, a negative number, or `Infinity`, to disable the
     * toast auto-closing.
     */
    duration: number;
    /**
     * The text to display in the toast.
     */
    text: string;
    /**
     * Overridden from `IronOverlayBehavior`.
     * Set to false to enable closing of the toast by clicking outside it.
     */
    noCancelOnOutsideClick: boolean;
    visible: any;
    created(): void;
    /**
     * Show the toast. Same as `open()` from `IronOverlayBehavior`.
     */
    show(): void;
    /**
     * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
     */
    hide(): void;
}
