/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
declare module Polymer {
    interface IronOverlayManager {
        addOverlay(overlay: any): any;
        removeOverlay(overlay: any): any;
        currentOverlay(): any;
        currentOverlayZ(): any;
        /**
         * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
         * This does not effect the z-index of any existing overlays.
         *
         * @param {number} minimumZ
         */
        ensureMinimumZ(minimumZ: number): any;
        focusOverlay(): any;
        trackBackdrop(element: any): any;
        getBackdrops(): any;
    }
}
