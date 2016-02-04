/// <reference path="../paper/PaperSpinnerBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Progress & activity](https://www.google.com/design/spec/components/progress-activity.html)
		
		Element providing a multiple color material design circular spinner.
		
		    <paper-spinner active></paper-spinner>
		
		The default spinner cycles between four layers of colors; by default they are
		blue, red, yellow and green. It can be customized to cycle between four different
		colors. Use <paper-spinner-lite> for single color spinners.
		
		### Accessibility
		
		Alt attribute should be set to provide adequate context for accessibility. If not provided,
		it defaults to 'loading'.
		Empty alt can be provided to mark the element as decorative if alternative content is provided
		in another form (e.g. a text block following the spinner).
		
		    <paper-spinner alt="Loading contacts list" active></paper-spinner>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
		`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
		`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
		`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
	*/
	export class PaperSpinner  extends Polymer.PaperSpinnerBehavior
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
