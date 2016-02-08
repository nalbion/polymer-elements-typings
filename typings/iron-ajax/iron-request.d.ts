/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronRequest extends polymer.Base {
    /**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */
    xhr: XMLHttpRequest;
    /**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */
    response: any;
    /**
     * A reference to the status code, if the `xhr` has completely resolved.
     */
    status: number;
    /**
     * A reference to the status text, if the `xhr` has completely resolved.
     */
    statusText: string;
    /**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     *
     * @type {Promise}
     */
    completes: Promise;
    /**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */
    progress: Object;
    /**
     * Aborted will be true if an abort of the request is attempted.
     */
    aborted: boolean;
    /**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */
    errored: boolean;
    /**
     * TimedOut will be true if the XHR threw a timeout event.
     */
    timedOut: boolean;
    constructor();
    succeeded: boolean;
    /**
     * Sends an HTTP request to the server and returns the XHR object.
     *
     * @param {{
     *   url: string,
     *   method: (string|undefined),
     *   async: (boolean|undefined),
     *   body: (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
     *   headers: (Object|undefined),
     *   handleAs: (string|undefined),
     *   jsonPrefix: (string|undefined),
     *   withCredentials: (boolean|undefined)}} options -
     *     url The url to which the request is sent.
     *     method The HTTP method to use, default is GET.
     *     async By default, all requests are sent asynchronously. To send synchronous requests,
     *         set to true.
     *     body The content for the request body for POST method.
     *     headers HTTP request headers.
     *     handleAs The response type. Default is 'text'.
     *     withCredentials Whether or not to send credentials on the request. Default is false.
     *   timeout: (Number|undefined)
     * @return {Promise}
     */
    send(options?: any): any;
    /**
     * Attempts to parse the response body of the XHR. If parsing succeeds,
     * the value returned will be deserialized based on the `responseType`
     * set on the XHR.
     *
     * @return {*} The parsed response,
     * or undefined if there was an empty response or parsing failed.
     */
    parseResponse(): any;
    /**
     * Aborts the request.
     */
    abort(): void;
}
