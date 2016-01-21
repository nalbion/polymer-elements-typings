
/// <reference path="../paper-elements/PaperInputBehavior.d.ts"/>

/// <reference path="../iron-elements/IronFormElementBehavior.d.ts"/>

declare module gold {

	/* 
		`gold-zip-input` is a single-line text field with Material Design styling
		for entering a US zip code.
		
		    <gold-zip-input></gold-zip-input>
		
		It may include an optional label, which by default is "Zip Code".
		
		    <gold-zip-input label="Mailing zip code"></gold-zip-input>
		
		### Validation
		
		The input supports both 5 digit zip codes (90210) or the full 9 digit ones,
		separated by a dash (90210-9999).
		
		The input can be automatically validated as the user is typing by using
		the `auto-validate` and `required` attributes. For manual validation, the
		element also has a `validate()` method, which returns the validity of the
		input as well sets any appropriate error messages and styles.
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
		
		
	*/
	export interface GoldZipInput  extends Polymer.PaperInputBehavior,Polymer.IronFormElementBehavior
	{
	

	
		/*
		The label for this input.
		       
		*/
		label: string;
	

	

	}

}
