/// <reference path="../neon/NeonAnimatableBehavior.d.ts"/>


declare module Polymer {
	/** 
		`Polymer.NeonAnimationRunnerBehavior` adds a method to run animations.
	*/
	export class NeonAnimationRunnerBehavior  extends Polymer.NeonAnimatableBehavior
	{
	
	
		/**
		Animation configuration. See README for more info.
		*/
		animationConfig: Object;
	
		/**
		Convenience property for setting an 'entry' animation. Do not set `animationConfig.entry`
		manually if using this. The animated node is set to `this` if using this property.
		*/
		entryAnimation: string;
	
		/**
		Convenience property for setting an 'exit' animation. Do not set `animationConfig.exit`
		manually if using this. The animated node is set to `this` if using this property.
		*/
		exitAnimation: string;
	

	
		/**
		Cancels the currently running animation.
		*/
		cancelAnimation();
	
		/**
		An element implementing `Polymer.NeonAnimationRunnerBehavior` calls this method to configure
		an animation with an optional type. Elements implementing `Polymer.NeonAnimatableBehavior`
		should define the property `animationConfig`, which is either a configuration object
		or a map of animation type to array of configuration objects.
		*/
		getAnimationConfig(type);
	
		/**
		Plays an animation with an optional `type`.
		*/
		playAnimation(type?: string, cookie?: Object);
	
	}
}
