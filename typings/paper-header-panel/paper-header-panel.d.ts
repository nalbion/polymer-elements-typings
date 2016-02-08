/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class PaperHeaderPanel extends polymer.Base {
    /**
     * Controls header and scrolling behavior. Options are
     * `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and
     * `cover`. Default is `standard`.
     *
     * `standard`: The header is a step above the panel. The header will consume the
     * panel at the point of entry, preventing it from passing through to the
     * opposite side.
     *
     * `seamed`: The header is presented as seamed with the panel.
     *
     * `waterfall`: Similar to standard mode, but header is initially presented as
     * seamed with panel, but then separates to form the step.
     *
     * `waterfall-tall`: The header is initially taller (`tall` class is added to
     * the header).  As the user scrolls, the header separates (forming an edge)
     * while condensing (`tall` class is removed from the header).
     *
     * `scroll`: The header keeps its seam with the panel, and is pushed off screen.
     *
     * `cover`: The panel covers the whole `paper-header-panel` including the
     * header. This allows user to style the panel in such a way that the panel is
     * partially covering the header.
     *
     *     <paper-header-panel mode="cover">
     *       <paper-toolbar class="tall">
     *         <paper-icon-button icon="menu"></paper-icon-button>
     *       </paper-toolbar>
     *       <div class="content"></div>
     *     </paper-header-panel>
     */
    mode: string;
    /**
     * If true, the drop-shadow is always shown no matter what mode is set to.
     */
    shadow: boolean;
    /**
     * The class used in waterfall-tall mode.  Change this if the header
     * accepts a different class for toggling height, e.g. "medium-tall"
     */
    tallClass: string;
    /**
     * If true, the scroller is at the top
     */
    atTop: boolean;
    ready(): void;
    attached(): void;
    detached(): void;
    header: any;
    scroller: any;
    visibleShadow: any;
}
