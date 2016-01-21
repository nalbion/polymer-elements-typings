
/// <reference path="../paper-elements/PaperInkyFocusBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Icon toggles](https://www.google.com/design/spec/components/buttons.html#buttons-toggle-buttons)
		
		`paper-icon-button` is a button with an image placed at the center. When the user touches
		the button, a ripple effect emanates from the center of the button.
		
		`paper-icon-button` includes a default icon set.  Use `icon` to specify which icon
		from the icon set to use.
		
		    <paper-icon-button icon="menu"></paper-icon-button>
		
		See [`iron-iconset`](#iron-iconset) for more information about
		how to use a custom icon set.
		
		Example:
		
		    <link href="path/to/iron-icons/iron-icons.html" rel="import">
		
		    <paper-icon-button icon="favorite"></paper-icon-button>
		    <paper-icon-button src="star.png"></paper-icon-button>
		
		### Styling
		
		Style the button with CSS as you would a normal DOM element. If you are using the icons
		provided by `iron-icons`, they will inherit the foreground color of the button.
		
		    /* make a red "favorite" button 
		    <paper-icon-button icon="favorite" style="color: red;"></paper-icon-button>
		
		By default, the ripple is the same color as the foreground at 25% opacity. You may
		customize the color using the `--paper-icon-button-ink-color` custom property.
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-icon-button-disabled-text` | The color of the disabled button | `--disabled-text-color`
		`--paper-icon-button-ink-color` | Selected/focus ripple color | `--primary-text-color`
		`--paper-icon-button` | Mixin for a button | `{}`
		`--paper-icon-button-disabled` | Mixin for a disabled button | `{}`
		`--paper-icon-button-hover` | Mixin for button on hover | `{}`
		
		
	*/
	export interface PaperIconButton  extends Polymer.PaperInkyFocusBehavior
	{
	

	
		/*
		Specifies the alternate text for the button, for accessibility.
		         
		*/
		alt: string;
	
		/*
		Specifies the icon name or index in the set of icons available in
		the icon's icon set. If the icon property is specified,
		the src property should not be.
		         
		*/
		icon: string;
	
		/*
		The URL of an image for the icon. If the src property is specified,
		the icon property should not be.
		         
		*/
		src: string;
	

	

	}

}
