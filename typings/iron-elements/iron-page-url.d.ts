
declare module iron {

	/* 
		
		The `iron-page-url` element manages binding to and from the current URL.
		
		iron-page-url is the first, and lowest level element in the Polymer team's
		routing system. This is a beta release of iron-page-url as we continue work
		on higher level elements, and as such iron-page-url may undergo breaking
		changes.
		
		#### Properties
		
		When the URL is: `/search?query=583#details` iron-page-url's properties will be:
		
		  - path: `'/search'`
		  - query: `'query=583'`
		  - hash: `'details'`
		
		These bindings are bidirectional. Modifying them will in turn modify the URL.
		
		iron-page-url is only active while it is attached to the document.
		
		#### Links
		
		While iron-page-url is active in the document it will intercept clicks on links
		within your site, updating the URL pushing the updated URL out through the
		databinding system. iron-page-url only intercepts clicks with the intent to
		open in the same window, so middle mouse clicks and ctrl/cmd clicks work fine.
		
		You can customize this behavior with the `urlSpaceRegex`.
		
		#### Dwell Time
		
		iron-page-url protects against accidental history spamming by only adding
		entries to the user's history if the URL stays unchanged for `dwellTime`
		milliseconds.
		
		
	*/
	export interface IronPageUrl 
	{
	

	
		/*
		If the user was on a URL for less than `dwellTime` milliseconds, it
		won't be added to the browser's history, but instead will be replaced
		by the next entry.
		
		This is to prevent large numbers of entries from clogging up the user's
		browser history. Disable by setting to a negative number.
		       
		*/
		dwellTime: number;
	
		/*
		The hash component of the URL.
		       
		*/
		hash: string;
	
		/*
		The pathname component of the URL.
		       
		*/
		path: string;
	
		/*
		The query string portion of the URL.
		       
		*/
		query: string;
	
		/*
		A regexp that defines the set of URLs that should be considered part
		of this web app.
		
		Clicking on a link that matches this regex won't result in a full page
		navigation, but will instead just update the URL state in place.
		
		This regexp is given everything after the origin in an absolute
		URL. So to match just URLs that start with /search/ do:
		    url-space-regex="^/search/"
		
		
		*/
		urlSpaceRegex: (string|regexp);
	

	

	}

}
