/// <reference path="../paper/PaperInputAddonBehavior.d.ts"/>

declare module paper {
	/* 
		`<paper-input-error>` is an error message for use with `<paper-input-container>`. The error is
		displayed when the `<paper-input-container>` is `invalid`.
		
		    <paper-input-container>
		      <input is="iron-input" pattern="[0-9]*">
		      <paper-input-error>Only numbers are allowed!</paper-input-error>
		    </paper-input-container>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-input-container-invalid-color` | The foreground color of the error | `--google-red-500`
		`--paper-input-error`                   | Mixin applied to the error        | `{}`
	*/
	export class PaperInputError  extends Polymer.PaperInputAddonBehavior
	{
	
	
		/*
		True if the error is showing.
		*/
		invalid: Boolean;	

	
		/*
		*/
		update(state);
	
	}
}
