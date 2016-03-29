/// <reference path="../../polymer-ts.d.ts" />

export declare class PaperToolbar extends polymer.Base {
    /**
     * Controls how the items are aligned horizontally when they are placed
     * at the bottom.
     * Options are `start`, `center`, `end`, `justified` and `around`.
     */
    bottomJustify: string;
    /**
     * Controls how the items are aligned horizontally.
     * Options are `start`, `center`, `end`, `justified` and `around`.
     */
    justify: string;
    /**
     * Controls how the items are aligned horizontally when they are placed
     * in the middle.
     * Options are `start`, `center`, `end`, `justified` and `around`.
     */
    middleJustify: string;
    attached(): void;
    detached(): void;
}
