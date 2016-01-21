
/// <reference path="../iron-elements/IronJsonpLibraryBehavior.d.ts"/>

declare module google {

	/* 
		Dynamically loads the Google+ JavaScript API, firing the `api-load` event when ready.
		
		Any number of components can use `<google-plusone-api>` elements, and the library will only be loaded once.
		
	*/
	export interface GooglePlusoneApi  extends Polymer.IronJsonpLibraryBehavior
	{
	/*
	== EVENTS ==

	Event: 'js-api-load'
	
Fired when the API library is loaded and available.
 
	*/

	
		/*
		*/
		api;
	
		/*
		Name of event fired when library is loaded and available.
		       
		*/
		notifyEvent: string;
	

	

	}

}
