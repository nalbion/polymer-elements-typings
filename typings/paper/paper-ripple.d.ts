/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>

declare module paper {
	/* 
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
	export class PaperRipple  extends Polymer.IronA11yKeysBehavior
	{
	
	
		/*
		True when there are visible ripples animating within the
		element.
		*/
		animating: Boolean;	
		/*
		If true, ripples will center inside its container
		*/
		center: Boolean;	
		/*
		If true, the ripple will remain in the "down" state until `holdDown`
		is set to false again.
		*/
		holdDown: Boolean;	
		/*
		The initial opacity set on the wave.
		*/
		initialOpacity: Number;	
		/*
		*/
		keyBindings: Object;	
		/*
		If true, the ripple will not generate a ripple effect
		via pointer interaction.
		Calling ripple's imperative api like `simulatedRipple` will
		still generate the ripple effect.
		*/
		noink: Boolean;	
		/*
		How fast (opacity per second) the wave fades out.
		*/
		opacityDecayVelocity: Number;	
		/*
		If true, ripples will exhibit a gravitational pull towards
		the center of their container as they fade away.
		*/
		recenters: Boolean;	
		/*
		A list of the visual ripples.
		*/
		ripples: Array<any>;	
		/*
		*/
		shouldKeepAnimating;	
		/*
		*/
		target;	

	
		/*
		*/
		addRipple();
	
		/*
		*/
		animate();
	
		/*
		Provokes a ripple down effect via a UI event,
		*not* respecting the `noink` property.
		*/
		downAction(event?: Event);
	
		/*
		*/
		onAnimationComplete();
	
		/*
		*/
		removeRipple(ripple);
	
		/*
		*/
		simulatedRipple();
	
		/*
		Provokes a ripple down effect via a UI event,
		respecting the `noink` property.
		*/
		uiDownAction(event?: Event);
	
		/*
		Provokes a ripple up effect via a UI event,
		respecting the `noink` property.
		*/
		uiUpAction(event?: Event);
	
		/*
		Provokes a ripple up effect via a UI event,
		*not* respecting the `noink` property.
		*/
		upAction(event?: Event);
	
	}
}
