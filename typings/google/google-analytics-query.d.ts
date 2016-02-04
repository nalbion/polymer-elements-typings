

declare module google {
	/* 
		Element for querying the Google Analytics Core Reporting API.
		
		##### Example
		
		    <google-analytics-query
		      ids="ga:1174"
		      metrics="ga:sessions"
		      dimensions="ga:country"
		      sort="-ga:sessions"
		      max-results="5">
		    </google-analytics-query>
	*/
	export class GoogleAnalyticsQuery 
	{
	/*	== EVENTS ==

	Event: 'analytics-query-error'
	
Fired when an error occurs while running a query.

 Event: 'analytics-query-success'
	
Fired when a query is successfully run and data has been stored.

 
	*/
	
		/*
		The `data` attribute is the response from a query to the Google
		Analytics Core Reporting API. This value will be updated as
		subsequent requests are made.
		*/
		data: Object;	
		/*
		The `dimensions` attribute is a list of comma-separated dimensions
		for your Analytics data, such as ga:browser,ga:city.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#dimensions">Core Reporting API parameter reference</a> for more details.
		*/
		dimensions: string;	
		/*
		The `endDate` attribute is the end date for fetching Analytics
		data. Requests can specify an end date formatted as YYYY-MM-DD, or
		as a relative date (e.g., today, yesterday, or NdaysAgo where N is a
		positive integer).
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#endDate">Core Reporting API parameter reference</a> for more details.
		*/
		endDate: string;	
		/*
		The `fields` attribute is a selector specifying a subset of
		fields to include in the response.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#fields">Core Reporting API parameter reference</a> for more details.
		*/
		fields: string;	
		/*
		The `filters` attribute is dimension or metric filters that restrict
		the data returned for your request.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters">Core Reporting API parameter reference</a> for more details.
		*/
		filters: string;	
		/*
		The `ids` attribute is the unique table ID of the form ga:XXXX,
		where XXXX is the Analytics view (profile) ID for which the query
		will retrieve the data.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#ids">Core Reporting API parameter reference</a> for more details.
		
		Note: you can find out the `ids` value for any of your Google Analytics account using the <a href="https://ga-dev-tools.appspot.com/explorer/">Google Analytics query explorer</a>.
		*/
		ids: string;	
		/*
		true if data is getting loaded
		*/
		loading: Boolean;	
		/*
		The `maxResults` attribute is the maximum number of rows to include
		in the response.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#maxResults">Core Reporting API parameter reference</a> for more details.
		*/
		maxResults: Number;	
		/*
		The `metrics` attribute is a list of comma-separated metrics,
		such as ga:sessions,ga:bounces.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#metrics">Core Reporting API parameter reference</a> for more details.
		*/
		metrics: string;	
		/*
		The `output` attribute sets the desired output type for the
		Analytics data returned in the response. Acceptable values are json
		and dataTable.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#output">Core Reporting API parameter reference</a> for more details.
		*/
		output: string;	
		/*
		The `samplingLevel` attribute sets the desired sampling level.
		Allowed Values: `DEFAULT`, `FASTER`, `HIGHER_PRECISION`.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#samplingLevel">Core Reporting API parameter reference</a> for more details.
		*/
		samplingLevel: string;	
		/*
		The `segment` attribute segments the data returned for your
		request.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#segment">Core Reporting API parameter reference</a> for more details.
		*/
		segment: string;	
		/*
		True if setup is ready
		*/
		setupReady: Boolean;	
		/*
		The `sort` attribute is a list of comma-separated dimensions
		and metrics indicating the sorting order and sorting direction for
		the returned data.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#sort">Core Reporting API parameter reference</a> for more details.
		*/
		sort: string;	
		/*
		The `startDate` attribute is the start date for fetching Analytics
		data. Requests can specify a start date formatted as YYYY-MM-DD, or
		as a relative date (e.g., today, yesterday, or NdaysAgo where N is a
		positive integer).
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startDate">Core Reporting API parameter reference</a> for more details.
		*/
		startDate: string;	
		/*
		The `startIndex` attribute sets the first row of data to retrieve,
		starting at 1. Use this parameter as a pagination mechanism along
		with the max-results parameter.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startIndex">Core Reporting API parameter reference</a> for more details.
		*/
		startIndex: Number;	

	
		/*
		Query the Google Analytics Core Reporting API.
		*/
		getData();
	
		/*
		*/
		getDataResponseHandler();
	
		/*
		The callback for the query run in `getData`. This is a separate
		function so subclasses can alter how the response is handled.
		*/
		handleResponse(response);
	
		/*
		setData sets data fetched by getData.
		Use it if you override getData response processing
		*/
		setData(data);
	
	}
}
