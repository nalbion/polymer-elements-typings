

declare module google {
	/* 
		Container element for binding Google Analytics controls to Google Analytics charts.
		
		`<google-analytics-chart>` elements inside a `<google-analytics-dashboard>`
		element will automatically update as control elements (e.g.
		`<google-analytics-view-selector>` or `<google-analytics-date-selector>`)
		update query parameters.
		
		##### Example
		
		    <google-analytics-dashboard>
		
		      <google-analytics-view-selector></google-analytics-view-selector>
		      <google-analytics-date-selector></google-analytics-date-selector>
		
		      <google-analytics-chart
		        metrics="ga:sessions"
		        dimensions="ga:country"
		        sort="-ga:sessions"
		        max-results="5"
		        chart-type="column">
		      </google-analytics-chart>
		
		    </google-analytics-dashboard>
	*/
	export class GoogleAnalyticsDashboard 
	{
	
	
		/*
		True if user has been authorized
		*/
		authorized: Boolean;	
		/*
		The `query` attribute represents the internal query object of this
		dashboard. It is updated when control elements fire the
		`analytics-dashboard-control-change` event and pass along query data.
		*/
		query: Object;	

	
		/*
		The `queryUpdated` method is the callback for whenever the
		`analytics-dashboard-control-change` event is fired. It updates the
		query attribute, which is then sent to child charts.
		*/
		queryUpdated(event: CustomEvent);
	
		/*
		The `updateChildren` method updates each of this dashboards
		`<google-analytics-chart>` element with its current query value.
		*/
		updateChildren();
	
	}
}
