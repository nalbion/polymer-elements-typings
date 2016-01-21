
/// <reference path="../iron-elements/IronFormElementBehavior.d.ts"/>

/// <reference path="../paper-elements/PaperInputBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Text fields](https://www.google.com/design/spec/components/text-fields.html)
		
		`<paper-input>` is a single-line text field with Material Design styling.
		
		    <paper-input label="Input label"></paper-input>
		
		It may include an optional error message or character counter.
		
		    <paper-input error-message="Invalid input!" label="Input label"></paper-input>
		    <paper-input char-counter label="Input label"></paper-input>
		
		It can also include custom prefix or suffix elements, which are displayed
		before or after the text input itself. In order for an element to be
		considered as a prefix, it must have the `prefix` attribute (and similarly
		for `suffix`).
		
		    <paper-input label="total">
		      <div prefix>$</div>
		      <paper-icon-button suffix icon="clear"></paper-icon-button>
		    </paper-input>
		
		A `paper-input` can use the native `type=search` or `type=file` features.
		However, since we can't control the native styling of the input (search icon,
		file button, date placeholder, etc.), in these cases the label will be
		automatically floated. The `placeholder` attribute can still be used for
		additional informational text.
		
		    <paper-input label="search!" type="search"
		        placeholder="search for cats" autosave="test" results="5">
		    </paper-input>
		
		See `Polymer.PaperInputBehavior` for more API docs.
		
		### Focus
		
		To focus a paper-input, you can call the native `focus()` method as long as the
		paper input has a tab index.
		
		### Styling
		
		See `Polymer.PaperInputContainer` for a list of custom properties used to
		style this element.
		
		
		
	*/
	export interface PaperInput  extends Polymer.IronFormElementBehavior,Polymer.PaperInputBehavior
	{
	/*
	== EVENTS ==

	Event: 'change'
	
Fired when the input changes due to user interaction.

 
	*/

	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `accept` property,
		used with type=file.
		       
		*/
		accept: string;
	
		/*
		Set this to specify the pattern allowed by `preventInvalidInput`. If
		you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `allowedPattern`
		property.
		       
		*/
		allowedPattern: string;
	
		/*
		Set to true to always float the label. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<paper-input-container>`'s `alwaysFloatLabel` property.
		       
		*/
		alwaysFloatLabel: boolean;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `autocapitalize` property.
		       
		*/
		autocapitalize: string;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `autocomplete` property.
		       
		*/
		autocomplete: string;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `autocorrect` property.
		       
		*/
		autocorrect: string;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `autofocus` property.
		       
		*/
		autofocus: boolean;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `autosave` property,
		used with type=search.
		       
		*/
		autosave: string;
	
		/*
		Set to true to auto-validate the input value. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<paper-input-container>`'s `autoValidate` property.
		       
		*/
		autoValidate: boolean;
	
		/*
		Set to true to show a character counter.
		       
		*/
		charCounter: boolean;
	
		/*
		Set to true to disable this input. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		both the `<paper-input-container>`'s and the input's `disabled` property.
		       
		*/
		disabled: boolean;
	
		/*
		The error message to display when the input is invalid. If you're using
		PaperInputBehavior to implement your own paper-input-like element,
		bind this to the `<paper-input-error>`'s content, if using.
		       
		*/
		errorMessage: string;
	
		/*
		Returns a reference to the input element.
		     
		*/
		inputElement;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `inputmode` property.
		       
		*/
		inputmode: string;
	
		/*
		Returns true if the value is invalid. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to both the
		`<paper-input-container>`'s and the input's `invalid` property.
		
		If `autoValidate` is true, the `invalid` attribute is managed automatically,
		which can clobber attempts to manage it manually.
		       
		*/
		invalid: boolean;
	
		/*
		*/
		keyBindings: Object;
	
		/*
		The label for this input. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		`<label>`'s content and `hidden` property, e.g.
		`<label hidden$="[[!label]]">[[label]]</label>` in your `template`
		       
		*/
		label: string;
	
		/*
		The datalist of the input (if any). This should match the id of an existing `<datalist>`.
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `list` property.
		       
		*/
		list: string;
	
		/*
		The maximum (numeric or date-time) input value.
		Can be a String (e.g. `"2000-1-1"`) or a Number (e.g. `2`).
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `max` property.
		       
		*/
		max: string;
	
		/*
		The maximum length of the input value.
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `maxlength` property.
		       
		*/
		maxlength: number;
	
		/*
		The minimum (numeric or date-time) input value.
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `min` property.
		       
		*/
		min: string;
	
		/*
		The minimum length of the input value.
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `minlength` property.
		       
		*/
		minlength: number;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the`<input is="iron-input">`'s `multiple` property,
		used with type=file.
		       
		*/
		multiple: boolean;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `name` property.
		       
		*/
		name: string;
	
		/*
		Set to true to disable the floating label. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<paper-input-container>`'s `noLabelFloat` property.
		       
		*/
		noLabelFloat: boolean;
	
		/*
		A pattern to validate the `input` with. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<input is="iron-input">`'s `pattern` property.
		       
		*/
		pattern: string;
	
		/*
		A placeholder string in addition to the label. If this is set, the label will always float.
		       
		*/
		placeholder: string;
	
		/*
		Set to true to prevent the user from entering invalid input. If you're
		using PaperInputBehavior to  implement your own paper-input-like element,
		bind this to `<input is="iron-input">`'s `preventInvalidInput` property.
		       
		*/
		preventInvalidInput: boolean;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `readonly` property.
		       
		*/
		readonly: boolean;
	
		/*
		Set to true to mark the input as required. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<input is="iron-input">`'s `required` property.
		       
		*/
		required: boolean;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `results` property,
		used with type=search.
		       
		*/
		results: number;
	
		/*
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `size` property.
		       
		*/
		size: number;
	
		/*
		Limits the numeric or date-time increments.
		If you're using PaperInputBehavior to implement your own paper-input-like
		element, bind this to the `<input is="iron-input">`'s `step` property.
		       
		*/
		step: string;
	
		/*
		The type of the input. The supported types are `text`, `number` and `password`.
		If you're using PaperInputBehavior to implement your own paper-input-like element,
		bind this to the `<input is="iron-input">`'s `type` property.
		       
		*/
		type: string;
	
		/*
		Name of the validator to use. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<input is="iron-input">`'s `validator` property.
		       
		*/
		validator: string;
	
		/*
		The value for this input. If you're using PaperInputBehavior to
		implement your own paper-input-like element, bind this to
		the `<input is="iron-input">`'s `bindValue`
		property, or the value property of your input that is `notify:true`.
		       
		*/
		value: string;
	

	
		/*
		Restores the cursor to its original position after updating the value.
		
		*/
		updateValueAndPreserveCaret(newValue: string);
	
		/*
		Validates the input element and sets an error style if needed.
		
		
		*/
		validate();
	

	}

}
