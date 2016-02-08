/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/**
 * `iron-range-behavior` provides the behavior for something with a minimum to maximum range.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
declare module Polymer {
    interface IronRangeBehavior {
        /**
         * The number that represents the current value.
         */
        value: number;
        /**
         * The number that indicates the minimum value of the range.
         */
        min: number;
        /**
         * The number that indicates the maximum value of the range.
         */
        max: number;
        /**
         * Specifies the value granularity of the range's value.
         */
        step: number;
        /**
         * Returns the ratio of the value.
         */
        ratio: number;
    }
}
