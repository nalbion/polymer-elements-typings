
declare module iron {

	/* 
		Renders documentation describing an element's API.
		
		`iron-doc-viewer` renders element and behavior descriptions as extracted by
		[Hydrolysis](https://github.com/PolymerLabs/hydrolysis). You can provide them
		either via binding...
		
		    <iron-doc-viewer descriptor="{{elementDescriptor}}"></iron-doc-viewer>
		
		...or by placing the element descriptor in JSON as the text content of an
		`iron-doc-viewer`:
		
		    <iron-doc-viewer>
		      {
		        "is": "awesome-sauce",
		        "properties": [
		          {"name": "isAwesome", "type": "boolean", "desc": "Is it awesome?"},
		        ]
		      }
		    </iron-doc-viewer>
		
		However, be aware that due to current limitations in Polymer 0.8, _changes_ to
		the text content will not be respected, only the initial value will be loaded.
		If you wish to update the documented element, please set it via the `descriptor`
		property.
		
		
	*/
	export interface IronDocViewer 
	{
	/*
	== EVENTS ==

	Event: 'iron-doc-viewer-component-selected'
	Params: detail: string
Broadcast when another component is clicked on
 
	*/

	
		/*
		The [Hydrolysis](https://github.com/PolymerLabs/hydrolysis)-generated
		element descriptor to display details for.
		
		Alternatively, the element descriptor can be provided as JSON via the text content
		of this element.
		
		
		*/
		descriptor: hydrolysis.elementdescriptor;
	
		/*
		Prefix for fragment identifiers used in anchors.
		For static routing `iron-component-page` can
		set this to a string identifying the current component.
		           
		*/
		prefix: string;
	

	
		/*
		Scrolls to the currently selected anchor, as identified
		by the URL hash. Whichever element or script is in charge
		of routing should call this method on initial page load and
		on hashchange events.
		         
		*/
		scrollToAnchor(hash);
	

	}

}
