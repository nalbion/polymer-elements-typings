/// <reference path="../iron/IronButtonState.d.ts"/>
/// <reference path="../iron/IronControlState.d.ts"/>
/// <reference path="../paper/PaperRippleBehavior.d.ts"/>


module Polymer {
	/** 
	*/
	export interface PaperButtonBehavior  extends Polymer.IronButtonState,Polymer.IronControlState,Polymer.PaperRippleBehavior
	{
		/**
		The z-depth of this element, from 0-5. Setting to 0 will remove the
		shadow, and each increasing number greater than 0 will be "deeper"
		than the last.
		*/
		elevation: Number;
	
		/**
		If true, the element will not produce a ripple effect when interacted
		with via the pointer.
		*/
		noink: Boolean;

		/**
		Ensures this element contains a ripple effect. For startup efficiency
		the ripple effect is dynamically on demand when needed.
		*/
		ensureRipple(optTriggeringEvent?: Event);
	
		/**
		Returns the `<paper-ripple>` element used by this element to create
		ripple effects. The element's ripple is created on demand, when
		necessary, and calling this method will force the
		ripple to be created.
		*/
		getRipple();
	
		/**
		Returns true if this element currently contains a ripple effect.
		*/
		hasRipple();
	}
}
