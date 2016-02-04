/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>

declare module paper {
    interface Ripple {
        element: HTMLElement;
        color?: string;
        wave: HTMLDivElement;
        waveContainer: HTMLDivElement;

        recenters: boolean
        center: boolean
        mouseDownElapsed: number
        mouseUpElapsed: number
        mouseDownElapsedSeconds: number
        mouseUpElapsedSeconds: number
        mouseInteractionSeconds: number
        initialOpacity: number
        opacityDecayVelocity: number
        radius: number
        opacity: number
        outerOpacity: number
        isOpacityFullyDecayed: boolean
        isRestingAtMaxRadius: boolean
        isAnimationComplete: boolean
        translationFraction: number
        xNow: number
        yNow: number
        isMouseDown: boolean

        resetInteractionState(): void
        draw(): void
        downAction(event: Event): void
        upAction(event: Event): void
        remove(): void
    }


    /**
     Material design: [Surface reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)

     `paper-ripple` provides a visual effect that other paper elements can
     use to simulate a rippling effect emanating from the point of contact.  The
     effect can be visualized as a concentric circle with motion.

     Example:

     <div style="position:relative">
     <paper-ripple></paper-ripple>
     </div>

     Note, it's important that the parent container of the ripple be relative position, otherwise
     the ripple will emanate outside of the desired container.

     `paper-ripple` listens to "mousedown" and "mouseup" events so it would display ripple
     effect when touches on it.  You can also defeat the default behavior and
     manually route the down and up actions to the ripple element.  Note that it is
     important if you call `downAction()` you will have to make sure to call
     `upAction()` so that `paper-ripple` would end the animation loop.

     Example:

     <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
     ...
     downAction: function(e) {
     this.$.ripple.downAction({x: e.x, y: e.y});
     },
     upAction: function(e) {
     this.$.ripple.upAction();
     }

     Styling ripple effect:

     Use CSS color property to style the ripple:

     paper-ripple {
     color: #4285f4;
     }

     Note that CSS color property is inherited so it is not required to set it on
     the `paper-ripple` element directly.

     By default, the ripple is centered on the point of contact.  Apply the `recenters`
     attribute to have the ripple grow toward the center of its container.

     <paper-ripple recenters></paper-ripple>

     You can also  center the ripple inside its container from the start.

     <paper-ripple center></paper-ripple>

     Apply `circle` class to make the rippling effect within a circle.

     <paper-ripple class="circle"></paper-ripple>
     */
    export interface PaperRipple extends Polymer.IronA11yKeysBehavior {

        /** True when there are visible ripples animating within the element. */
        animating: boolean;

        /** If true, ripples will center inside its container */
        center: boolean;

        /** If true, the ripple will remain in the "down" state until `holdDown` is set to false again. */
        holdDown: boolean;

        /** The initial opacity set on the wave. */
        initialOpacity: number;

        keyBindings: {[s:string]: string};

        /**
         If true, the ripple will not generate a ripple effect
         via pointer interaction.
         Calling ripple's imperative api like `simulatedRipple` will
         still generate the ripple effect.
         */
        noink: boolean;

        /**
         How fast (opacity per second) the wave fades out.
         */
        opacityDecayVelocity: number;

        /**
         If true, ripples will exhibit a gravitational pull towards
         the center of their container as they fade away.
         */
        recenters: boolean;

        /** A list of the visual ripples. */
        ripples: Array<Ripple>;

        shouldKeepAnimating: boolean;

        target: Node;

        addRipple(ripple: Ripple): void;

        animate(): void;

        /**
         Provokes a ripple down effect via a UI event,
         *not* respecting the `noink` property.
         */
        downAction(event?: Event): void;

        onAnimationComplete(): void;

        removeRipple(ripple: Ripple): void;

        simulatedRipple(): void;

        /**
         Provokes a ripple down effect via a UI event,
         respecting the `noink` property.
         */
        uiDownAction(event?: Event): void;

        /**
         Provokes a ripple up effect via a UI event,
         respecting the `noink` property.
         */
        uiUpAction(event?: Event): void;

        /** Provokes a ripple up effect via a UI event, *not* respecting the `noink` property. */
        upAction(event?: Event): void;
    }
}
