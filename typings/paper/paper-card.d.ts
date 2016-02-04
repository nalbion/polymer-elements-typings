

declare module paper {
	/* 
		Material design: [Cards](https://www.google.com/design/spec/components/cards.html)
		
		`paper-card` is a container with a drop shadow.
		
		Example:
		
		    <paper-card heading="Card Title">
		      <div class="card-content">Some content</div>
		      <div class="card-actions">
		        <paper-button>Some action</paper-button>
		      </div>
		    </paper-card>
		
		Example - top card image:
		
		    <paper-card heading="Card Title" image="/path/to/image.png">
		      ...
		    </paper-card>
		
		### Accessibility
		
		By default, the `aria-label` will be set to the value of the `heading` attribute.
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-card-background-color` | The background color of the card | `--primary-background-color`
		`--paper-card-header-color` | The color of the header text | `#000`
		`--paper-card-header` | Mixin applied to the card header section | `{}`
		`--paper-card-header-text` | Mixin applied to the title in the card header section | `{}`
		`--paper-card-header-image` | Mixin applied to the image in the card header section | `{}`
		`--paper-card-header-image-text` | Mixin applied to the text overlapping the image in the card header section | `{}`
		`--paper-card-content` | Mixin applied to the card content section| `{}`
		`--paper-card-actions` | Mixin applied to the card action section | `{}`
		`--paper-card` | Mixin applied to the card | `{}`
	*/
	export class PaperCard 
	{
	
	
		/*
		Read-only property used to pass down the `animatedShadow` value to
		the underlying paper-material style (since they have different names).
		*/
		animated: Boolean;	
		/*
		Set this to true to animate the card shadow when setting a new
		`z` value.
		*/
		animatedShadow: Boolean;	
		/*
		The z-depth of the card, from 0-5.
		*/
		elevation: Number;	
		/*
		When `preloadImage` is true, setting `fadeImage` to true will cause the
		image to fade into place.
		*/
		fadeImage: Boolean;	
		/*
		The title of the card.
		*/
		heading: string;	
		/*
		The url of the title image of the card.
		*/
		image: string;	
		/*
		When `true`, any change to the image url property will cause the
		`placeholder` image to be shown until the image is fully rendered.
		*/
		preloadImage: Boolean;	

	
	}
}
