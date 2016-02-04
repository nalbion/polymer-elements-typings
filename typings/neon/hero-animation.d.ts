/// <reference path="../neon/NeonSharedElementAnimationBehavior.d.ts"/>

declare module hero {
	/* 
		`<hero-animation>` is a shared element animation that scales and transform an element such that it
		appears to be shared between two pages. Use this in `<neon-animated-pages>`. The source page
		should use this animation in an 'exit' animation and set the `fromPage` configuration property to
		itself, and the destination page should use this animation in an `entry` animation and set the
		`toPage` configuration property to itself. They should also define the hero elements in the
		`sharedElements` property (not a configuration property, see
		`Polymer.NeonSharedElementAnimatableBehavior`).
		
		Configuration:
		```
		{
		  name: 'hero-animation',
		  id: <shared-element-id>,
		  timing: <animation-timing>,
		  toPage: <node>, /* define for the destination page 
		  fromPage: <node>, /* define for the source page 
		}
		```
	*/
	export class HeroAnimation  extends Polymer.NeonSharedElementAnimationBehavior
	{
	
	

	
		/*
		*/
		complete(config);
	
	}
}
