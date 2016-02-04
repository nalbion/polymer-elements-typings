/// <reference path="../iron/IronJsonpLibraryBehavior.d.ts"/>

declare module google {
	/* 
		Dynamically loads the Google Maps JavaScript API, firing the `api-load` event when ready.
		
		#### Example
		
		    <google-maps-api api-key="abc123" version="3.exp"></google-maps-api>
		    <script>
		      var mapsAPI = document.querySelector('google-maps-api');
		      mapsAPI.addEventListener('api-load', function(e) {
		        // this.api === google.maps
		      });
		    </script>
		
		Any number of components can use `<google-maps-api>` elements, and the library will only be loaded once.
	*/
	export class GoogleMapsApi  extends Polymer.IronJsonpLibraryBehavior
	{
	/*	== EVENTS ==

	Event: 'api-load'
	
Fired when the Maps API library is loaded and ready.
 
	*/
	
		/*
		Provides the google.maps JS API namespace.
		*/
		api;	
		/*
		A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
		*/
		apiKey: string;	
		/*
		A Maps API for Business Client ID. To obtain a Maps API for Business Client ID, see developers.google.com/maps/documentation/business/.
		If set, a Client ID will take precedence over an API Key.
		*/
		clientId: string;	
		/*
		The localized language to load the Maps API with. For more information
		see https://developers.google.com/maps/documentation/javascript/basics#Language
		
		Note: the Maps API defaults to the preffered language setting of the browser.
		Use this parameter to override that behavior.
		*/
		language: string;	
		/*
		Name of event fired when library is loaded and available.
		*/
		notifyEvent: string;	
		/*
		If true, sign-in is enabled.
		See https://developers.google.com/maps/documentation/javascript/signedin#enable_sign_in
		*/
		signedIn: Boolean;	
		/*
		Version of the Maps API to use.
		*/
		version: string;	

	
	}
}
