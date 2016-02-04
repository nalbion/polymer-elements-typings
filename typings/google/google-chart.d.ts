

declare module google {
	/* 
		`google-chart` encapsulates Google Charts as a web component, allowing you to easily visualize
		data. From simple line charts to complex hierarchical tree maps, the chart element provides a
		number of ready-to-use chart types.
		
		    <google-chart
		      type='pie'
		      options='{"title": "Distribution of days in 2001Q1"}'
		      cols='[{"label":"Month", "type":"string"}, {"label":"Days", "type":"number"}]'
		      rows='[["Jan", 31],["Feb", 28],["Mar", 31]]'>
		    </google-chart>
		
		Height and width are specified as style attributes:
		
		    google-chart {
		      height: 300px;
		      width: 50em;
		    }
		
		Data can be provided in one of three ways:
		
		- Via the `cols` and `rows` attributes:
		
		      cols='[{"label":"Mth", "type":"string"}, {"label":"Days", "type":"number"}]'
		      rows='[["Jan", 31],["Feb", 28],["Mar", 31]]'
		
		- Via the `data` attribute, passing in the data directly:
		
		      data='[["Month", "Days"], ["Jan", 31], ["Feb", 28], ["Mar", 31]]'
		
		- Via the `data` attribute, passing in the URL to a resource containing the
		  data, in JSON format:
		
		      data='http://example.com/chart-data.json'
	*/
	export class GoogleChart 
	{
	/*	== EVENTS ==

	Event: 'google-chart-render'
	
Fired when the graph is displayed.

 Event: 'google-chart-select'
	Params: detail: Object, detail.selection: Array<any>
Fired when the user makes a selection in the chart.

 
	*/
	
		/*
		Sets the data columns for this object.
		
		When specifying data with `cols` you must also specify `rows`, and
		not specify `data`.
		
		Example:
		<pre>[{label: "Categories", type: "string"},
		 {label: "Value", type: "number"}]</pre>
		See <a href="https://google-developers.appspot.com/chart/interactive/docs/reference#DataTable_addColumn">Google Visualization API reference (addColumn)</a>
		for column definition format.
		*/
		cols: Array<any>;	
		/*
		Sets the entire dataset for this object.
		Can be used to provide the data directly, or to provide a URL from
		which to request the data.
		
		The data format can be a two-dimensional array or the DataTable format
		expected by Google Charts.
		See <a href="https://google-developers.appspot.com/chart/interactive/docs/reference#DataTable">Google Visualization API reference (DataTable constructor)</a>
		for data table format details.
		
		When specifying data with `data` you must not specify `cols` or `rows`.
		
		Example:
		<pre>[["Categories", "Value"],
		 ["Category 1", 1.0],
		 ["Category 2", 1.1]]</pre>
		*/
		data: Object;	
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
		Sets the data rows for this object.
		
		When specifying data with `rows` you must also specify `cols`, and
		not specify `data`.
		
		Example:
		<pre>[["Category 1", 1.0],
		 ["Category 2", 1.1]]</pre>
		See <a href="https://google-developers.appspot.com/chart/interactive/docs/reference#addrow">Google Visualization API reference (addRow)</a>
		for row format.
		*/
		rows: Array<any>;	
		/*
		Selected datapoint(s) in the map.
		
		An array of objects, each with a numeric row and/or column property.
		`row` and `column` are the zero-based row or column number of an item
		in the data table to select.
		
		To select a whole column, set row to null;
		to select a whole row, set column to null.
		
		Example:
		<pre>
		  [{row:0,column:1}, {row:1, column:null}]
		</pre>
		*/
		selection: Array<any>;	
		/*
		Sets the type of the chart.
		
		Should be one of:
		- `area`, `bar`, `bubble`, `candlestick`, `column`, `combo`, `geo`,
		  `histogram`, `line`, `pie`, `scatter`, `stepped-area`, `treemap`
		
		See <a href="https://google-developers.appspot.com/chart/interactive/docs/gallery">Google Visualization API reference (Chart Gallery)</a> for details.
		*/
		type: string;	

	
		/*
		Draws the chart.
		
		Called automatically on first load and whenever one of the attributes
		changes. Can be called manually to handle e.g. page resizes.
		*/
		drawChart();
	
		/*
		Returns the chart serialized as an image URI.
		
		Call this after the chart is drawn (google-chart-render event).
		*/
		getImageURI();
	
	}
}
