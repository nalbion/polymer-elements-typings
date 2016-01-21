
declare module google {

	/* 
		Element for generating a Google Maps Street View Panorama.
		
		##### Example
		
		    <google-streetview-pano
		      pano-id="CWskcsTEZBNXaD8gG-zATA"
		      heading="330"
		      pitch="-2"
		      zoom="0.8"
		      disable-default-ui>
		    </google-streetview-pano>
		
		There are tons of great panoramas on the [Google Maps | Views page](https://www.google.com/maps/views/home?gl=us)
		
		To grab a panorama, look at its url in the address bar. For example:
		
		google.com/maps/views/view/102684927602131521305/photo/**1szTnskrdKIAAAGuu3fZRw**
		
		The hash in bold is the `pano-id`. You'll often need to dial in the `heading`, `pitch` and `zoom` manually.
		
		You can also use the position attribute and set it to a position with a computed value. Example: { lat: 42.345573, lng: -71.098326 }
		
		    <google-streetview-pano
		      position="[[_myComputedPosition()]]"
		      heading="330"
		      pitch="-2"
		      zoom="0.8"
		      disable-default-ui>
		    </google-streetview-pano>
		
		
	*/
	export interface GoogleStreetviewPano 
	{
	

	
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
		If true, disables the auto panning animation
		       
		*/
		disableAutoPan: boolean;
	
		/*
		If true, disables all default UI.
		       
		*/
		disableDefaultUi: boolean;
	
		/*
		The camera heading in degrees relative to true north. True north is 0°, east is 90°, south is 180°, west is 270°.
		       
		*/
		heading: number;
	
		/*
		The localized language to load the Maps API with. For more information
		see https://developers.google.com/maps/documentation/javascript/basics#Language
		
		Note: the Maps API defaults to the preferred language setting of the browser.
		Use this parameter to override that behavior.
		
		       
		*/
		language: string;
	
		/*
		*/
		pano: object;
	
		/*
		Specifies which photosphere to load
		
		
		       
		*/
		panoId: string;
	
		/*
		The camera pitch in degrees, relative to the street view vehicle. Ranges from 90° (directly upwards) to -90° (directly downwards).
		       
		*/
		pitch: number;
	
		/*
		Specifies which position to load
		
		
		       
		*/
		position: Object;
	
		/*
		*/
		rAFid: object;
	
		/*
		Version of the Google Maps API to use.
		
		       
		*/
		version: string;
	
		/*
		Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees.
		       
		*/
		zoom: number;
	

	
		/*
		Reset the pov for the panorama.
		
		*/
		reset();
	
		/*
		Cancel the slow panning animation.
		
		*/
		stop();
	
		/*
		Fired every rAF. Updates the heading to create a slow pan effect
		Will be canceled by mouse enter or calling stop()
		     
		*/
		update();
	

	}

}
