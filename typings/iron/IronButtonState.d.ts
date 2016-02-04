/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>


module Polymer {
	/** 
	*/
	export interface IronButtonState  extends Polymer.IronA11yKeysBehavior
	{
	
	
		/**
		If true, the button is a toggle and is currently in the active state.
		*/
		active: Boolean;
	
		/**
		The aria attribute to be set if the button is a toggle and in the
		active state.
		*/
		ariaActiveAttribute: string;
	
		/**
		*/
		keyBindings: Object;
	
		/**
		True if the element is currently being pressed by a "pointer," which
		is loosely defined as mouse or touch input (but specifically excluding
		keyboard input).
		*/
		pointerDown: Boolean;
	
		/**
		If true, the user is currently holding down the button.
		*/
		pressed: Boolean;
	
		/**
		True if the input device that caused the element to receive focus
		was a keyboard.
		*/
		receivedFocusFromKeyboard: Boolean;
	
		/**
		If true, the button toggles the active state with each tap or press
		of the spacebar.
		*/
		toggles: Boolean;
	

	
	}
}
