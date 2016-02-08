/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
   * @demo demo/index.html
   * @polymerBehavior
   */
declare module Polymer {
    interface IronControlState {
        /**
         * If true, the element currently has focus.
         */
        focused: boolean;
        /**
         * If true, the user cannot interact with this element.
         */
        disabled: boolean;
        constructor(): any;
    }
}
