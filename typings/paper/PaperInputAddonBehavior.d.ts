

module Polymer {
	/** 
		Use `Polymer.PaperInputAddonBehavior` to implement an add-on for `<paper-input-container>`. A
		add-on appears below the input, and may display information based on the input value and
		validity such as a character counter or an error message.
	*/
	export interface PaperInputAddonBehavior {
		/**
		The function called by `<paper-input-container>` when the input value or validity changes.
		*/
		update(state: {inputElement: (Node|undefined), value: (string|undefined), invalid: (boolean|undefined)});
	
	}
}
