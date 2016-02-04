/// <reference path="../iron/IronJsonpLibraryBehavior.d.ts"/>

declare module google {
	/* 
		Dynamically loads the Google Youtube Iframe API, firing the `api-load` event when ready.
		
		Any number of components can use `<google-youtube-api>` elements, and the library will only be loaded once.
		
		https://developers.google.com/youtube/iframe_api_reference
	*/
	export class GoogleYoutubeApi  extends Polymer.IronJsonpLibraryBehavior
	{
	/*	== EVENTS ==

	Event: 'api-load'
	
Fired when the API library is loaded and available.
 
	*/
	
		/*
		*/
		api;	
		/*
		*/
		callbackName: string;	
		/*
		Name of event fired when library loads.
		*/
		notifyEvent: string;	

	
	}
}
