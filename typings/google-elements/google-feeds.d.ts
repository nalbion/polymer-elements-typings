
declare module google {

	/* 
		Exposes [Google Feeds API](https://developers.google.com/feed/)
		
		<b>Example</b>:
		
		    <template is='dom-bind'>
		      <google-feeds feed='http://www.engadget.com/rss-full.xml'
		      results='{{result}}'></google-feeds>
		      <p>Feed title: <span>{{result.title}}</span></p>
		    </template>
		
		
	*/
	export interface GoogleFeeds 
	{
	/*
	== EVENTS ==

	Event: 'google-feeds-error'
	Params: status: string
Fired when feed load fails
 Event: 'google-feeds-queryerror'
	Params: status: string
Fired when feed query fails
 Event: 'google-feeds-queryresponse'
	Params: entries: object
Fired when feed query succeeds
 Event: 'google-feeds-response'
	Params: feed: object
Fired when feed has been loaded
 Event: 'google-multi-feeds-response'
	Params: feeds: object
Fired when multiple feeds have loaded successfully
 
	*/

	
		/*
		Number of feed items to fetch in fetchFeed
		       
		*/
		count: number;
	
		/*
		url of the feed to fetch.
		       
		*/
		feed: string;
	
		/*
		An array of multiple feeds. Feed will load, and report results in `google-feeds-response` event.
		       
		*/
		feeds: Array<any>;
	
		/*
		Format the data is returned. json(default)|xml|mixed
		Only applies for one feed.
		       
		*/
		format: string;
	
		/*
		True if feeds API is loading an item
		       
		*/
		loading: boolean;
	
		/*
		Query for google.feeds.findFeeds(). Query result will be reported through `google-feeds-queryresponse` event
		       
		*/
		query: string;
	
		/*
		Result of loading a single feed url
		       
		*/
		results: Object;
	

	

	}

}
