/// <reference path="../neon/NeonAnimatableBehavior.d.ts"/>


declare module Polymer {
	/** 
		Use `Polymer.NeonSharedElementAnimatableBehavior` to implement elements containing shared element
		animations.
	*/
	export class NeonSharedElementAnimatableBehavior  extends Polymer.NeonAnimatableBehavior
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
		A map of shared element id to node.
		*/
		sharedElements: Object;
	

	
		/**
		An element implementing `Polymer.NeonAnimationRunnerBehavior` calls this method to configure
		an animation with an optional type. Elements implementing `Polymer.NeonAnimatableBehavior`
		should define the property `animationConfig`, which is either a configuration object
		or a map of animation type to array of configuration objects.
		*/
		getAnimationConfig(type);
	
	}
}
