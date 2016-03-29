/// <reference path="../../polymer-ts.d.ts" />
export declare class IronForm extends polymer.Base {
    /**
     * Content type to use when sending data.
     */
    contentType: string;
    /**
     * By default, the form will display the browser's native validation
     * UI (i.e. popup bubbles and invalid styles on invalid fields). You can
     * manually disable this; however, if you do, note that you will have to
     * manually style invalid *native* HTML fields yourself, as you are
     * explicitly preventing the native form from doing so.
     */
    disableNativeValidationUi: boolean;
    /**
    * Set the withCredentials flag when sending data.
    */
    withCredentials: boolean;
    /**
    * HTTP request headers to send
    *
    * Note: setting a `Content-Type` header here will override the value
    * specified by the `contentType` property of this element.
    */
    headers: Object;
    /**
    * iron-ajax request object used to submit the form.
    */
    request: Object;
    ready(): void;
    /**
     * Submits the form.
     */
    submit(): void;
    /**
     * Returns a json object containing name/value pairs for all the registered
     * custom components and native elements of the form. If there are elements
     * with duplicate names, then their values will get aggregated into an
     * array of values.
     *
     * @return {!Object}
     */
    serialize(): {};
    /**
     * Validates all the required elements (custom and native) in the form.
     * @return {boolean} True if all the elements are valid.
     */
    validate(): boolean;
}
