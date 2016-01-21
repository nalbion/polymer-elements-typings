
declare module google {

	/* 
		Element for interacting with Google Sheets.
		
		`<google-sheets>` pulls cell data from the Google Sheet specified by `key`.
		A spreadsheet's key can be found in the URL when viewing it in google docs (e.g. `docs.google.com/spreadsheet/ccc?key=<KEY>#gid=12345`).
		
		Optionally, pass the `tab-id` attribute to specify a particular worksheet tab in the spreadsheet. For example, the first tab would be `tab-id="1"`. If `tab` is updated at a later time, the underlying data is also updated. **API calls are cached** as to not make extraneous calls.
		
		See [developers.google.com/google-apps/spreadsheets](https://developers.google.com/google-apps/spreadsheets) for full Spreadsheets API documentation.
		
		#### Example
		
		    <google-sheets key="..." tab-id="1" client-id="..."></google-sheets>
		
		    <script>
		      var sheet = document.querySelector('google-sheets');
		
		      sheet.addEventListener('google-sheet-data', function(e) {
		       // this.spreadsheets - list of the user's spreadsheets
		       // this.tab - information on the tab that was fetched
		       // this.rows - cell row information for the tab that was fetched
		      });
		
		      sheet.addEventListener('error', function(e) {
		       // e.detail.response
		      });
		    </script>
		
		<b>Example</b> - `published` is a perf optimization and hints that the spreadsheet has been published (public):
		
		    <google-sheets key="0Anye-JMjUkZZdDBkMVluMEhZMmFGeHpYdDJJV1FBRWc" published></google-sheets>
		
		<b>Example</b> - leaving off the `key` returns as list of the user's spreadsheets.
		
		    <google-sheets client-id="..."></google-sheets>
		
		<b>Example</b> - show a list of Map markers, using data-binding features inside Polymer:
		
		    <template is="dom-bind">
		      <google-sheets
		        key="0Anye-JMjUkZZdDBkMVluMEhZMmFGeHpYdDJJV1FBRWc" tab-id="1" rows="{{rows}}"
		        client-id="...">
		      </google-sheets>
		      <google-map>
		        <google-map-marker latitude="{{gsx$lat.$t}}" longitude="{{gsx$lng.$t}}">
		      </google-map>
		    </template>
		
		<b>Example</b> - list a user's private spreadsheets. Authenticate with google-signin button.
		
		    <google-signin
		      client-id="1054047045356-j8pgqgls9vdef3rl09hapoicumbte0bo.apps.googleusercontent.com"
		      scopes="https://spreadsheets.google.com/feeds">
		    </google-signin>
		
		    <template is="dom-bind">
		      <google-sheets client-id="1054047045356-j8pgqgls9vdef3rl09hapoicumbte0bo.apps.googleusercontent.com"
		         key="1QMGizivw3UJ3-R9BFK7sfrXE0RL87dygk2C0RcuKoDY" tab-id="1"
		         spreadsheets="{{spreadsheets}}"></google-sheets>
		      <template is="dom-repeat" items="[[spreadsheets]]">
		        <p>{{item.title.$t}}</p>
		      </template>
		    </template>
		
		
	*/
	export interface GoogleSheets 
	{
	/*
	== EVENTS ==

	Event: 'google-sheet-data'
	Params: detail: Object, detail.data: Object, detail.type: string
Fired when the spreadsheet's cell information is available.

 
	*/

	
		/*
		A Google Developers client ID. Obtain from [console.developers.google.com](https://console.developers.google.com). Required for accessing a private spreadsheet. Optional if accessing a public spreadsheet.
		       
		*/
		clientId: string;
	
		/*
		The key of the spreadsheet. This can be found in the URL when viewing
		the document is Google Docs (e.g. `docs.google.com/spreadsheet/ccc?key=<KEY>`).
		
		Leaving off this attribute still returns a list of the users spreadsheets in the `spreadsheets` property.
		       
		*/
		key: string;
	
		/*
		The URL to open this spreadsheet in Google Sheets.
		       
		*/
		openInGoogleDocsUrl: string;
	
		/*
		A hint that the spreadsheet is published publicly in Google Docs. Used as a performance optimization.
		Make sure the sheet is also publicly viewable by anyone in the Share settings.
		
		
		*/
		published: boolean;
	
		/*
		If a spreadsheet `key` is specified, returns a list of cell row data.
		       
		*/
		rows: Array<any>;
	
		/*
		The fetched sheet corresponding to the `key` attribute.
		       
		*/
		sheet: Object;
	
		/*
		List of the user's spreadsheets. Shared across instances.
		       
		*/
		spreadsheets: Array<any>;
	
		/*
		Meta data about the particular tab that was retrieved for the spreadsheet.
		       
		*/
		tab: Object;
	
		/*
		Tab within a spreadsheet. For example, the first tab in a spreadsheet
		would be `tab-id="1"`.
		       
		*/
		tabId: number;
	

	

	}

}
