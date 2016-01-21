
declare module google {

	/* 
		Provides the Google Maps API Directions Service to provide directions
		between a `startAddress` and `endAddress`.
		
		See https://developers.google.com/maps/documentation/javascript/directions for more
		information on the API.
		
		#### Example:
		
		    <template is="dom-bind">
		      <google-map-directions map="{{map}}"
		          start-address="San Francisco"
		          end-address="Mountain View"
		          travel-mode="BICYCLING"
		          waypoints='[{"location": "Palo Alto"}, {"location": "San Mateo"}]'></google-map-directions>
		      <google-map map="{{map}}" latitude="37.779"
		                  longitude="-122.3892"></google-map>
		    </template>
		
		
	*/
	export interface GoogleMapDirections 
	{
	/*
	== EVENTS ==

	Event: 'google-map-response'
	
Fired whenever the directions service returns a result.

 
	*/

	
		/*
		A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
		       
		*/
		apiKey: string;
	
		/*
		End address or latlng for directions to end.
		
		
		*/
		endAddress: string;
	
		/*
		The localized language to load the Maps API with. For more information
		see https://developers.google.com/maps/documentation/javascript/basics#Language
		
		Note: the Maps API defaults to the preffered language setting of the browser.
		Use this parameter to override that behavior.
		       
		*/
		language: string;
	
		/*
		The Google map object.
		
		
		*/
		map: Object;
	
		/*
		Options for the display of results
		       
		*/
		rendererOptions: Object;
	
		/*
		The response from the directions service.
		
		       
		*/
		response: Object;
	
		/*
		Start address or latlng to get directions from.
		
		
		*/
		startAddress: string;
	
		/*
		Travel mode to use.  One of 'DRIVING', 'WALKING', 'BICYCLING', 'TRANSIT'.
		       
		*/
		travelMode: string;
	
		/*
		Array of intermediate waypoints. Directions will be calculated
		from the origin to the destination by way of each waypoint in this array.
		The maximum allowed waypoints is 8, plus the origin, and destination.
		Maps API for Business customers are allowed 23 waypoints,
		plus the origin, and destination.
		Waypoints are not supported for transit directions. Optional.
		
		
		*/
		waypoints: Array<any>;
	

	

	}

}
