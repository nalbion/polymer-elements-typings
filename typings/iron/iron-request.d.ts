// <reference path="../../../../typings/promise/promise.d.ts"/>

declare module iron {
	/* 
		iron-request can be used to perform XMLHttpRequests.
		
		    <iron-request id="xhr"></iron-request>
		    ...
		    this.$.xhr.send({url: url, params: params});
	*/
	export class IronRequest extends HTMLElement {
		/*
		Aborted will be true if an abort of the request is attempted.
		*/
		aborted: Boolean;	
		/*
		A promise that resolves when the `xhr` response comes back, or rejects
		if there is an error before the `xhr` completes.
		*/
		completes: Promise.Ipromise;
		/*
		Errored will be true if the browser fired an error event from the
		XHR object (mainly network errors).
		*/
		errored: Boolean;	
		/*
		An object that contains progress information emitted by the XHR if
		available.
		*/
		progress: Object;	
		/*
		A reference to the parsed response body, if the `xhr` has completely
		resolved.
		*/
		response: any;	
		/*
		A reference to the status code, if the `xhr` has completely resolved.
		*/
		status: Number;	
		/*
		A reference to the status text, if the `xhr` has completely resolved.
		*/
		statusText: string;	
		/*
		Succeeded is true if the request succeeded. The request succeeded if it
		loaded without error, wasn't aborted, and the status code is ≥ 200, and
		< 300, or if the status code is 0.
		
		The status code 0 is accepted as a success because some schemes - e.g.
		file:// - don't provide status codes.
		*/
		succeeded;	
		/*
		TimedOut will be true if the XHR threw a timeout event.
		*/
		timedOut: Boolean;	
		/*
		A reference to the XMLHttpRequest instance used to generate the
		network request.
		*/
		xhr: XMLHttpRequest;	

	
		/*
		Aborts the request.
		*/
		abort();
	
		/*
		Attempts to parse the response body of the XHR. If parsing succeeds,
		the value returned will be deserialized based on the `responseType`
		set on the XHR.
		*/
		parseResponse();
	
		/*
		Sends an HTTP request to the server and returns the XHR object.
		*/
		send(options: {url: string, method?: (string), async?: (boolean), body?: (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|Object), headers?: Object, handleAs?: string, jsonPrefix?: string, withCredentials?: boolean});
	}
}
