/// <reference path="../paper/PaperInputBehavior.d.ts"/>/// <reference path="../iron/IronFormElementBehavior.d.ts"/>

declare module gold {
	/* 
		`gold-cc-expiration-input` is a  single-line text field with Material Design styling
		for entering a credit card's expiration date
		
		    <gold-cc-expiration-input></gold-cc-expiration-input>
		    <gold-cc-expiration-input value="11/15"></gold-cc-expiration-input>
		
		It may include an optional label, which by default is "Expiration Date".
		
		    <gold-cc-expiration-input label="Date"></gold-cc-expiration-input>
		
		
		### Validation
		
		The input can check whether the entered date is a valid, future date.
		
		The input can be automatically validated as the user is typing by using
		the `auto-validate` and `required` attributes. For manual validation, the
		element also has a `validate()` method, which returns the validity of the
		input as well sets any appropriate error messages and styles.
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
	*/
	export class GoldCcExpirationInput  extends Polymer.PaperInputBehavior,Polymer.IronFormElementBehavior
	{
	
	
		/*
		The label for this input.
		*/
		label: string;	
		/*
		*/
		value: Object;	

	
		/*
		Overidden from Polymer.PaperInputBehavior.
		*/
		validate();
	
	}
}
