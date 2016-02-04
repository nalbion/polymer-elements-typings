/// <reference path="../paper/PaperInputBehavior.d.ts"/>/// <reference path="../iron/IronFormElementBehavior.d.ts"/>

declare module gold {
	/* 
		`gold-cc-cvc-input` is a single-line text field with Material Design styling
		for entering a credit card's CVC (Card Verification Code). It supports both
		4-digit Amex CVCs and non-Amex 3-digit CVCs
		
		    <gold-cc-cvc-input></gold-cc-cvc-input>
		
		    <gold-cc-cvc-input card-type="amex"></gold-cc-cvc-input>
		
		It may include an optional label, which by default is "CVC".
		
		    <gold-cc-cvc-input label="Card Verification Value"></gold-cc-cvc-input>
		
		It can be used together with a `gold-cc-input` by binding the `cardType` property:
		
		    <gold-cc-input card-type="{{cardType}}"></gold-cc-input>
		    <gold-cc-cvc-input card-type="[[cardType]]"></gold-cc-cvc-input>
		
		### Validation
		
		The input considers a valid amex CVC to be 4 digits long, and 3 digits otherwise.
		The `amex` attribute can also be bound to a `gold-cc-input`'s `card-type` attribute.
		
		The input can be automatically validated as the user is typing by using
		the `auto-validate` and `required` attributes. For manual validation, the
		element also has a `validate()` method, which returns the validity of the
		input as well sets any appropriate error messages and styles.
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
	*/
	export class GoldCcCvcInput  extends Polymer.PaperInputBehavior,Polymer.IronFormElementBehavior
	{
	
	
		/*
		The type of card that the CVC is for.
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
