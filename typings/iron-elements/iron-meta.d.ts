
declare module iron {

	/* 
		`iron-meta` is a generic element you can use for sharing information across the DOM tree.
		It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern) such that any
		instance of iron-meta has access to the shared
		information. You can use `iron-meta` to share whatever you want (or create an extension
		[like x-meta] for enhancements).
		
		The `iron-meta` instances containing your actual data can be loaded in an import,
		or constructed in any way you see fit. The only requirement is that you create them
		before you try to access them.
		
		Examples:
		
		If I create an instance like this:
		
		    <iron-meta key="info" value="foo/bar"></iron-meta>
		
		Note that value="foo/bar" is the metadata I've defined. I could define more
		attributes or use child nodes to define additional metadata.
		
		Now I can access that element (and it's metadata) from any iron-meta instance
		via the byKey method, e.g.
		
		    meta.byKey('info').getAttribute('value');
		
		Pure imperative form would be like:
		
		    document.createElement('iron-meta').byKey('info').getAttribute('value');
		
		Or, in a Polymer element, you can include a meta in your template:
		
		    <iron-meta id="meta"></iron-meta>
		    ...
		    this.$.meta.byKey('info').getAttribute('value');
		
		
	*/
	export interface IronMeta 
	{
	

	
		/*
		The key used to store `value` under the `type` namespace.
		         
		*/
		key: string;
	
		/*
		Array of all meta-data values for the given type.
		         
		*/
		list: Array<any>;
	
		/*
		If true, `value` is set to the iron-meta instance itself.
		         
		*/
		self: boolean;
	
		/*
		The type of meta-data.  All meta-data of the same type is stored
		together.
		         
		*/
		type: string;
	
		/*
		The meta-data to store or retrieve.
		         
		*/
		value: Object;
	

	
		/*
		Retrieves meta data value by key.
		
		
		*/
		byKey(key: string);
	
		/*
		Only runs if someone invokes the factory/constructor directly
		e.g. `new Polymer.IronMeta()`
		
		
		*/
		factoryImpl(config: {type: (string|undefined), key: (string|undefined), value}=);
	

	}

}
