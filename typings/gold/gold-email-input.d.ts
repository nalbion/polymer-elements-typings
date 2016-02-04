/// <reference path="../paper/PaperInputBehavior.d.ts"/>/// <reference path="../iron/IronFormElementBehavior.d.ts"/>

declare module gold {
	/* 
		`<gold-email-input>` is a single-line text field with Material Design styling
		for entering an email address.
		
		    <gold-email-input></gold-email-input>
		
		It may include an optional label, which by default is "Email".
		
		    <gold-email-input label="your email address"></gold-email-input>
		
		### Validation
		
		The input can be automatically validated as the user is typing by using
		the `auto-validate` and `required` attributes. For manual validation, the
		element also has a `validate()` method, which returns the validity of the
		input as well sets any appropriate error messages and styles.
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
	*/
	export class GoldEmailInput  extends Polymer.PaperInputBehavior,Polymer.IronFormElementBehavior
	{
	
	
		/*
		The label for this input.
		*/
		label: string;	
		/*
		The regular expression used to validate the email. By default, the
		input is of type=email and uses the native input regex, as defined in
		the spec: http://www.w3.org/TR/html-markup/input.email.html#input.email.attrs.value.single.
		You can override this if you want your email to be validated against
		a custom regex. If the empty string, then no validation will be applied.
		*/
		regex: string;	
		/*
		*/
		value: Object;	

	
		/*
		Returns true if the element has a valid value, and sets the visual error
		state.
		*/
		validate();
	
	}
}
