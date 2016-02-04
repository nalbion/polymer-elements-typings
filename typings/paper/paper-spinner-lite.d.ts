/// <reference path="../paper/PaperSpinnerBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Progress & activity](https://www.google.com/design/spec/components/progress-activity.html)
		
		Element providing a single color material design circular spinner.
		
		    <paper-spinner-lite active></paper-spinner-lite>
		
		The default spinner is blue. It can be customized to be a different color.
		
		### Accessibility
		
		Alt attribute should be set to provide adequate context for accessibility. If not provided,
		it defaults to 'loading'.
		Empty alt can be provided to mark the element as decorative if alternative content is provided
		in another form (e.g. a text block following the spinner).
		
		    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
	*/
	export class PaperSpinnerLite  extends Polymer.PaperSpinnerBehavior
	{
	
	
		/*
		Displays the spinner.
		*/
		active: Boolean;	
		/*
		Alternative text content for accessibility support.
		If alt is present, it will add an aria-label whose content matches alt when active.
		If alt is not present, it will default to 'loading' as the alt value.
		*/
		alt: string;	

	
	}
}
