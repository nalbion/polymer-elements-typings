
/// <reference path="../iron-elements/IronValidatableBehavior.d.ts"/>

declare module iron {

	/* 
		`<iron-input>` adds two-way binding and custom validators using `Polymer.IronValidatorBehavior`
		to `<input>`.
		
		### Two-way binding
		
		By default you can only get notified of changes to an `input`'s `value` due to user input:
		
		    <input value="{{myValue::input}}">
		
		`iron-input` adds the `bind-value` property that mirrors the `value` property, and can be used
		for two-way data binding. `bind-value` will notify if it is changed either by user input or by script.
		
		    <input is="iron-input" bind-value="{{myValue}}">
		
		### Custom validators
		
		You can use custom validators that implement `Polymer.IronValidatorBehavior` with `<iron-input>`.
		
		    <input is="iron-input" validator="my-custom-validator">
		
		### Stopping invalid input
		
		It may be desirable to only allow users to enter certain characters. You can use the
		`prevent-invalid-input` and `allowed-pattern` attributes together to accomplish this. This feature
		is separate from validation, and `allowed-pattern` does not affect how the input is validated.
		
		    <!-- only allow characters that match [0-9] -->
		    <input is="iron-input" prevent-invalid-input allowed-pattern="[0-9]">
		
		
	*/
	export interface IronInput  extends Polymer.IronValidatableBehavior
	{
	/*
	== EVENTS ==

	Event: 'iron-input-validate'
	
  The `iron-input-validate` event is fired whenever `validate()` is called.
   
	*/

	
		/*
		Regular expression expressing a set of characters to enforce the validity of input characters.
		The recommended value should follow this format: `[a-ZA-Z0-9.+-!;:]` that list the characters 
		allowed as input.
		       
		*/
		allowedPattern: string;
	
		/*
		Use this property instead of `value` for two-way data binding.
		       
		*/
		bindValue: string;
	
		/*
		Set to true to prevent the user from entering invalid input. The new input characters are
		matched with `allowedPattern` if it is set, otherwise it will use the `type` attribute (only
		supported for `type=number`).
		       
		*/
		preventInvalidInput: boolean;
	

	
		/*
		Returns true if `value` is valid. The validator provided in `validator` will be used first,
		then any constraints.
		
		*/
		validate();
	

	}

}
