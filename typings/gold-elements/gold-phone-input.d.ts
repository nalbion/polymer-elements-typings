
/// <reference path="../paper-elements/PaperInputBehavior.d.ts"/>

/// <reference path="../iron-elements/IronFormElementBehavior.d.ts"/>

declare module gold {

	/* 
		`<gold-phone-input>` is a single-line text field with Material Design styling
		for entering a phone number.
		
		    <gold-phone-input></gold-phone-input>
		
		It may include an optional label, which by default is "Phone number".
		
		    <gold-phone-input label="call this"></gold-phone-input>
		
		### Validation
		
		By default, the phone number is considered to be a US phone number, and
		will be validated according to the pattern `XXX-XXX-XXXX`, where `X` is a
		digit, and `-` is the separating dash. If you want to customize the input
		for a different area code or number pattern, use the `country-code` and
		`phone-number-pattern` attributes
		
		    <gold-phone-input
		        country-code="33"
		        phone-number-pattern="X-XX-XX-XX-XX">
		    </gold-phone-input>
		
		The input can be automatically validated as the user is typing by using
		the `auto-validate` and `required` attributes. For manual validation, the
		element also has a `validate()` method, which returns the validity of the
		input as well sets any appropriate error messages and styles.
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
		
		`--gold-phone-input-country-code` | Mixin applied to the country code span
		
		
	*/
	export interface GoldPhoneInput  extends Polymer.PaperInputBehavior,Polymer.IronFormElementBehavior
	{
	

	
		/*
		The country code that should be recognized and parsed.
		       
		*/
		countryCode: string;
	
		/*
		The label for this input.
		       
		*/
		label: string;
	
		/*
		The format of a valid phone number, including formatting but excluding
		the country code. Use 'X' to denote the digits separated by dashes.
		       
		*/
		phoneNumberPattern: string;
	
		/*
		*/
		value: Object;
	

	
		/*
		Overidden from Polymer.PaperInputBehavior.
		     
		*/
		validate();
	

	}

}
