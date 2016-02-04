/// <reference path="../iron/IronControlState.d.ts"/>/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>/// <reference path="../iron/IronOverlayBehavior.d.ts"/>/// <reference path="../neon/NeonAnimationRunnerBehavior.d.ts"/>

declare module iron {
	/* 
		`<iron-dropdown>` is a generalized element that is useful when you have
		hidden content (`.dropdown-content`) that is revealed due to some change in
		state that should cause it to do so.
		
		Note that this is a low-level element intended to be used as part of other
		composite elements that cause dropdowns to be revealed.
		
		Examples of elements that might be implemented using an `iron-dropdown`
		include comboboxes, menubuttons, selects. The list goes on.
		
		The `<iron-dropdown>` element exposes attributes that allow the position
		of the `.dropdown-content` relative to the `.dropdown-trigger` to be
		configured.
		
		    <iron-dropdown horizontal-align="right" vertical-align="top">
		      <div class="dropdown-content">Hello!</div>
		    </iron-dropdown>
		
		In the above example, the `<div>` with class `.dropdown-content` will be
		hidden until the dropdown element has `opened` set to true, or when the `open`
		method is called on the element.
	*/
	export class IronDropdown  extends Polymer.IronControlState,Polymer.IronA11yKeysBehavior,Polymer.IronOverlayBehavior,Polymer.NeonAnimationRunnerBehavior
	{
	
	
		/*
		By default, the dropdown will constrain scrolling on the page
		to itself when opened.
		Set to true in order to prevent scroll from being constrained
		to the dropdown when it opens.
		*/
		allowOutsideScroll: Boolean;	
		/*
		An animation config. If provided, this will be used to animate the
		closing of the dropdown.
		*/
		closeAnimationConfig: Object;	
		/*
		The element that is contained by the dropdown, if any.
		*/
		containedElement;	
		/*
		If provided, this will be the element that will be focused when
		the dropdown opens.
		*/
		focusTarget: Object;	
		/*
		The orientation against which to align the dropdown content
		horizontally relative to the dropdown trigger.
		*/
		horizontalAlign: string;	
		/*
		A pixel value that will be added to the position calculated for the
		given `horizontalAlign`, in the direction of alignment. You can think
		of it as increasing or decreasing the distance to the side of the
		screen given by `horizontalAlign`.
		
		If `horizontalAlign` is "left", this offset will increase or decrease
		the distance to the left side of the screen: a negative offset will
		move the dropdown to the left; a positive one, to the right.
		
		Conversely if `horizontalAlign` is "right", this offset will increase
		or decrease the distance to the right side of the screen: a negative
		offset will move the dropdown to the right; a positive one, to the left.
		*/
		horizontalOffset: Number;	
		/*
		Set to true to disable animations when opening and closing the
		dropdown.
		*/
		noAnimations: Boolean;	
		/*
		An animation config. If provided, this will be used to animate the
		opening of the dropdown.
		*/
		openAnimationConfig: Object;	
		/*
		The element that should be used to position the dropdown when
		it is opened.
		*/
		positionTarget: Object;	
		/*
		The orientation against which to align the dropdown content
		vertically relative to the dropdown trigger.
		*/
		verticalAlign: string;	
		/*
		A pixel value that will be added to the position calculated for the
		given `verticalAlign`, in the direction of alignment. You can think
		of it as increasing or decreasing the distance to the side of the
		screen given by `verticalAlign`.
		
		If `verticalAlign` is "top", this offset will increase or decrease
		the distance to the top side of the screen: a negative offset will
		move the dropdown upwards; a positive one, downwards.
		
		Conversely if `verticalAlign` is "bottom", this offset will increase
		or decrease the distance to the bottom side of the screen: a negative
		offset will move the dropdown downwards; a positive one, upwards.
		*/
		verticalOffset: Number;	

	
	}
}
