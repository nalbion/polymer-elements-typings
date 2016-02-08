/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronOverlayBackdrop extends polymer.Base {
    /**
     * Returns true if the backdrop is opened.
     */
    opened: boolean;
    /**
     * Appends the backdrop to document body and sets its `z-index` to be below the latest overlay.
     */
    prepare(): void;
    /**
     * Shows the backdrop if needed.
     */
    open(): void;
    /**
     * Hides the backdrop if needed.
     */
    close(): void;
    /**
     * Removes the backdrop from document body if needed.
     */
    complete(): void;
}
