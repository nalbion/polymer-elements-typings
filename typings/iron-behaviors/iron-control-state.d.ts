/// <reference path="../../polymer-ts.d.ts" />
/**
   * @demo demo/index.html
   * @polymerBehavior
   */
declare module Polymer {
    export interface IronControlState {
        /**
         * If true, the element currently has focus.
         */
        focused?: boolean;
        /**
         * If true, the user cannot interact with this element.
         */
        disabled?: boolean;
    }
}
