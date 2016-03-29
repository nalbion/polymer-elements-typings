/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="paper-input-addon-behavior.d.ts"/>

export declare class PaperInputError extends polymer.Base implements Polymer.PaperInputAddonBehavior {
    /**
     * True if the error is showing.
     */
    invalid: boolean;
    update(state: any): void;
}
