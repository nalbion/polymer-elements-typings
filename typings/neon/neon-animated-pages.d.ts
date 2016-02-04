/// <reference path="../iron/IronResizableBehavior.d.ts"/>/// <reference path="../iron/IronSelectableBehavior.d.ts"/>/// <reference path="../neon/NeonAnimationRunnerBehavior.d.ts"/>

declare module neon {
	/* 
		Material design: [Meaningful transitions](https://www.google.com/design/spec/animation/meaningful-transitions.html)
		
		`neon-animated-pages` manages a set of pages and runs an animation when switching between them. Its
		children pages should implement `Polymer.NeonAnimatableBehavior` and define `entry` and `exit`
		animations to be run when switching to or switching out of the page.
	*/
	export class NeonAnimatedPages  extends Polymer.IronResizableBehavior,Polymer.IronSelectableBehavior,Polymer.NeonAnimationRunnerBehavior
	{
	
	
		/*
		*/
		activateEvent: string;	
		/* if true, the initial page selection will also be animated according to its animation config.
		*/
		animateInitialSelection: Boolean;	
		/*
		Animation configuration. See README for more info.
		*/
		animationConfig: Object;	
		/*
		Convenience property for setting an 'entry' animation. Do not set `animationConfig.entry`
		manually if using this. The animated node is set to `this` if using this property.
		*/
		entryAnimation: string;	
		/*
		Convenience property for setting an 'exit' animation. Do not set `animationConfig.exit`
		manually if using this. The animated node is set to `this` if using this property.
		*/
		exitAnimation: string;	

	
		/*
		Cancels the currently running animation.
		*/
		cancelAnimation();
	
		/*
		An element implementing `Polymer.NeonAnimationRunnerBehavior` calls this method to configure
		an animation with an optional type. Elements implementing `Polymer.NeonAnimatableBehavior`
		should define the property `animationConfig`, which is either a configuration object
		or a map of animation type to array of configuration objects.
		*/
		getAnimationConfig(type);
	
		/*
		Plays an animation with an optional `type`.
		*/
		playAnimation(type?: string, cookie?: Object);
	
	}
}
