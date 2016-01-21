
/// <reference path="../neon-elements/NeonAnimationBehavior.d.ts"/>

declare module opaque {

	/* 
		`<opaque-animation>` makes an element `opacity:1` for the duration of the animation. Used to prevent
		webkit/safari from drawing a frame before an animation for elements that animate from display:none.
		
	*/
	export interface OpaqueAnimation  extends Polymer.NeonAnimationBehavior
	{
	

	

	
		/*
		*/
		complete(config);
	

	}

}
