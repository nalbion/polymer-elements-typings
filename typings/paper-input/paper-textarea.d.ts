/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="paper-input-behavior.d.ts"/>

export declare class PaperTextarea extends polymer.Base implements Polymer.PaperInputBehavior {
    /**
     * The initial number of rows.
     *
     * @attribute rows
     * @type number
     * @default 1
     */
    rows: number;
    /**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     *
     * @attribute maxRows
     * @type number
     * @default 0
     */
    maxRows: number;
}
