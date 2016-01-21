
/// <reference path="../neon-elements/NeonSharedElementAnimationBehavior.d.ts"/>

declare module reverse {

	/* 
		`<reverse-ripple-animation>` scales and transform an element such that it appears to ripple down from this element, to either
		a shared element, or a screen position.
		
		If using as a shared element animation in `<neon-animated-pages>`, use this animation in an `exit`
		animation in the source page and in an `entry` animation in the destination page. Also, define the
		reverse-ripple elements in the `sharedElements` property (not a configuration property, see
		`Polymer.NeonSharedElementAnimatableBehavior`).
		If using a screen position, define the `gesture` property.
		Configuration:
		```
		{
		  name: 'reverse-ripple-animation`.
		  id: <shared-element-id>, /* set this or gesture 
		  gesture: {x: <page-x>, y: <page-y>}, /* set this or id 
		  timing: <animation-timing>,
		  toPage: <node>, /* define for the destination page 
		  fromPage: <node>, /* define for the source page 
		}
		```
		
	*/
	export interface ReverseRippleAnimation  extends Polymer.NeonSharedElementAnimationBehavior
	{
	

	

	
		/*
		*/
		complete();
	

	}

}
