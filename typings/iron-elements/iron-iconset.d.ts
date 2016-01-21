
declare module iron {

	/* 
		
	*/
	export interface IronIconset 
	{
	

	
		/*
		Array of fully-qualified names of icons in this set.
		       
		*/
		iconNames: Array<any>;
	
		/*
		A space separated list of names corresponding to icons in the iconset
		image file. This list must be ordered the same as the icon images
		in the image file.
		       
		*/
		icons: string;
	
		/*
		The name of the iconset.
		       
		*/
		name: string;
	
		/*
		The size of an individual icon. Note that icons must be square.
		       
		*/
		size: number;
	
		/*
		The URL of the iconset image.
		       
		*/
		src: string;
	
		/*
		The width of the iconset image. This must only be specified if the
		icons are arranged into separate rows inside the image.
		
		
		*/
		width: number;
	

	
		/*
		Applies an icon to the given element as a css background image. This
		method does not size the element, and it's usually necessary to set
		the element's height and width so that the background image is visible.
		
		
		*/
		applyIcon(element: element, icon: (string|number), theme: string=, scale: number=);
	
		/*
		Remove an icon from the given element by undoing the changes effected
		by `applyIcon`.
		
		
		*/
		removeIcon(element: element);
	

	}

}
