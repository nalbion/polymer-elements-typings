

declare module google {
	/* 
		The `google-map-marker` element represents a map marker. It is used as a
		child of `google-map`.
		
		<b>Example</b>:
		
		    <google-map latitude="37.77493" longitude="-122.41942">
		      <google-map-marker latitude="37.779" longitude="-122.3892"
		          title="Go Giants!"></google-map-marker>
		    </google-map>
		
		<b>Example</b> - marker with info window (children create the window content):
		
		    <google-map-marker latitude="37.77493" longitude="-122.41942">
		      <img src="image.png">
		    </google-map-marker>
		
		<b>Example</b> - a draggable marker:
		
		    <google-map-marker latitude="37.77493" longitude="-122.41942"
		         draggable="true"></google-map-marker>
		
		<b>Example</b> - hide a marker:
		
		    <google-map-marker latitude="37.77493" longitude="-122.41942"
		        hidden></google-map-marker>
	*/
	export class GoogleMapMarker 
	{
	/*	== EVENTS ==

	Event: 'google-map-marker-click'
	Params: event: google.maps.MouseEvent
Fired when the marker icon was clicked. Requires the clickEvents attribute to be true.
 Event: 'google-map-marker-close'
	
Fired when the close button of the infowindow is pressed.
 Event: 'google-map-marker-dblclick'
	Params: event: google.maps.MouseEvent
Fired when the marker icon was double clicked. Requires the clickEvents attribute to be true.
 Event: 'google-map-marker-drag'
	
Fired repeatedly while the user drags the marker. Requires the dragEvents attribute to be true.
 Event: 'google-map-marker-dragend'
	
Fired when the user stops dragging the marker. Requires the dragEvents attribute to be true.
 Event: 'google-map-marker-dragstart'
	
Fired when the user starts dragging the marker. Requires the dragEvents attribute to be true.
 Event: 'google-map-marker-mousedown'
	Params: event: google.maps.MouseEvent
Fired for a mousedown on the marker. Requires the mouseEvents attribute to be true.
 Event: 'google-map-marker-mousemove'
	Params: event: google.maps.MouseEvent
Fired when the DOM `mousemove` event is fired on the marker. Requires the mouseEvents
attribute to be true.
 Event: 'google-map-marker-mouseout'
	Params: event: google.maps.MouseEvent
Fired when the mouse leaves the area of the marker icon. Requires the mouseEvents attribute to be
true.
 Event: 'google-map-marker-mouseover'
	Params: event: google.maps.MouseEvent
Fired when the mouse enters the area of the marker icon. Requires the mouseEvents attribute to be
true.
 Event: 'google-map-marker-mouseup'
	Params: event: google.maps.MouseEvent
Fired for a mouseup on the marker. Requires the mouseEvents attribute to be true.

 Event: 'google-map-marker-open'
	
Fired when an infowindow is opened.
 Event: 'google-map-marker-rightclick'
	Params: event: google.maps.MouseEvent
Fired for a rightclick on the marker. Requires the clickEvents attribute to be true.
 
	*/
	
		/*
		A animation for the marker. "DROP" or "BOUNCE". See
		https://developers.google.com/maps/documentation/javascript/examples/marker-animations.
		*/
		animation: string;	
		/*
		When true, marker *click events are automatically registered.
		*/
		clickEvents: Boolean;	
		/*
		When true, marker drag* events are automatically registered.
		*/
		dragEvents: Boolean;	
		/*
		Image URL for the marker icon.
		*/
		icon: Object;	
		/*
		A Google Map Infowindow object.
		*/
		info: Object;	
		/*
		The marker's latitude coordinate.
		*/
		latitude: Number;	
		/*
		The marker's longitude coordinate.
		*/
		longitude: Number;	
		/*
		The Google map object.
		*/
		map: Object;	
		/*
		A Google Maps marker object.
		*/
		marker: Object;	
		/*
		When true, marker mouse* events are automatically registered.
		*/
		mouseEvents: Boolean;	
		/*
		Specifies whether the InfoWindow is open or not
		*/
		open: Boolean;	
		/*
		Z-index for the marker icon.
		*/
		zIndex: Number;	

	
	}
}
