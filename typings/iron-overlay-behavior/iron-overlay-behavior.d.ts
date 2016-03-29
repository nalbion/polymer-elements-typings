/// <reference path="../iron-fit-behavior/iron-fit-behavior.d.ts"/>
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts"/>

declare module Polymer {
    /**
     Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden or shown, and displays
     on top of other content. It includes an optional backdrop, and can be used to implement a variety
     of UI controls including dialogs and drop downs. Multiple overlays may be displayed at once.

     ### Closing and canceling

     A dialog may be hidden by closing or canceling. The difference between close and cancel is user
     intent. Closing generally implies that the user acknowledged the content on the overlay. By default,
     it will cancel whenever the user taps outside it or presses the escape key. This behavior is
     configurable with the `no-cancel-on-esc-key` and the `no-cancel-on-outside-click` properties.
     `close()` should be called explicitly by the implementer when the user interacts with a control
     in the overlay element. When the dialog is canceled, the overlay fires an 'iron-overlay-canceled'
     event. Call `preventDefault` on this event to prevent the overlay from closing.

     ### Positioning

     By default the element is sized and positioned to fit and centered inside the window. You can
     position and size it manually using CSS. See `Polymer.IronFitBehavior`.

     ### Backdrop

     Set the `with-backdrop` attribute to display a backdrop behind the overlay. The backdrop is
     appended to `<body>` and is of type `<iron-overlay-backdrop>`. See its doc page for styling
     options.

     ### Limitations

     The element is styled to appear on top of other content by setting its `z-index` property. You
     must ensure no element has a stacking context with a higher `z-index` than its parent stacking
     context. You should place this element as a child of `<body>` whenever possible.

     @demo demo/index.html
     @polymerBehavior Polymer.IronOverlayBehavior
     */
    export interface IronOverlayBehavior extends Polymer.IronFitBehavior, Polymer.IronResizableBehavior {
        /**
         * True if the overlay is currently displayed.
         */
        opened?: boolean;

        /**
         * True if the overlay was canceled when it was last closed.
         */
        canceled?: boolean;

        /**
         * Set to true to display a backdrop behind the overlay.
         */
        withBackdrop?: boolean;

        /**
         * Set to true to disable auto-focusing the overlay or child nodes with
         * the `autofocus` attribute` when the overlay is opened.
         */
        noAutoFocus?: boolean;

        /**
         * Set to true to disable canceling the overlay with the ESC key.
         */
        noCancelOnEscKey?: boolean;

        /**
         * Set to true to disable canceling the overlay by clicking outside it.
         */
        noCancelOnOutsideClick?: boolean;

        /**
         * Returns the reason this dialog was last closed.
         */
        closingReason?: Object;

        /**
         * The backdrop element.
         * @type Node
         */
        backdropElement?(): Node;

        registered?();

        ready?();

        detached?();

        /**
         * Toggle the opened state of the overlay.
         */
        toggle?();

        /**
         * Open the overlay.
         */
        open?();

        /**
         * Close the overlay.
         */
        close?();

        /**
         * Cancels the overlay.
         */
        cancel?();
    }
}

