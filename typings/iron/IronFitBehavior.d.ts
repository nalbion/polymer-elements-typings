

module Polymer {
	/** 
		Polymer.IronFitBehavior fits an element in another element using `max-height` and `max-width`, and
		optionally centers it in the window or another element.
		
		The element will only be sized and/or positioned if it has not already been sized and/or positioned
		by CSS.
		
		CSS properties               | Action
		-----------------------------|-------------------------------------------
		`position` set               | Element is not centered horizontally or vertically
		`top` or `bottom` set        | Element is not vertically centered
		`left` or `right` set        | Element is not horizontally centered
		`max-height` or `height` set | Element respects `max-height` or `height`
		`max-width` or `width` set   | Element respects `max-width` or `width`
	*/
	export interface IronFitBehavior
	{
	
	
		/**
		Set to true to auto-fit on attach.
		*/
		autoFitOnAttach: Boolean;
	
		/**
		The element to fit `this` into.
		*/
		fitInto: Object;
	
		/**
		The element that will receive a `max-height`/`width`. By default it is the same as `this`,
		but it can be set to a child element. This is useful, for example, for implementing a
		scrolling region inside the element.
		*/
		sizingTarget: Element;
	

	
		/**
		Centers horizontally and vertically if not already positioned. This also sets
		`position:fixed`.
		*/
		center();
	
		/**
		Constrains the size of the element to the window or `fitInfo` by setting `max-height`
		and/or `max-width`.
		*/
		constrain();
	
		/**
		Fits and optionally centers the element into the window, or `fitInfo` if specified.
		*/
		fit();
	
		/**
		Equivalent to calling `resetFit()` and `fit()`. Useful to call this after the element,
		the window, or the `fitInfo` element has been resized.
		*/
		refit();
	
		/**
		Resets the target element's position and size constraints, and clear
		the memoized data.
		*/
		resetFit();
	
	}
}
