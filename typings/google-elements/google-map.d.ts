
/// <reference path="../iron-elements/IronResizableBehavior.d.ts"/>

declare module google {

	/* 
		The `google-map` element renders a Google Map.
		
		<b>Example</b>:
		
		    <style>
		      google-map {
		        height: 600px;
		      }
		    </style>
		    <google-map latitude="37.77493" longitude="-122.41942"></google-map>
		
		<b>Example</b> - add markers to the map and ensure they're in view:
		
		    <google-map latitude="37.77493" longitude="-122.41942" fit-to-markers>
		      <google-map-marker latitude="37.779" longitude="-122.3892"
		          draggable="true" title="Go Giants!"></google-map-marker>
		      <google-map-marker latitude="37.777" longitude="-122.38911"></google-map-marker>
		    </google-map>
		
		<b>Example</b>:
		
		    <google-map disable-default-ui zoom="15"></google-map>
		    <script>
		      var map = document.querySelector('google-map');
		      map.latitude = 37.77493;
		      map.longitude = -122.41942;
		      map.addEventListener('google-map-ready', function(e) {
		        alert('Map loaded!');
		      });
		    </script>
		
		<b>Example</b> - with Google directions, using data-binding inside another Polymer element
		
		    <google-map map="{{map}}"></google-map>
		    <google-map-directions map="{{map}}"
		        start-address="San Francisco" end-address="Mountain View">
		    </google-map-directions>
		
		
	*/
	export interface GoogleMap  extends Polymer.IronResizableBehavior
	{
	/*
	== EVENTS ==

	Event: 'google-map-click'
	Params: event: google.maps.mouseevent
Fired when the user clicks on the map (but not when they click on a marker, infowindow, or
other object). Requires the clickEvents attribute to be true.
 Event: 'google-map-dblclick'
	Params: event: google.maps.mouseevent
Fired when the user double-clicks on the map. Note that the google-map-click event will also fire,
right before this one. Requires the clickEvents attribute to be true.
 Event: 'google-map-drag'
	
Fired repeatedly while the user drags the map. Requires the dragEvents attribute to be true.
 Event: 'google-map-dragend'
	
Fired when the user stops dragging the map. Requires the dragEvents attribute to be true.
 Event: 'google-map-dragstart'
	
Fired when the user starts dragging the map. Requires the dragEvents attribute to be true.
 Event: 'google-map-mousemove'
	Params: event: google.maps.mouseevent
Fired whenever the user's mouse moves over the map container. Requires the mouseEvents attribute to
be true.
 Event: 'google-map-mouseout'
	Params: event: google.maps.mouseevent
Fired when the user's mouse exits the map container. Requires the mouseEvents attribute to be true.
 Event: 'google-map-mouseover'
	Params: event: google.maps.mouseevent
Fired when the user's mouse enters the map container. Requires the mouseEvents attribute to be true.
 Event: 'google-map-ready'
	
Fired when the Maps API has fully loaded.
 Event: 'google-map-rightclick'
	Params: event: google.maps.mouseevent
Fired when the DOM `contextmenu` event is fired on the map container. Requires the clickEvents
attribute to be true.
 
	*/

	
		/*
		Additional map options for google.maps.Map constructor.
		Use to specify additional options we do not expose as
		properties.
		Ex: `<google-map additional-map-options='{"mapTypeId":"satellite"}'>`
		
		Note, you can't use API enums like `google.maps.ControlPosition.TOP_RIGHT`
		when using this property as an HTML attribute. Instead, use the actual
		value (e.g. `3`) or set `.additionalMapOptions` in JS rather than using
		the attribute.
		       
		*/
		additionalMapOptions: Object;
	
		/*
		A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
		       
		*/
		apiKey: string;
	
		/*
		When true, map *click events are automatically registered.
		       
		*/
		clickEvents: boolean;
	
		/*
		A Maps API for Business Client ID. To obtain a Maps API for Business Client ID, see developers.google.com/maps/documentation/business/.
		If set, a Client ID will take precedence over an API Key.
		       
		*/
		clientId: string;
	
		/*
		If set, removes the map's default UI controls.
		       
		*/
		disableDefaultUi: boolean;
	
		/*
		If true, prevent the user from zooming the map interactively.
		       
		*/
		disableZoom: boolean;
	
		/*
		When true, map drag* events are automatically registered.
		       
		*/
		dragEvents: boolean;
	
		/*
		If set, the zoom level is set such that all markers (google-map-marker children) are brought into view.
		       
		*/
		fitToMarkers: boolean;
	
		/*
		A kml file to load.
		       
		*/
		kml: string;
	
		/*
		The localized language to load the Maps API with. For more information
		see https://developers.google.com/maps/documentation/javascript/basics#Language
		
		Note: the Maps API defaults to the preffered language setting of the browser.
		Use this parameter to override that behavior.
		       
		*/
		language: string;
	
		/*
		A latitude to center the map on.
		       
		*/
		latitude: number;
	
		/*
		A longitude to center the map on.
		       
		*/
		longitude: number;
	
		/*
		A Maps API object.
		       
		*/
		map: Object;
	
		/*
		Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
		       
		*/
		mapType: string;
	
		/*
		The markers on the map.
		       
		*/
		markers: Array<any>;
	
		/*
		A maximum zoom level which will be displayed on the map.
		       
		*/
		maxZoom: number;
	
		/*
		A minimum zoom level which will be displayed on the map.
		       
		*/
		minZoom: number;
	
		/*
		When true, map mouse* events are automatically registered.
		       
		*/
		mouseEvents: boolean;
	
		/*
		When set, prevents the map from tilting (when the zoom level and viewport supports it).
		       
		*/
		noAutoTilt: boolean;
	
		/*
		The non-marker objects on the map.
		       
		*/
		objects: Array<any>;
	
		/*
		If true, sign-in is enabled.
		See https://developers.google.com/maps/documentation/javascript/signedin#enable_sign_in
		       
		*/
		signedIn: boolean;
	
		/*
		If set, all other info windows on markers are closed when opening a new one.
		       
		*/
		singleInfoWindow: boolean;
	
		/*
		If set, custom styles can be applied to the map.
		For style documentation see developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
		       
		*/
		styles: Object;
	
		/*
		Version of the Google Maps API to use.
		       
		*/
		version: string;
	
		/*
		A zoom level to set the map to.
		       
		*/
		zoom: number;
	

	
		/*
		Clears all markers from the map.
		
		
		*/
		clear();
	
		/*
		Explicitly resizes the map, updating its center. This is useful if the
		map does not show after you have unhidden it.
		
		
		*/
		resize();
	

	}

}
