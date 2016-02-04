/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>/// <reference path="../iron/IronFormElementBehavior.d.ts"/>/// <reference path="../paper/PaperInkyFocusBehavior.d.ts"/>/// <reference path="../iron/IronRangeBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Sliders](https://www.google.com/design/spec/components/sliders.html)
		
		`paper-slider` allows user to select a value from a range of values by
		moving the slider thumb.  The interactive nature of the slider makes it a
		great choice for settings that reflect intensity levels, such as volume,
		brightness, or color saturation.
		
		Example:
		
		    <paper-slider></paper-slider>
		
		Use `min` and `max` to specify the slider range.  Default is 0 to 100.
		
		Example:
		
		    <paper-slider min="10" max="200" value="110"></paper-slider>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-slider-bar-color` | The background color of the slider | `transparent`
		`--paper-slider-active-color` | The progress bar color | `--google-blue-700`
		`--paper-slider-secondary-color` | The secondary progress bar color | `--google-blue-300`
		`--paper-slider-knob-color` | The knob color | `--google-blue-700`
		`--paper-slider-disabled-knob-color` | The disabled knob color | `--paper-grey-400`
		`--paper-slider-pin-color` | The pin color | `--google-blue-700`
		`--paper-slider-font-color` | The pin's text color | `#fff`
		`--paper-slider-disabled-active-color` | The disabled progress bar color | `--paper-grey-400`
		`--paper-slider-disabled-secondary-color` | The disabled secondary progress bar color | `--paper-grey-400`
		`--paper-slider-knob-start-color` | The fill color of the knob at the far left | `transparent`
		`--paper-slider-knob-start-border-color` | The border color of the knob at the far left | `--paper-grey-400`
		`--paper-slider-pin-start-color` | The color of the pin at the far left | `--paper-grey-400`
		`--paper-slider-height` | Height of the progress bar | `2px`
		`--paper-slider-input` | Mixin applied to the input in editable mode | `{}`
	*/
	export class PaperSlider  extends Polymer.IronA11yKeysBehavior,Polymer.IronFormElementBehavior,Polymer.PaperInkyFocusBehavior,Polymer.IronRangeBehavior
	{
	/*	== EVENTS ==

	Event: 'change'
	
Fired when the slider's value changes due to user interaction.

Changes to the slider's value due to changes in an underlying
bound variable will not trigger this event.

 Event: 'immediate-value-change'
	
Fired when the slider's immediateValue changes.

 Event: 'value-change'
	
Fired when the slider's value changes.

 
	*/
	
		/*
		True when the user is dragging the slider.
		*/
		dragging: Boolean;	
		/*
		If true, an input is shown and user can use it to set the slider value.
		*/
		editable: Boolean;	
		/*
		If true, the knob is expanded
		*/
		expand: Boolean;	
		/*
		The immediate value of the slider.  This value is updated while the user
		is dragging the slider.
		*/
		immediateValue: Number;	
		/*
		*/
		keyBindings: Object;	
		/*
		*/
		markers: Array<any>;	
		/*
		The maximum number of markers
		*/
		maxMarkers: Number;	
		/*
		If true, a pin with numeric value label is shown when the slider thumb
		is pressed. Use for settings for which users need to know the exact
		value of the setting.
		*/
		pin: Boolean;	
		/*
		The number that represents the current secondary progress.
		*/
		secondaryProgress: Number;	
		/*
		If true, the slider thumb snaps to tick marks evenly spaced based
		on the `step` property value.
		*/
		snaps: Boolean;	
		/*
		*/
		transiting: Boolean;	

	
		/*
		Decreases value by `step` but not below `min`.
		*/
		decrement();
	
		/*
		Increases value by `step` but not above `max`.
		*/
		increment();
	
	}
}
