

declare module iron {
	/* 
		`<iron-form>` is an HTML `<form>` element that can validate and submit any custom
		elements that implement `Polymer.IronFormElementBehavior`, as well as any
		native HTML elements.
		
		It supports both `get` and `post` methods, and uses an `iron-ajax` element to
		submit the form data to the action URL.
		
		  Example:
		
		    <form is="iron-form" id="form" method="post" action="/form/handler">
		      <paper-input name="name" label="name"></paper-input>
		      <input name="address">
		      ...
		    </form>
		
		By default, a native `<button>` element will submit this form. However, if you
		want to submit it from a custom element's click handler, you need to explicitly
		call the form's `submit` method.
		
		  Example:
		
		    <paper-button raised onclick="submitForm()">Submit</paper-button>
		
		    function submitForm() {
		      document.getElementById('form').submit();
		    }
		
		To customize the request sent to the server, you can listen to the `iron-form-presubmit`
		event, and modify the form's[`iron-ajax`](https://elements.polymer-project.org/elements/iron-ajax)
		object. However, If you want to not use `iron-ajax` at all, you can cancel the
		event and do your own custom submission:
		
		  Example of modifying the request, but still using the build-in form submission:
		
		    form.addEventListener('iron-form-presubmit', function() {
		      this.request.method = 'put';
		      this.request.params = someCustomParams;
		    });
		
		  Example of bypassing the build-in form submission:
		
		    form.addEventListener('iron-form-presubmit', function(event) {
		      event.preventDefault();
		      var firebase = new Firebase(form.getAttribute('action'));
		      firebase.set(form.serialize());
		    });
	*/
	export class IronForm 
	{
	/*	== EVENTS ==

	Event: 'iron-form-error'
	
Fired after the form is submitted and an error is received. An
IronRequestElement is included as the event.detail object.

 Event: 'iron-form-invalid'
	
Fired if the form cannot be submitted because it's invalid.

 Event: 'iron-form-presubmit'
	
Fired before the form is submitted.

 Event: 'iron-form-reset'
	
Fired after the form is reset.

 Event: 'iron-form-response'
	
Fired after the form is submitted and a response is received. An
IronRequestElement is included as the event.detail object.

 Event: 'iron-form-submit'
	
Fired after the form is submitted.

 
	*/
	
		/*
		Content type to use when sending data.
		*/
		contentType: string;	
		/*
		By default, the form will display the browser's native validation
		UI (i.e. popup bubbles and invalid styles on invalid fields). You can
		manually disable this; however, if you do, note that you will have to
		manually style invalid *native* HTML fields yourself, as you are
		explicitly preventing the native form from doing so.
		*/
		disableNativeValidationUi: Boolean;	
		/*
		HTTP request headers to send
		
		Note: setting a `Content-Type` header here will override the value
		specified by the `contentType` property of this element.
		*/
		headers: Object;	
		/*
		iron-ajax request object used to submit the form.
		*/
		request: Object;	
		/*
		Set the withCredentials flag when sending data.
		*/
		withCredentials: Boolean;	

	
		/*
		Returns a json object containing name/value pairs for all the registered
		custom components and native elements of the form. If there are elements
		with duplicate names, then their values will get aggregated into an
		array of values.
		*/
		serialize();
	
		/*
		Submits the form.
		*/
		submit();
	
		/*
		Validates all the required elements (custom and native) in the form.
		*/
		validate();
	
	}
}
