/// <reference path="../neon/NeonAnimationRunnerBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Tooltips](https://www.google.com/design/spec/components/tooltips.html)
		
		`<paper-tooltip>` is a label that appears on hover and focus when the user
		hovers over an element with the cursor or with the keyboard. It will be centered
		to an anchor element specified in the `for` attribute, or, if that doesn't exist,
		centered to the parent node containing it.
		
		Example:
		
		    <div style="display:inline-block">
		      <button>Click me!</button>
		      <paper-tooltip>Tooltip text</paper-tooltip>
		    </div>
		
		    <div>
		      <button id="btn">Click me!</button>
		      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
		    </div>
		
		The tooltip can be positioned on the top|bottom|left|right of the anchor using
		the `position` attribute. The default position is bottom.
		
		    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
		    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-tooltip-background` | The background color of the tooltip | `#616161`
		`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
		`--paper-tooltip-text-color` | The text color of the tooltip | `white`
		`--paper-tooltip` | Mixin applied to the tooltip | `{}`
	*/
	export class PaperTooltip  extends Polymer.NeonAnimationRunnerBehavior
	{
	
	
		/*
		The entry and exit animations that will be played when showing and
		hiding the tooltip. If you want to override this, you must ensure
		that your animationConfig has the exact format below.
		*/
		animationConfig: Object;	
		/*
		The delay that will be applied before the `entry` animation is
		played when showing the tooltip.
		*/
		animationDelay: Number;	
		/*
		If true, no parts of the tooltip will ever be shown offscreen.
		*/
		fitToVisibleBounds: Boolean;	
		/*
		The id of the element that the tooltip is anchored to. This element
		must be a sibling of the tooltip.
		*/
		for: string;	
		/*
		This property is deprecated, but left over so that it doesn't
		break exiting code. Please use `offset` instead. If both `offset` and
		`marginTop` are provided, `marginTop` will be ignored.
		*/
		marginTop: Number;	
		/*
		The spacing between the top of the tooltip and the element it is
		anchored to.
		*/
		offset: Number;	
		/*
		Positions the tooltip to the top, right, bottom, left of its content.
		*/
		position: string;	
		/*
		Returns the target element that this tooltip is anchored to. It is
		either the element given by the `for` attribute, or the immediate parent
		of the tooltip.
		*/
		target;	

	
		/*
		*/
		hide();
	
		/*
		*/
		show();
	
		/*
		*/
		updatePosition();
	
	}
}
