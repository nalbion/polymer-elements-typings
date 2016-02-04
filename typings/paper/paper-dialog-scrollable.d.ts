

declare module paper {
	/* 
		Material design: [Dialogs](https://www.google.com/design/spec/components/dialogs.html)
		
		`paper-dialog-scrollable` implements a scrolling area used in a Material Design dialog. It shows
		a divider at the top and/or bottom indicating more content, depending on scroll position. Use this
		together with elements implementing `Polymer.PaperDialogBehavior`.
		
		    <paper-dialog-impl>
		      <h2>Header</h2>
		      <paper-dialog-scrollable>
		        Lorem ipsum...
		      </paper-dialog-scrollable>
		      <div class="buttons">
		        <paper-button>OK</paper-button>
		      </div>
		    </paper-dialog-impl>
		
		It shows a top divider after scrolling if it is not the first child in its parent container,
		indicating there is more content above. It shows a bottom divider if it is scrollable and it is not
		the last child in its parent container, indicating there is more content below. The bottom divider
		is hidden if it is scrolled to the bottom.
	*/
	export class PaperDialogScrollable 
	{
	
	
		/*
		The dialog element that implements `Polymer.PaperDialogBehavior` containing this element.
		*/
		dialogElement: Node;	
		/*
		Returns the scrolling element.
		*/
		scrollTarget;	

	
	}
}
