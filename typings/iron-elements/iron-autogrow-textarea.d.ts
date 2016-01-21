
/// <reference path="../iron-elements/IronFormElementBehavior.d.ts"/>

/// <reference path="../iron-elements/IronValidatableBehavior.d.ts"/>

/// <reference path="../iron-elements/IronControlState.d.ts"/>

declare module iron {

	/* 
		`iron-autogrow-textarea` is an element containing a textarea that grows in height as more
		lines of input are entered. Unless an explicit height or the `maxRows` property is set, it will
		never scroll.
		
		Example:
		
		    <iron-autogrow-textarea></iron-autogrow-textarea>
		
		Because the `textarea`'s `value` property is not observable, you should use
		this element's `bind-value` instead for imperative updates.
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--iron-autogrow-textarea` | Mixin applied to the textarea | `{}`
		
		
	*/
	export interface IronAutogrowTextarea  extends Polymer.IronFormElementBehavior,Polymer.IronValidatableBehavior,Polymer.IronControlState
	{
	

	
		/*
		Bound to the textarea's `autocomplete` attribute.
		       
		*/
		autocomplete: string;
	
		/*
		Bound to the textarea's `autofocus` attribute.
		       
		*/
		autofocus: boolean;
	
		/*
		Use this property instead of `value` for two-way data binding.
		
		
		*/
		bindValue: (string|number|undefined|null);
	
		/*
		Bound to the textarea's `inputmode` attribute.
		       
		*/
		inputmode: string;
	
		/*
		The maximum length of the input value.
		       
		*/
		maxlength: number;
	
		/*
		The maximum number of rows this element can grow to until it
		scrolls. 0 means no maximum.
		
		
		*/
		maxRows: number;
	
		/*
		Bound to the textarea's `name` attribute.
		       
		*/
		name: string;
	
		/*
		Bound to the textarea's `placeholder` attribute.
		       
		*/
		placeholder: string;
	
		/*
		Bound to the textarea's `readonly` attribute.
		       
		*/
		readonly: string;
	
		/*
		Set to true to mark the textarea as required.
		       
		*/
		required: boolean;
	
		/*
		The initial number of rows.
		
		
		*/
		rows: number;
	
		/*
		Returns textarea's selection end.
		
		*/
		selectionEnd;
	
		/*
		Sets the textarea's selection end.
		     
		*/
		selectionEnd;
	
		/*
		Returns textarea's selection start.
		
		*/
		selectionStart;
	
		/*
		Sets the textarea's selection start.
		     
		*/
		selectionStart;
	
		/*
		Returns the underlying textarea.
		
		*/
		textarea;
	
		/*
		The value for this input, same as `bindValue`
		       
		*/
		value: string;
	

	
		/*
		Returns true if `value` is valid. The validator provided in `validator`
		will be used first, if it exists; otherwise, the `textarea`'s validity
		is used.
		
		*/
		validate();
	

	}

}
