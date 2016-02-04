

declare module google {
	/* 
		Element for selecting the start and end date values for queries inside a
		`<google-analytics-dashboard>` element.
		
		##### Example
		
		    <google-analytics-dashboard>
		
		      <google-analytics-date-selector
		        start-date="30daysAgo"
		        end-date="today">
		      </google-analytics-date-selector>
		
		      <google-analytics-chart
		        ids="ga:1174"
		        metrics="ga:sessions"
		        dimensions="ga:date">
		      </google-analytics-chart>
		
		    </google-analytics-dashboard>
	*/
	export class GoogleAnalyticsDateSelector 
	{
	
	
		/*
		The `endDate` attribute is the end date for fetching Analytics
		data. Requests can specify an end date formatted as YYYY-MM-DD, or
		as a relative date (e.g., today, yesterday, or NdaysAgo where N is a
		positive integer).
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#endDate">Core Reporting API parameter reference</a> for more details.
		*/
		endDate: string;	
		/*
		The `maxEndDate` attribute is used as the `max` attribute on the
		end date `<input>`.
		*/
		maxEndDate: string;	
		/*
		The `minStartDate` attribute is used as the `min` attribute on the
		start date `<input>`.
		*/
		minStartDate: string;	
		/*
		The `startDate` attribute is the start date for fetching Analytics
		data. Requests can specify a start date formatted as YYYY-MM-DD, or
		as a relative date (e.g., today, yesterday, or NdaysAgo where N is a
		positive integer).
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startDate">Core Reporting API parameter reference</a> for more details.
		*/
		startDate: string;	

	
		/*
		*/
		endDateChanged(cur, old);
	
		/*
		*/
		startDateChanged(cur, old);
	
	}
}
