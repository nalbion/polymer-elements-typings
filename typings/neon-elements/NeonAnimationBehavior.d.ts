

declare module Polymer {

	/* 
		Use `Polymer.NeonAnimationBehavior` to implement an animation.
		
	*/
	export interface NeonAnimationBehavior 
	{
	

	
		/*
		Defines the animation timing.
		       
		*/
		animationTiming: Object;
	

	
		/*
		Called when the animation finishes.
		     
		*/
		complete();
	
		/*
		Sets `transform` and `transformOrigin` properties along with the prefixed versions.
		     
		*/
		setPrefixedProperty(node, property, value);
	
		/*
		Returns the animation timing by mixing in properties from `config` to the defaults defined
		by the animation.
		     
		*/
		timingFromConfig(config);
	

	}
}
