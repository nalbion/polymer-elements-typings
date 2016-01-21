

declare module Polymer {

	/* 
		Use `Polymer.PaperCheckedElementBehavior` to implement a custom element
		that has a `checked` property similar to `Polymer.IronCheckedElementBehavior`
		and is compatible with having a ripple effect.
		
	*/
	export interface PaperCheckedElementBehavior  extends Polymer.PaperInkyFocusBehavior,Polymer.IronCheckedElementBehavior
	{
	

	
		/*
		If true, the element will not produce a ripple effect when interacted
		with via the pointer.
		       
		*/
		noink: boolean;
	

	
		/*
		Ensures this element contains a ripple effect. For startup efficiency
		the ripple effect is dynamically on demand when needed.
		
		*/
		ensureRipple(optTriggeringEvent: !event=);
	
		/*
		Returns the `<paper-ripple>` element used by this element to create
		ripple effects. The element's ripple is created on demand, when
		necessary, and calling this method will force the
		ripple to be created.
		     
		*/
		getRipple();
	
		/*
		Returns true if this element currently contains a ripple effect.
		
		*/
		hasRipple();
	

	}
}
