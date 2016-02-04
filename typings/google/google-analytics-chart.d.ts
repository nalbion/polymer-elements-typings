

declare module google {
	/* 
		Element for displaying the results of a Google Analytics query in a
		Google Chart.
		
		##### Example
		
		    <google-analytics-chart
		      type="column"
		      ids="ga:1174"
		      metrics="ga:sessions"
		      dimensions="ga:country"
		      sort="-ga:sessions"
		      max-results="5">
		    </google-analytics-chart>
	*/
	export class GoogleAnalyticsChart 
	{
	
	
		/*
		*/
		data: Object;	
		/*
		*/
		dimensions: string;	
		/*
		*/
		endDate: string;	
		/*
		*/
		filters: string;	
		/*
		*/
		ids: string;	
		/*
		True if the chart is currently loading data.
		*/
		loading: Boolean;	
		/*
		*/
		maxResults: Number;	
		/*
		*/
		metrics: string;	
		/*
		Sets the options for the chart.
		
		Example:
		<pre>{
		  title: "Chart title goes here",
		  hAxis: {title: "Categories"},
		  vAxis: {title: "Values", minValue: 0, maxValue: 2},
		  legend: "none"
		};</pre>
		See <a href="https://google-developers.appspot.com/chart/interactive/docs/gallery">Google Visualization API reference (Chart Gallery)</a>
		for the options available to each chart type.
		*/
		options: Object;	
		/*
		True after the chart has been rendered for the first time.
		*/
		rendered: Boolean;	
		/*
		*/
		samplingLevel: string;	
		/*
		*/
		segment: string;	
		/*
		True if setup is ready
		*/
		setupReady: Boolean;	
		/*
		*/
		sort: string;	
		/*
		google-analytics-query passthrough properties
		See google-analytics-query for documentation
		startDate, endDate, data, ids, metrics, dimensions, sort, filters, segment, samplingLevel, startIndex, maxResults
		*/
		startDate: string;	
		/*
		*/
		startIndex: Number;	
		/*
		Sets the type of the chart.
		
		Should be one of:
		- `area`, `bar`, `column`, `line`, `pie`, `geo`.
		*/
		type: string;	

	
		/*
		*/
		handleResponse(response);
	
		/*
		*/
		setupReadyChanged(newVal, oldVal);
	
	}
}
