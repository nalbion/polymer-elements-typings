/// <reference path="../iron/IronJsonpLibraryBehavior.d.ts"/>

declare module google {
	/* 
		Dynamically loads the legacy Google JavaScript API Loader (https://developers.google.com/loader/).
		
		Fires `api-load` event when ready.
	*/
	export class GoogleLegacyLoader  extends Polymer.IronJsonpLibraryBehavior
	{
	/*	== EVENTS ==

	Event: 'js-api-load'
	
Fired when the API library is loaded and available.
 
	*/
	
		/*
		Wrapper for `google` API namespace.
		*/
		api;	
		/*
		Name of event fired when library is loaded and available.
		*/
		notifyEvent: string;	

	
	}
}
