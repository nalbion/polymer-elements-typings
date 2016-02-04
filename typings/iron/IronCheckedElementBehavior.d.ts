/// <reference path="../iron/IronFormElementBehavior.d.ts"/>
/// <reference path="../iron/IronValidatableBehavior.d.ts"/>


module Polymer {
	/** 
		Use `Polymer.IronCheckedElementBehavior` to implement a custom element
		that has a `checked` property, which can be used for validation if the
		element is also `required`. Element instances implementing this behavior
		will also be registered for use in an `iron-form` element.
	*/
	export interface IronCheckedElementBehavior  extends Polymer.IronFormElementBehavior,Polymer.IronValidatableBehavior
	{
	/*
	== EVENTS ==

	Event: 'iron-change'
	
Fired when the checked state changes.

 
	*/
	
		/**
		Gets or sets the state, `true` is checked and `false` is unchecked.
		*/
		checked: Boolean;
	
		/**
		If true, the button toggles the active state with each tap or press
		of the spacebar.
		*/
		toggles: Boolean;
	
		/** Overriden from Polymer.IronFormElementBehavior
		*/
		value: string;
	

	
	}
}
