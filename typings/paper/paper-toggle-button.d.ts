/// <reference path="../paper/PaperCheckedElementBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Switch](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-switch)
		
		`paper-toggle-button` provides a ON/OFF switch that user can toggle the state
		by tapping or by dragging the switch.
		
		Example:
		
		    <paper-toggle-button></paper-toggle-button>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-toggle-button-unchecked-bar-color` | Slider color when the input is not checked | `#000000`
		`--paper-toggle-button-unchecked-button-color` | Button color when the input is not checked | `--paper-grey-50`
		`--paper-toggle-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--dark-primary-color`
		`--paper-toggle-button-checked-bar-color` | Slider button color when the input is checked | `--default-primary-color`
		`--paper-toggle-button-checked-button-color` | Button color when the input is checked | `--default-primary-color`
		`--paper-toggle-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--default-primary-color`
		`--paper-toggle-button-unchecked-bar` | Mixin applied to the slider when the input is not checked | `{}`
		`--paper-toggle-button-unchecked-button` | Mixin applied to the slider button when the input is not checked | `{}`
		`--paper-toggle-button-checked-bar` | Mixin applied to the slider when the input is checked | `{}`
		`--paper-toggle-button-checked-button` | Mixin applied to the slider button when the input is checked | `{}`
		`--paper-toggle-button-label-color` | Label color | `--primary-text-color`
		`--paper-toggle-button-label-spacing` | Spacing between the label and the button | `8px`
	*/
	export class PaperToggleButton  extends Polymer.PaperCheckedElementBehavior
	{
	/*	== EVENTS ==

	Event: 'change'
	
Fired when the checked state changes due to user interaction.

 Event: 'iron-change'
	
Fired when the checked state changes.

 
	*/
	

	
	}
}
