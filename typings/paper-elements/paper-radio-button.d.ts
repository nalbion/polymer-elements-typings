
/// <reference path="../paper-elements/PaperCheckedElementBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)
		
		`paper-radio-button` is a button that can be either checked or unchecked.
		User can tap the radio button to check or uncheck it.
		
		Use a `<paper-radio-group>` to group a set of radio buttons.  When radio buttons
		are inside a radio group, exactly one radio button in the group can be checked
		at any time.
		
		Example:
		
		    <paper-radio-button></paper-radio-button>
		    <paper-radio-button>Item label</paper-radio-button>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-radio-button-unchecked-background-color` | Radio button background color when the input is not checked | `transparent`
		`--paper-radio-button-unchecked-color` | Radio button color when the input is not checked | `--primary-text-color`
		`--paper-radio-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
		`--paper-radio-button-checked-color` | Radio button color when the input is checked | `--default-primary-color`
		`--paper-radio-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--default-primary-color`
		`--paper-radio-button-label-color` | Label color | `--primary-text-color`
		`--paper-radio-button-label-spacing` | Spacing between the label and the button | `10px`
		
		
	*/
	export interface PaperRadioButton  extends Polymer.PaperCheckedElementBehavior
	{
	/*
	== EVENTS ==

	Event: 'change'
	
Fired when the checked state changes due to user interaction.

 Event: 'iron-change'
	
Fired when the checked state changes.

 
	*/

	
		/*
		Fired when the checked state changes.
		
		
		*/
		ariaActiveAttribute: string;
	

	

	}

}
