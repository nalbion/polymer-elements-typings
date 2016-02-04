

declare module iron {
	/* 
		The `iron-iconset-svg` element allows users to define their own icon sets
		that contain svg icons. The svg icon elements should be children of the
		`iron-iconset-svg` element. Multiple icons should be given distinct id's.
		
		Using svg elements to create icons has a few advantages over traditional
		bitmap graphics like jpg or png. Icons that use svg are vector based so
		they are resolution independent and should look good on any device. They
		are stylable via css. Icons can be themed, colorized, and even animated.
		
		Example:
		
		    <iron-iconset-svg name="my-svg-icons" size="24">
		      <svg>
		        <defs>
		          <g id="shape">
		            <rect x="12" y="0" width="12" height="24" />
		            <circle cx="12" cy="12" r="12" />
		          </g>
		        </defs>
		      </svg>
		    </iron-iconset-svg>
		
		This will automatically register the icon set "my-svg-icons" to the iconset
		database.  To use these icons from within another element, make a
		`iron-iconset` element and call the `byId` method
		to retrieve a given iconset. To apply a particular icon inside an
		element use the `applyIcon` method. For example:
		
		    iconset.applyIcon(iconNode, 'car');
	*/
	export class IronIconsetSvg 
	{
	
	
		/*
		The name of the iconset.
		*/
		name: string;	
		/*
		The size of an individual icon. Note that icons must be square.
		*/
		size: Number;	

	
		/*
		Applies an icon to the given element.
		
		An svg icon is prepended to the element's shadowRoot if it exists,
		otherwise to the element itself.
		*/
		applyIcon(element: Element, iconName: string);
	
		/*
		Construct an array of all icon names in this iconset.
		*/
		getIconNames();
	
		/*
		Remove an icon from the given element by undoing the changes effected
		by `applyIcon`.
		*/
		removeIcon(element: Element);
	
	}
}
