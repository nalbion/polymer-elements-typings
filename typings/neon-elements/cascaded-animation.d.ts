
/// <reference path="../neon-elements/NeonAnimationBehavior.d.ts"/>

declare module cascaded {

	/* 
		`<cascaded-animation>` applies an animation on an array of elements with a delay between each.
		the delay defaults to 50ms.
		
		Configuration:
		```
		{
		  name: 'cascaded-animation',
		  animation: <animation-name>,
		  nodes: <array-of-nodes>,
		  nodedelay: <node-delay-in-ms>,
		  timing: <animation-timing>
		}
		```
		
	*/
	export interface CascadedAnimation  extends Polymer.NeonAnimationBehavior
	{
	

	

	
		/*
		*/
		complete();
	

	}

}
