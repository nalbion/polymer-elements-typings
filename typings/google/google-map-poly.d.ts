

declare module google {
	/* 
		The `google-map-poly` element represents a series of connected line segments (aka a polyline) which
		may also be closed to form a polygon (provided there are at least three points). It is used as a
		child of `google-map` and will contain at least two `google-map-point` child elements.
		
		<b>Example</b>—a simple line:
		
		    <google-map latitude="37.77493" longitude="-122.41942">
		      <google-map-poly>
		        <google-map-point latitude="37.77493" longitude="-122.41942"></google-map-point>
		        <google-map-point latitude="38.77493" longitude="-123.41942"></google-map-point>
		      </google-map-poly>
		    </google-map>
		
		<b>Example</b>—a semi-translucent blue triangle:
		
		    <google-map latitude="37.77493" longitude="-122.41942">
		      <google-map-poly closed fill-color="blue" fill-opacity=".5">
		        <google-map-point latitude="36.77493" longitude="-121.41942"></google-map-point>
		        <google-map-point latitude="38.77493" longitude="-122.41942"></google-map-point>
		        <google-map-point latitude="36.77493" longitude="-123.41942"></google-map-point>
		      </google-map-poly>
		    </google-map>
	*/
	export class GoogleMapPoly 
	{
	/*	== EVENTS ==

	Event: 'google-map-poly-click'
	Params: event: google.maps.PolyMouseEvent
Fired when the DOM `click` event is fired on the poly. Requires the clickEvents attribute to
be true.
 Event: 'google-map-poly-dblclick'
	Params: event: google.maps.PolyMouseEvent
Fired when the DOM `dblclick` event is fired on the poly. Requires the clickEvents attribute
to be true.
 Event: 'google-map-poly-drag'
	Params: event: google.maps.MouseEvent
Fired repeatedly while the user drags the poly. Requires the dragEvents attribute to be true.
 Event: 'google-map-poly-dragend'
	Params: event: google.maps.MouseEvent
Fired when the user stops dragging the poly. Requires the dragEvents attribute to be true.
 Event: 'google-map-poly-dragstart'
	Params: event: google.maps.MouseEvent
Fired when the user starts dragging the poly. Requires the dragEvents attribute to be true.
 Event: 'google-map-poly-mousedown'
	Params: event: google.maps.PolyMouseEvent
Fired when the DOM `mousedown` event is fired on the poly. Requires the mouseEvents attribute
to be true.
 Event: 'google-map-poly-mousemove'
	Params: event: google.maps.PolyMouseEvent
Fired when the DOM `mousemove` event is fired on the poly. Requires the mouseEvents attribute
to be true.
 Event: 'google-map-poly-mouseout'
	Params: event: google.maps.PolyMouseEvent
Fired on poly mouseout. Requires the mouseEvents attribute to be true.
 Event: 'google-map-poly-mouseover'
	Params: event: google.maps.PolyMouseEvent
Fired on poly mouseover. Requires the mouseEvents attribute to be true.
 Event: 'google-map-poly-mouseup'
	Params: event: google.maps.PolyMouseEvent
Fired when the DOM `mouseup` event is fired on the poly. Requires the mouseEvents attribute
to be true.
 Event: 'google-map-poly-path-built'
	Params: path: MVCArray.<LatLng>
Fired when the `path` property is built based on child `google-map-point` elements, either
initially or when they are changed.
 Event: 'google-map-poly-path-updated'
	Params: path: MVCArray.<LatLng>
Fired when the user finishes adding vertices to the poly. The host component can use the
provided path to rebuild its list of points.
 Event: 'google-map-poly-rightclick'
	Params: event: google.maps.PolyMouseEvent
Fired when the poly is right-clicked on. Requires the clickEvents attribute to be true.
 
	*/
	
		/*
		When true, the poly will generate mouse events.
		*/
		clickable: Boolean;	
		/*
		When true, the google-map-poly-*click events will be automatically registered.
		*/
		clickEvents: Boolean;	
		/*
		When true, the path will be closed by connecting the last point to the first one and
		treating the poly as a polygon.
		*/
		closed: Boolean;	
		/*
		When true, the google-map-poly-drag* events will be automatically registered.
		*/
		dragEvents: Boolean;	
		/*
		When true, the poly may be dragged to a new position.
		*/
		draggable: Boolean;	
		/*
		When true, the poly's vertices may be individually moved or new ones added.
		*/
		editable: Boolean;	
		/*
		When true, indicates that the user has begun editing the poly path (adding vertices).
		*/
		editing: Boolean;	
		/*
		If the path is closed, the polygon fill color. All CSS3 colors are supported except for
		extended named colors.
		*/
		fillColor: string;	
		/*
		If the path is closed, the polygon fill opacity (between 0.0 and 1.0).
		*/
		fillOpacity: Number;	
		/*
		When true, the poly's edges are interpreted as geodesic and will follow the curvature of
		the Earth. When not set, the poly's edges are rendered as straight lines in screen space.
		Note that the poly of a geodesic poly may appear to change when dragged, as the dimensions
		are maintained relative to the surface of the earth.
		*/
		geodesic: Boolean;	
		/*
		If the path is not closed, the icons to be rendered along the polyline.
		*/
		icons: Array<any>;	
		/*
		The Google map object.
		*/
		map: Object;	
		/*
		When true, the google-map-poly-mouse* events will be automatically registered.
		*/
		mouseEvents: Boolean;	
		/*
		An array of the Google Maps LatLng objects that define the poly shape.
		*/
		path: Object;	
		/*
		A Google Maps polyline or polygon object (depending on value of "closed" attribute).
		*/
		poly: Object;	
		/*
		The color to draw the poly's stroke with. All CSS3 colors are supported except for extended
		named colors.
		*/
		strokeColor: string;	
		/*
		The stroke opacity (between 0.0 and 1.0).
		*/
		strokeOpacity: Number;	
		/*
		The stroke position (center, inside, or outside).
		*/
		strokePosition: string;	
		/*
		The stroke width in pixels.
		*/
		strokeWeight: Number;	
		/*
		The Z-index relative to other objects on the map.
		*/
		zIndex: Number;	

	
	}
}
