/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
Polymer.IronFitBehavior fits an element in another element using `max-height` and `max-width`, and
optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been sized and/or positioned
by CSS.

CSS properties               | Action
-----------------------------|-------------------------------------------
`position` set               | Element is not centered horizontally or vertically
`top` or `bottom` set        | Element is not vertically centered
`left` or `right` set        | Element is not horizontally centered
`max-height` or `height` set | Element respects `max-height` or `height`
`max-width` or `width` set   | Element respects `max-width` or `width`

@demo demo/index.html
@polymerBehavior
*/
declare module Polymer {
    interface IronFitBehavior {
        /**
         * The element that will receive a `max-height`/`width`. By default it is the same as `this`,
         * but it can be set to a child element. This is useful, for example, for implementing a
         * scrolling region inside the element.
         * @type {!Element}
         */
        sizingTarget: Element;
        /**
         * The element to fit `this` into.
         */
        fitInto: Object;
        /**
         * Set to true to auto-fit on attach.
         */
        autoFitOnAttach: boolean;
        constructor(): any;
    }
}
