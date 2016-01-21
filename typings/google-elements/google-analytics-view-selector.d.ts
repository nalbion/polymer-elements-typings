
declare module google {

	/* 
		Element for selecting the view ID (ids) value for queries inside a
		`<google-analytics-dashboard>` element.
		
		##### Example
		
		    <google-analytics-dashboard>
		
		      <google-analytics-view-selector></google-analytics-view-selector>
		
		      <google-analytics-chart
		        metrics="ga:sessions"
		        dimensions="ga:date">
		      </google-analytics-chart>
		
		    </google-analytics-dashboard>
		
		
	*/
	export interface GoogleAnalyticsViewSelector 
	{
	/*
	== EVENTS ==

	Event: 'analytics-dashboard-control-change'
	Params: query: Object
Fired when the users changes the view

 
	*/

	
		/*
		The `account` attribute is the currently selected account.
		
		
		*/
		account: Object;
	
		/*
		The `ids` attribute, when found is used to preselect the chosen
		account, property, and view.
		
		See the <a href="https://developers.google.com/analytics/devguides/reporting/core/v3/reference#ids">Core Reporting API parameter reference</a> for more details.
		
		
		*/
		ids: string;
	
		/*
		The `property` attribute is the currently selected property.
		
		
		*/
		property: Object;
	
		/*
		True if setup is ready
		
		
		*/
		setupReady: boolean;
	
		/*
		The `summaries` attribute contains an account summaries utility object
		with various helper methods for quickly getting account data.
		
		See the <a href="https://github.com/googleanalytics/javascript-api-utils">Github repo</a> for more details.
		
		
		*/
		summaries: Object;
	
		/*
		The `view` attribute is the currently selected view.
		
		
		*/
		view: Object;
	

	
		/*
		*/
		accountChanged(newAccount, oldAccount);
	
		/*
		Fire a change event passing all the currently stored data.
		       
		*/
		fireChangeEvent();
	
		/*
		*/
		idsChanged(newIds, oldIds);
	
		/*
		*/
		propertyChanged(newProperty, oldProperty);
	
		/*
		*/
		setupReadyChanged(newVal, oldVal);
	
		/*
		The `updateAccount` method is bound to the change event on the
		account `<select>`. It updates the property and view `<select>`s based
		on the new account data. It also updates the `ids` attribute.
		       
		*/
		updateAccount();
	
		/*
		The `updateProperty` method is bound to the change event on the
		property `<select>`. It updates the view `<select>` based
		on the new property data. It also updates the `ids` attribute.
		       
		*/
		updateProperty();
	
		/*
		The `updateView` method is bound to the change event on the
		view `<select>`. It updates the `ids` attribute.
		       
		*/
		updateView();
	
		/* this.view = Path.get('views[0]').getValueFrom(newProperty);
		*/
		viewChanged(newView, oldView);
	

	}

}
