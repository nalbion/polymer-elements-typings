/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
/** @polymerBehavior */
declare module Polymer {
    interface PaperSpinnerBehavior {
        /**
         * Displays the spinner.
         */
        active: boolean;
        /**
         * Alternative text content for accessibility support.
         * If alt is present, it will add an aria-label whose content matches alt when active.
         * If alt is not present, it will default to 'loading' as the alt value.
         */
        alt: string;
    }
}
