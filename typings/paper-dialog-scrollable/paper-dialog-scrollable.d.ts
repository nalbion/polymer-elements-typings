/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperDialogScrollable extends polymer.Base {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior` containing this element.
     * @type {?Node}
     */
    dialogElement: Node;
    constructor();
    scrollTarget: any;
    attached(): void;
}
