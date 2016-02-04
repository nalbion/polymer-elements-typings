/// <reference path="../neon/NeonAnimationBehavior.d.ts"/>


declare module Polymer {
	/** 
		Use `Polymer.NeonSharedElementAnimationBehavior` to implement shared element animations.
	*/
	export class NeonSharedElementAnimationBehavior  extends Polymer.NeonAnimationBehavior
	{
	
	
		/**
		Defines the animation timing.
		*/
		animationTiming: Object;
	
		/**
		Cached copy of shared elements.
		*/
		sharedElements: Object;
	

	
		/**
		Called when the animation finishes.
		*/
		complete();
	
		/**
		Finds shared elements based on `config`.
		*/
		findSharedElements(config);
	
		/**
		Sets `transform` and `transformOrigin` properties along with the prefixed versions.
		*/
		setPrefixedProperty(node, property, value);
	
		/**
		Returns the animation timing by mixing in properties from `config` to the defaults defined
		by the animation.
		*/
		timingFromConfig(config);
	
	}
}
