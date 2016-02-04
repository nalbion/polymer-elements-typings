/// <reference path="../iron/IronJsonpLibraryBehavior.d.ts"/>

declare module iron {
	/* 
		Loads specified jsonp library.
		
		Example:
		
		    <iron-jsonp-library
		      library-url="https://apis.google.com/js/plusone.js?onload=%%callback%%"
		      notify-event="api-load"
		      library-loaded="{{loaded}}"></iron-jsonp-library>
		
		Will emit 'api-load' event when loaded, and set 'loaded' to true
		
		Implemented by  Polymer.IronJsonpLibraryBehavior. Use it
		to create specific library loader elements.
	*/
	export class IronJsonpLibrary  extends Polymer.IronJsonpLibraryBehavior
	{
	/*	== EVENTS ==

	Event: '`notifyEvent`'
	
event with name specified in 'notifyEvent' attribute
will fire upon successful load
 Event: '`notifyEvent`'
	
event with name specified in `notifyEvent` attribute
will fire upon successful load2
 
	*/
	
		/*
		Set if library requires specific callback name.
		Name will be automatically generated if not set.
		*/
		callbackName: string;	
		/*
		Not null if library has failed to load
		*/
		libraryErrorMessage: string;	
		/*
		True if library has been successfully loaded
		*/
		libraryLoaded: Boolean;	
		/*
		Library url. Must contain string `%%callback%%`.
		
		`%%callback%%` is a placeholder for jsonp wrapper function name
		
		Ex: https://maps.googleapis.com/maps/api/js?callback=%%callback%%
		*/
		libraryUrl: string;	
		/*
		event with name specified in 'notifyEvent' attribute
		will fire upon successful load
		*/
		notifyEvent: string;	

	
	}
}
