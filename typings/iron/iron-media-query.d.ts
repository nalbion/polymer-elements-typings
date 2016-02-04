

declare module iron {
	/* 
		`iron-media-query` can be used to data bind to a CSS media query.
		The `query` property is a bare CSS media query.
		The `query-matches` property is a boolean representing whether the page matches that media query.
		
		Example:
		
		    <iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}"></iron-media-query>
	*/
	export class IronMediaQuery 
	{
	
	
		/*
		If true, the query attribute is assumed to be a complete media query
		string rather than a single media feature.
		*/
		full: Boolean;	
		/*
		The CSS media query to evaluate.
		*/
		query: string;	
		/*
		The Boolean return value of the media query.
		*/
		queryMatches: Boolean;	

	
		/*
		*/
		queryChanged();
	
		/*
		*/
		queryHandler(mq);
	
	}
}
