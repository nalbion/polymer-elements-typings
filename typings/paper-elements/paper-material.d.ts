
declare module paper {

	/* 
		Material design: [Cards](https://www.google.com/design/spec/components/cards.html)
		
		`paper-material` is a container that renders two shadows on top of each other to
		create the effect of a lifted piece of paper.
		
		Example:
		
		    <paper-material elevation="1">
		      ... content ...
		    </paper-material>
		
		
	*/
	export interface PaperMaterial 
	{
	

	
		/*
		Set this to true to animate the shadow when setting a new
		`elevation` value.
		
		
		*/
		animated: boolean;
	
		/*
		The z-depth of this element, from 0-5. Setting to 0 will remove the
		shadow, and each increasing number greater than 0 will be "deeper"
		than the last.
		
		
		*/
		elevation: number;
	

	

	}

}
