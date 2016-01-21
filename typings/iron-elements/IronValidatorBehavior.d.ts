

declare module Polymer {

	/* 
		Use `Polymer.IronValidatorBehavior` to implement a custom input/form validator. Element
		instances implementing this behavior will be registered for use in elements that implement
		`Polymer.IronValidatableBehavior`.
		
		
	*/
	export interface IronValidatorBehavior 
	{
	

	
		/*
		Name for this validator, used by `Polymer.IronValidatableBehavior` to lookup this element.
		       
		*/
		validatorName: string;
	
		/*
		Namespace for this validator.
		       
		*/
		validatorType: string;
	

	
		/*
		Implement custom validation logic in this function.
		
		*/
		validate(values: Object);
	

	}
}
