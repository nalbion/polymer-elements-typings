
declare module iron {

	/* 
		`<iron-swipeable-container>` is a container that allows any of its nested
		children (native or custom elements) to be swiped away. By default it supports
		a curved or horizontal transition, but the transition duration and properties
		can be customized.
		
		Example:
		
		    <iron-swipeable-container>
		      <div>I can be swiped</div>
		      <paper-card heading="Me too!"></paper-card>
		    </iron-swipeable-container>
		
		To disable swiping on individual children, you must give them the `.disable-swipe`
		class. Alternatively, to disable swiping on the whole container, you can use its
		`disable-swipe` attribute:
		
		    <iron-swipeable-container>
		      <div class="disable-swipe">I cannot be swiped be swiped</div>
		      <paper-card heading="But I can!"></paper-card>
		    </iron-swipeable-container>
		
		    <iron-swipeable-container disable-swipe>
		      <div>I cannot be swiped</div>
		      <paper-card heading="Me neither :("></paper-card>
		    </iron-swipeable-container>
		
		It is a good idea to disable text selection on any of the children that you
		want to be swiped:
		
		    .swipe {
		      -moz-user-select: none;
		      -ms-user-select: none;
		      -webkit-user-select: none;
		      user-select: none;
		      cursor: default;
		    }
		
		
	*/
	export interface IronSwipeableContainer 
	{
	/*
	== EVENTS ==

	Event: 'iron-swipe'
	
Fired when a child element is swiped away.

 
	*/

	
		/*
		If true, then the container will not allow swiping.
		       
		*/
		disabled: boolean;
	
		/*
		The ratio of the total animation distance after which the opacity
		transformation begins. For example, if the `widthRatio` is 1 and
		the `opacityRate` is 0.5, then the element needs to travel half its
		width before its opacity starts decreasing.
		       
		*/
		opacityRate: number;
	
		/*
		The style in which to swipe the card. Currently supported
		options are `curve | horizontal`. If left unspecified, the default
		is assumed to be `horizontal`.
		       
		*/
		swipeStyle: string;
	
		/*
		The CSS transition applied while swiping.
		       
		*/
		transition: string;
	
		/*
		The ratio of the width of the element that the translation animation
		should happen over. For example, if the `widthRatio` is 3, the
		animation will take place on a distance 3 times the width of the
		element being swiped.
		       
		*/
		widthRatio: number;
	

	

	}

}
