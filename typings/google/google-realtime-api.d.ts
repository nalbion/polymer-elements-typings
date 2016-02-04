/// <reference path="../iron/IronJsonpLibraryBehavior.d.ts"/>

declare module google {
	/* 
		Dynamically loads the Google Drive Realtime API, firing the `api-load` event when ready.
		
		Any number of components can use `<google-realtime-api>` elements, and the library will only be loaded once.
	*/
	export class GoogleRealtimeApi  extends Polymer.IronJsonpLibraryBehavior
	{
	/*	== EVENTS ==

	Event: 'api-load'
	
Fired when the API library is loaded and available.
 
	*/
	
		/*
		Returns `gapi.drive.realtime`
		*/
		api;	
		/*
		Name of event fired when library is loaded and available.
		*/
		notifyEvent: string;	

	
	}
}
