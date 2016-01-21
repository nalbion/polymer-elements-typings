
declare module iron {

	/* 
		Loads Polymer element and behavior documentation using
		[Hydrolysis](https://github.com/PolymerLabs/hydrolysis) and renders a complete
		documentation page including demos (if available).
		
	*/
	export interface IronComponentPage 
	{
	

	
		/*
		The element or behavior that will be displayed on the page. Defaults
		to the element matching the name of the source file.
		           
		*/
		active: string;
	
		/*
		The relative root for determining paths to demos and default source
		detection.
		           
		*/
		base: string;
	
		/*
		Toggle flag to be used when this element is being displayed in the
		Polymer Elements catalog.
		           
		*/
		catalog: boolean;
	
		/*The Hydrolysis behavior descriptors that have been loaded. 
		*/
		docBehaviors: Array<any>;
	
		/*
		Demos for the currently selected element.
		           
		*/
		docDemos: Array<any>;
	
		/*The Hydrolysis element descriptors that have been loaded. 
		*/
		docElements: Array<any>;
	
		/*
		The URL to a precompiled JSON descriptor. If you have precompiled
		and stored a documentation set using Hydrolysis, you can load the
		analyzer directly via AJAX by specifying this attribute.
		
		If a `doc-src` is not specified, it is ignored and the default
		rules according to the `src` attribute are used.
		           
		*/
		docSrc: string;
	
		/*
		The scroll mode for the page. For details about the modes,
		see the mode property in paper-header-panel.
		           
		*/
		scrollMode: string;
	
		/*
		The URL to an import that declares (or transitively imports) the
		elements that you wish to see documented.
		
		If the URL is relative, it will be resolved relative to the master
		document.
		
		If a `src` URL is not specified, it will resolve the name of the
		directory containing this element, followed by `dirname.html`. For
		example:
		
		`awesome-sauce/index.html`:
		
		    <iron-doc-viewer></iron-doc-viewer>
		
		Would implicitly have `src="awesome-sauce.html"`.
		           
		*/
		src: string;
	
		/*
		Whether _all_ dependencies should be loaded and documented.
		
		Turning this on will probably slow down the load process dramatically.
		           
		*/
		transitive: boolean;
	
		/*
		An optional version string.
		           
		*/
		version: string;
	
		/*
		The current view. Can be `docs` or `demo`.
		           
		*/
		view: string;
	

	
		/*
		Renders this element into static HTML for offline use.
		
		This is mostly useful for debugging and one-off documentation generation.
		If you want to integrate doc generation into your build process, you
		probably want to be calling `hydrolysis.Analyzer.analyze()` directly.
		
		
		*/
		marshal();
	

	}

}
