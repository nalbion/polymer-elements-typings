/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
declare module Polymer {
    class IronA11yAnnouncer extends polymer.Base {
        /**
         * The value of mode is used to set the `aria-live` attribute
         * for the element that will be announced. Valid values are: `off`,
         * `polite` and `assertive`.
         */
        mode: string;
        created(): void;
        /**
         * Cause a text string to be announced by screen readers.
         *
         * @param {string} text The text that should be announced.
         */
        announce(text: string): void;
    }
}
