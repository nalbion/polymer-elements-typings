
declare module google {

	/* 
		`google-map-search` provides Google Maps Places API functionality.
		
		See https://developers.google.com/maps/documentation/javascript/places for more
		information on the API.
		
		#### Example:
		
		    <template is="dom-bind">
		      <google-map-search map="[[map]]" query="Pizza" results="{{results}}">
		      </google-map-search>
		      <google-map map="{{map}}" latitude="37.779"
		                  longitude="-122.3892">
		        <template is="dom-repeat" items="{{results}}" as="marker">
		          <google-map-marker latitude="{{marker.latitude}}"
		                             longitude="{{marker.longitude}}">
		            <h2>{{marker.name}}</h2>
		            <span>{{marker.formatted_address}}</span>
		          </google-map-marker>
		        </template>
		      </google-map>
		    </template>
		 
	*/
	export interface GoogleMapSearch 
	{
	/*
	== EVENTS ==

	Event: 'google-map-search-place-detail'
	Params: detail: google.maps.markerplace
Fired when the details of a place are returned.

 Event: 'google-map-search-results'
	Params: detail: array.<{latitude: number, longitude: number}>
Fired when the search element returns a result.

 
	*/

	
		/*
		By default, search is restricted to the currently visible map area.
		Set this to true to search everywhere.
		
		Ignored if `radius` is set.
		       
		*/
		globalSearch: boolean;
	
		/*
		Latitude of the center of the search area.
		Ignored if `globalSearch` is true.
		       
		*/
		latitude: number;
	
		/*
		The lat/lng location.
		       
		*/
		location: Object;
	
		/*
		Longitude of the center of the search area.
		Ignored if `globalSearch` is true.
		       
		*/
		longitude: number;
	
		/*
		The Google map object.
		       
		*/
		map: Object;
	
		/*
		The search query.
		       
		*/
		query: string;
	
		/*
		Search radius, in meters.
		If `latitude` and `longitude` are not specified,
		the center of the currently visible map area is used.
		
		If not set, search will be restricted to the currently visible
		map area, unless `globalSearch` is set to true.
		       
		*/
		radius: number;
	
		/*
		The search results.
		       
		*/
		results: Array<any>;
	
		/*
		Space-separated list of result types.
		The search will only return results of the listed types.
		See https://developers.google.com/places/documentation/supported_types
		for a list of supported types.
		Leave empty or null to search for all result types.
		       
		*/
		types: string;
	

	
		/*
		Fetches details for a given place.
		
		*/
		getDetails(placeId: string);
	
		/*
		Perform a search using for `query` for the search term.
		     
		*/
		search();
	

	}

}
