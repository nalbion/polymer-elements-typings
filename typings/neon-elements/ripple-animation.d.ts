
/// <reference path="../neon-elements/NeonSharedElementAnimationBehavior.d.ts"/>

declare module ripple {

	/* 
		`<ripple-animation>` scales and transform an element such that it appears to ripple from either
		a shared element, or from a screen position, to full screen.
		
		If using as a shared element animation in `<neon-animated-pages>`, use this animation in an `exit`
		animation in the source page and in an `entry` animation in the destination page. Also, define the
		hero elements in the `sharedElements` property (not a configuration property, see
		`Polymer.NeonSharedElementAnimatableBehavior`).
		
		If using a screen position, define the `gesture` property.
		
		Configuration:
		```
		{
		  name: 'ripple-animation`.
		  id: <shared-element-id>, /* set this or gesture 
		  gesture: {x: <page-x>, y: <page-y>}, /* set this or id 
		  timing: <animation-timing>,
		  toPage: <node>, /* define for the destination page 
		  fromPage: <node>, /* define for the source page 
		}
		```
		
	*/
	export interface RippleAnimation  extends Polymer.NeonSharedElementAnimationBehavior
	{
	

	

	
		/*
		*/
		complete();
	

	}

}
