

module Polymer {
	/** 
		    `Polymer.IronJsonpLibraryBehavior` loads a jsonp library.
		    Multiple components can request same library, only one copy will load.
		
		    Some libraries require a specific global function be defined.
		    If this is the case, specify the `callbackName` property.
		
		    You should use an HTML Import to load library dependencies
		    when possible instead of using this element.
	*/
	export interface IronJsonpLibraryBehavior
	{
	/*
	== EVENTS ==

	Event: '`notifyEvent`'
	
event with name specified in `notifyEvent` attribute
will fire upon successful load2
 
	*/
	
		/**
		Not null if library has failed to load
		*/
		libraryErrorMessage: string;
	
		/**
		True if library has been successfully loaded
		*/
		libraryLoaded: Boolean;
	

	
	}
}
