

declare module Polymer {

	/* 
		  Polymer.IronFormElementBehavior enables a custom element to be included
		  in an `iron-form`.
		
		  
	*/
	export interface IronFormElementBehavior 
	{
	/*
	== EVENTS ==

	Event: 'iron-form-element-register'
	
Fired when the element is added to an `iron-form`.

 Event: 'iron-form-element-unregister'
	
Fired when the element is removed from an `iron-form`.

 
	*/

	
		/*
		The name of this element.
		       
		*/
		name: string;
	
		/*
		Set to true to mark the input as required. If used in a form, a
		custom element that uses this behavior should also use
		Polymer.IronValidatableBehavior and define a custom validation method.
		Otherwise, a `required` element will always be considered valid.
		It's also strongly recommended to provide a visual style for the element
		when its value is invalid.
		       
		*/
		required: boolean;
	
		/*
		The value for this element.
		       
		*/
		value: string;
	

	

	}
}
