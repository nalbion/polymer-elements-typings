
declare module iron {

	/* 
		Renders documentation describing a specific property of an element.
		
		Give it a hydrolysis `PropertyDescriptor` (via `descriptor`), and watch it go!
		
	*/
	export interface IronDocProperty 
	{
	

	
		/*
		Unique anchor ID for deep-linking.
		
		           
		*/
		anchorId: string;
	
		/*
		Whether the property should show a one-liner, or full summary.
		
		Note that this property _is_ reflected as an attribute, but we perform
		the reflection manually. In order to support the CSS transitions, we
		must calculate the element height before setting the attribute.
		           
		*/
		collapsed: boolean;
	
		/*
		The [Hydrolysis](https://github.com/PolymerLabs/hydrolysis)-generated
		element descriptor to display details for.
		
		Alternatively, the element descriptor can be provided as JSON via the text content
		of this element.
		
		
		*/
		descriptor: hydrolysis.propertydescriptor;
	

	

	}

}
