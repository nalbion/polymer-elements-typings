
/// <reference path="../paper-elements/PaperButtonBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Floating Action Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)
		
		`paper-fab` is a floating action button. It contains an image placed in the center and
		comes in two sizes: regular size and a smaller size by applying the attribute `mini`. When
		the user touches the button, a ripple effect emanates from the center of the button.
		
		You may import `iron-icons` to use with this element, or provide a URL to a custom icon.
		See `iron-iconset` for more information about how to use a custom icon set.
		
		Example:
		
		    <link href="path/to/iron-icons/iron-icons.html" rel="import">
		
		    <paper-fab icon="add"></paper-fab>
		    <paper-fab mini icon="favorite"></paper-fab>
		    <paper-fab src="star.png"></paper-fab>
		
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-fab-background` | The background color of the button | `--accent-color`
		`--paper-fab-keyboard-focus-background` | The background color of the button when focused | `--paper-pink-900`
		`--paper-fab-disabled-background` | The background color of the button when it's disabled | `--paper-grey-300`
		`--paper-fab-disabled-text` | The text color of the button when it's disabled | `--paper-grey-500`
		`--paper-fab` | Mixin applied to the button | `{}`
		`--paper-fab-mini` | Mixin applied to a mini button | `{}`
		`--paper-fab-disabled` | Mixin applied to a disabled button | `{}`
		`--paper-fab-iron-icon` | Mixin applied to the iron-icon within the button | `{}`
		
		
	*/
	export interface PaperFab  extends Polymer.PaperButtonBehavior
	{
	

	
		/*
		Specifies the icon name or index in the set of icons available in
		the icon's icon set. If the icon property is specified,
		the src property should not be.
		
		
		*/
		icon: string;
	
		/*
		Set this to true to style this is a "mini" FAB.
		
		
		*/
		mini: boolean;
	
		/*
		The URL of an image for the icon. If the src property is specified,
		the icon property should not be.
		
		
		*/
		src: string;
	

	

	}

}
