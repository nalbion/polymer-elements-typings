/// <reference path="../iron/IronJsonpLibraryBehavior.d.ts"/>

declare module google {
	/* 
		Dynamically loads Google JavaScript API `gapi`, firing the `js-api-load` event when ready.
		
		Any number of components can use `<google-js-api>` elements, and the library will only be loaded once.
		
		##### Example
		
		    <google-js-api></google-js-api>
		    <script>
		      var api = document.querySelector('google-js-api');
		      api.addEventListener('js-api-load', function(e) {
		        console.log('API loaded', gapi);
		      });
		    </script>
	*/
	export class GoogleJsApi  extends Polymer.IronJsonpLibraryBehavior
	{
	/*	== EVENTS ==

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
