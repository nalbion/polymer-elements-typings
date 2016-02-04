/// <reference path="../paper/PaperInputAddonBehavior.d.ts"/>

declare module paper {
	/* 
		`<paper-input-char-counter>` is a character counter for use with `<paper-input-container>`. It
		shows the number of characters entered in the input and the max length if it is specified.
		
		    <paper-input-container>
		      <input is="iron-input" maxlength="20">
		      <paper-input-char-counter></paper-input-char-counter>
		    </paper-input-container>
		
		### Styling
		
		The following mixin is available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-input-char-counter` | Mixin applied to the element | `{}`
	*/
	export class PaperInputCharCounter  extends Polymer.PaperInputAddonBehavior
	{
	
	

	
		/*
		*/
		update(state);
	
	}
}
