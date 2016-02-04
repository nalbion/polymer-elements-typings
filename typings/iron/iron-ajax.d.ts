

declare module iron {
	/* 
		The `iron-ajax` element exposes network request functionality.
		
		    <iron-ajax
		        auto
		        url="http://gdata.youtube.com/feeds/api/videos/"
		        params='{"alt":"json", "q":"chrome"}'
		        handle-as="json"
		        on-response="handleResponse"
		        debounce-duration="300"></iron-ajax>
		
		With `auto` set to `true`, the element performs a request whenever
		its `url`, `params` or `body` properties are changed. Automatically generated
		requests will be debounced in the case that multiple attributes are changed
		sequentially.
		
		Note: The `params` attribute must be double quoted JSON.
		
		You can trigger a request explicitly by calling `generateRequest` on the
		element.
	*/
	export class IronAjax 
	{
	/*	== EVENTS ==

	Event: 'error'
	
Fired when an error is received.

 Event: 'request'
	
Fired when a request is sent.

 Event: 'response'
	
Fired when a response is received.

 
	*/
	
		/*
		An Array of all in-flight requests originating from this iron-ajax
		element.
		*/
		activeRequests: Array<any>;	
		/*
		If true, automatically performs an Ajax request when either `url` or
		`params` changes.
		*/
		auto: Boolean;	
		/*
		Body content to send with the request, typically used with "POST"
		requests.
		
		If body is a string it will be sent unmodified.
		
		If Content-Type is set to a value listed below, then
		the body will be encoded accordingly.
		
		   * `content-type="application/json"`
		     * body is encoded like `{"foo":"bar baz","x":1}`
		   * `content-type="application/x-www-form-urlencoded"`
		     * body is encoded like `foo=bar+baz&x=1`
		
		Otherwise the body will be passed to the browser unmodified, and it
		will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
		*/
		body: Object;	
		/*
		Content type to use when sending data. If the `contentType` property
		is set and a `Content-Type` header is specified in the `headers`
		property, the `headers` property value will take precedence.
		*/
		contentType: string;	
		/*
		Length of time in milliseconds to debounce multiple automatically generated requests.
		*/
		debounceDuration: Number;	
		/*
		Specifies what data to store in the `response` property, and
		to deliver as `event.detail.response` in `response` events.
		
		One of:
		
		   `text`: uses `XHR.responseText`.
		
		   `xml`: uses `XHR.responseXML`.
		
		   `json`: uses `XHR.responseText` parsed as JSON.
		
		   `arraybuffer`: uses `XHR.response`.
		
		   `blob`: uses `XHR.response`.
		
		   `document`: uses `XHR.response`.
		*/
		handleAs: string;	
		/*
		HTTP request headers to send.
		
		Example:
		
		    <iron-ajax
		        auto
		        url="http://somesite.com"
		        headers='{"X-Requested-With": "XMLHttpRequest"}'
		        handle-as="json"></iron-ajax>
		
		Note: setting a `Content-Type` header here will override the value
		specified by the `contentType` property of this element.
		*/
		headers: Object;	
		/*
		Prefix to be stripped from a JSON response before parsing it.
		
		In order to prevent an attack using CSRF with Array responses
		(http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
		many backends will mitigate this by prefixing all JSON response bodies
		with a string that would be nonsensical to a JavaScript parser.
		*/
		jsonPrefix: string;	
		/*
		lastRequest's error, if any.
		*/
		lastError: Object;	
		/*
		The most recent request made by this iron-ajax element.
		*/
		lastRequest: Object;	
		/*
		lastRequest's response.
		
		Note that lastResponse and lastError are set when lastRequest finishes,
		so if loading is true, then lastResponse and lastError will correspond
		to the result of the previous request.
		
		The type of the response is determined by the value of `handleAs` at
		the time that the request was generated.
		*/
		lastResponse: Object;	
		/*
		True while lastRequest is in flight.
		*/
		loading: Boolean;	
		/*
		The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
		Default is 'GET'.
		*/
		method: string;	
		/*
		An object that contains query parameters to be appended to the
		specified `url` when generating a request. If you wish to set the body
		content when making a POST request, you should use the `body` property
		instead.
		*/
		params: Object;	
		/*
		The query string that should be appended to the `url`, serialized from
		the current value of `params`.
		*/
		queryString;	
		/*
		An object that maps header names to header values, first applying the
		the value of `Content-Type` and then overlaying the headers specified
		in the `headers` property.
		*/
		requestHeaders;	
		/*
		The `url` with query string (if `params` are specified), suitable for
		providing to an `iron-request` instance.
		*/
		requestUrl;	
		/*
		Toggle whether XHR is synchronous or asynchronous. Don't change this
		to true unless You Know What You Are Doing™.
		*/
		sync: Boolean;	
		/*
		Set the timeout flag on the request.
		*/
		timeout: Number;	
		/*
		The URL target of the request.
		*/
		url: string;	
		/*
		If true, error messages will automatically be logged to the console.
		*/
		verbose: Boolean;	
		/*
		Set the withCredentials flag on the request.
		*/
		withCredentials: Boolean;	

	
		/*
		Performs an AJAX request to the specified URL.
		*/
		generateRequest();
	
		/*
		Request options suitable for generating an `iron-request` instance based
		on the current state of the `iron-ajax` instance's properties.
		*/
		toRequestOptions();
	
	}
}
