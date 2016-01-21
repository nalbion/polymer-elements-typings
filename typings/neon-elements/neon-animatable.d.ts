
/// <reference path="../neon-elements/NeonAnimatableBehavior.d.ts"/>

/// <reference path="../iron-elements/IronResizableBehavior.d.ts"/>

declare module neon {

	/* 
		`<neon-animatable>` is a simple container element implementing `Polymer.NeonAnimatableBehavior`. This is a convenience element for use with `<neon-animated-pages>`.
		
		```
		<neon-animated-pages selected="0"
		                     entry-animation="slide-from-right-animation"
		                     exit-animation="slide-left-animation">
		  <neon-animatable>1</neon-animatable>
		  <neon-animatable>2</neon-animatable>
		</neon-animated-pages>
		```
		
	*/
	export interface NeonAnimatable  extends Polymer.NeonAnimatableBehavior,Polymer.IronResizableBehavior
	{
	

	
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
		An element implementing `Polymer.NeonAnimationRunnerBehavior` calls this method to configure
		an animation with an optional type. Elements implementing `Polymer.NeonAnimatableBehavior`
		should define the property `animationConfig`, which is either a configuration object
		or a map of animation type to array of configuration objects.
		     
		*/
		getAnimationConfig(type);
	

	}

}
