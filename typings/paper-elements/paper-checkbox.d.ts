
/// <reference path="../paper-elements/PaperCheckedElementBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)
		
		`paper-checkbox` is a button that can be either checked or unchecked.  User
		can tap the checkbox to check or uncheck it.  Usually you use checkboxes
		to allow user to select multiple options from a set.  If you have a single
		ON/OFF option, avoid using a single checkbox and use `paper-toggle-button`
		instead.
		
		Example:
		
		    <paper-checkbox>label</paper-checkbox>
		
		    <paper-checkbox checked> label</paper-checkbox>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-checkbox-unchecked-background-color` | Checkbox background color when the input is not checked | `transparent`
		`--paper-checkbox-unchecked-color` | Checkbox border color when the input is not checked | `--primary-text-color`
		`--paper-checkbox-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
		`--paper-checkbox-checked-color` | Checkbox color when the input is checked | `--default-primary-color`
		`--paper-checkbox-checked-ink-color` | Selected/focus ripple color when the input is checked | `--default-primary-color`
		`--paper-checkbox-checkmark-color` | Checkmark color | `white`
		`--paper-checkbox-label-color` | Label color | `--primary-text-color`
		`--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `8px`
		`--paper-checkbox-error-color` | Checkbox color when invalid | `--google-red-500`
		`--paper-checkbox-size` | Size of the checkbox | `18px`
		
		
	*/
	export interface PaperCheckbox  extends Polymer.PaperCheckedElementBehavior
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
