

declare module Polymer {
	/** 
		`Polymer.NeonAnimatableBehavior` is implemented by elements containing animations for use with
		elements implementing `Polymer.NeonAnimationRunnerBehavior`.
	*/
	export class NeonAnimatableBehavior 
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
		An element implementing `Polymer.NeonAnimationRunnerBehavior` calls this method to configure
		an animation with an optional type. Elements implementing `Polymer.NeonAnimatableBehavior`
		should define the property `animationConfig`, which is either a configuration object
		or a map of animation type to array of configuration objects.
		*/
		getAnimationConfig(type);
	
	}
}
