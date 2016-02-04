

declare module google {
	/* 
		Element for loading a specific client Google API with the JavaScript client library.
		
		For loading `gapi.client` libraries
		
		##### Example
		
		    <google-client-loader id="shortener"
		      name="urlshortener"
		      version="v1"></google-client-loader>
		
		    <script>
		      var shortener = document.getElementById('shortener');
		      shortener.addEventListener('google-api-load', function(event) {
		        var request = shortener.api.url.get({
		           shortUrl: 'http://goo.gl/fbsS'
		        });
		        request.execute(function(resp) {
		          console.log(resp);
		        });
		      });
		    </script>
	*/
	export class GoogleClientLoader 
	{
	/*	== EVENTS ==

	Event: 'google-api-load'
	
Fired when the requested API is loaded. Override this name
by setting `successEventName`.
 Event: 'google-api-load-error'
	
Fired if an error occurs while loading the requested API. Override this name
by setting `errorEventName`.
 
	*/
	
		/*
		Returns the loaded API.
		*/
		api;	
		/*
		Root URL where to load the API from, e.g. 'http://host/apis'.
		For App Engine dev server this would be something like:
		'http://localhost:8080/_ah/api'.
		Overrides 'appId' if both are specified.
		*/
		apiRoot: string;	
		/*
		App Engine application ID for loading a Google Cloud Endpoints API.
		*/
		appId: string;	
		/*
		Wrapper for `gapi.auth`.
		*/
		auth;	
		/*
		Name of the event fired when there is an error loading the library.
		*/
		errorEventName: string;	
		/*
		Name of the API to load, e.g. 'urlshortener'.
		
		You can find the full list of APIs on the
		<a href="https://developers.google.com/apis-explorer"> Google APIs
		Explorer</a>.
		*/
		name: string;	
		/*
		Name of the event fired when API library is loaded.
		*/
		successEventName: string;	
		/*
		Version of the API to load, e.g. 'v1'.
		*/
		version: string;	

	
	}
}
