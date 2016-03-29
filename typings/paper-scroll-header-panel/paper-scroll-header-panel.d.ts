/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts"/>

declare module Polymer {
    class PaperScrollHeaderPanel extends polymer.Base implements Polymer.IronResizableBehavior {
        /**
         * If true, the header's height will condense to `condensedHeaderHeight`
         * as the user scrolls down from the top of the content area.
         */
        condenses: boolean;
        /**
         * If true, no cross-fade transition from one background to another.
         */
        noDissolve: boolean;
        /**
         * If true, the header doesn't slide back in when scrolling back up.
         */
        noReveal: boolean;
        /**
         * If true, the header is fixed to the top and never moves away.
         */
        fixed: boolean;
        /**
         * If true, the condensed header is always shown and does not move away.
         */
        keepCondensedHeader: boolean;
        /**
         * The height of the header when it is at its full size.
         *
         * By default, the height will be measured when it is ready.  If the height
         * changes later the user needs to either set this value to reflect the
         * new height or invoke `measureHeaderHeight()`.
         */
        headerHeight: number;
        /**
         * The height of the header when it is condensed.
         *
         * By default, `condensedHeaderHeight` is 1/3 of `headerHeight` unless
         * this is specified.
         */
        condensedHeaderHeight: number;
        /**
         * By default, the top part of the header stays when the header is being
         * condensed.  Set this to true if you want the top part of the header
         * to be scrolled away.
         */
        scrollAwayTopbar: boolean;
        /**
         * The state of the header. Depending on the configuration and the `scrollTop` value,
         * the header state could change to
         *      Polymer.PaperScrollHeaderPanel.HEADER_STATE_EXPANDED
         *      Polymer.PaperScrollHeaderPanel.HEADER_STATE_HIDDEN
         *      Polymer.PaperScrollHeaderPanel.HEADER_STATE_CONDENSED
         *      Polymer.PaperScrollHeaderPanel.HEADER_STATE_INTERPOLATED
         */
        headerState: number;
        ready(): void;
        attached(): void;
        header: any;
        content: any;
        scroller: any;
        /**
         * Invoke this to tell `paper-scroll-header-panel` to re-measure the header's
         * height.
         *
         * @method measureHeaderHeight
         */
        measureHeaderHeight(): void;
        /**
         * Scroll to a specific y coordinate.
         *
         * @method scroll
         * @param {number} top The coordinate to scroll to, along the y-axis.
         * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
         */
        scroll(top: number, smooth: boolean): void;
        /**
          * Condense the header.
          *
          * @method condense
          * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
          */
        condense(smooth: boolean): void;
        /**
         * Scroll to the top of the content.
         *
         * @method scrollToTop
         * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
         */
        scrollToTop(smooth: boolean): void;
    }
}
