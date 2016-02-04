/// <reference path="../paper/PaperInputBehavior.d.ts"/>/// <reference path="../iron/IronValidatableBehavior.d.ts"/>/// <reference path="../iron/IronFormElementBehavior.d.ts"/>

declare module gold {
	/* 
		`gold-cc-input` is a single-line text field with Material Design styling
		for entering a credit card number. As the user types, the number will be
		formatted by adding a space every 4 digits.
		
		    <gold-cc-input></gold-cc-input>
		
		It may include an optional label, which by default is "Card number".
		
		    <gold-cc-input label="CC"></gold-cc-input>
		
		### Validation
		
		The input can detect whether a credit card number is valid, and the type
		of credit card it is, using the Luhn checksum. See `http://jquerycreditcardvalidator.com/`
		for more information.
		
		The input can be automatically validated as the user is typing by using
		the `auto-validate` and `required` attributes. For manual validation, the
		element also has a `validate()` method, which returns the validity of the
		input as well sets any appropriate error messages and styles.
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
	*/
	export class GoldCcInput  extends Polymer.PaperInputBehavior,Polymer.IronValidatableBehavior,Polymer.IronFormElementBehavior
	{
	
	
		/*
		The type of the credit card, if it is valid. Empty otherwise.
		*/
		cardType: string;	
		/*
		The label for this input.
		*/
		label: string;	
		/*
		*/
		value: Object;	

	
		/*
		Returns true if the element has a valid value, and sets the visual
		error state.
		*/
		validate();
	
	}
}
