
declare module google {

	/* 
		The `google-map-point` element represents a point on a map. It's used as a child of other
		google-map-* elements.
		
		<b>Example</b>—points defining a semi-translucent blue triangle:
		
		    <google-map latitude="37.77493" longitude="-122.41942">
		      <google-map-poly closed fill-color="blue" fill-opacity=".5">
		        <google-map-point latitude="36.77493" longitude="-121.41942"></google-map-point>
		        <google-map-point latitude="38.77493" longitude="-122.41942"></google-map-point>
		        <google-map-point latitude="36.77493" longitude="-123.41942"></google-map-point>
		      </google-map-poly>
		    </google-map>
		
	*/
	export interface GoogleMapPoint 
	{
	

	
		/*
		The point's latitude coordinate.
		       
		*/
		latitude: number;
	
		/*
		The point's longitude coordinate.
		       
		*/
		longitude: number;
	

	
		/*
		Returns the point as a Google Maps LatLng object.
		
		
		*/
		getPosition();
	

	}

}