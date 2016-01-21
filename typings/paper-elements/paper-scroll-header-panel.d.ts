
/// <reference path="../iron-elements/IronResizableBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Scrolling techniques](https://www.google.com/design/spec/patterns/scrolling-techniques.html)
		
		`paper-scroll-header-panel` contains a header section and a content section.  The
		header is initially on the top part of the view but it scrolls away with the
		rest of the scrollable content.  Upon scrolling slightly up at any point, the
		header scrolls back into view.  This saves screen space and allows users to
		access important controls by easily moving them back to the view.
		
		__Important:__ The `paper-scroll-header-panel` will not display if its parent does not have a height.
		
		Using [layout classes](https://www.polymer-project.org/1.0/docs/migration.html#layout-attributes) or custom properties, you can easily make the `paper-scroll-header-panel` fill the screen
		
		```html
		<body class="fullbleed layout vertical">
		  <paper-scroll-header-panel class="flex">
		    <paper-toolbar>
		      <div>Hello World!</div>
		    </paper-toolbar>
		  </paper-scroll-header-panel>
		</body>
		```
		
		or, if you would prefer to do it in CSS, just give `html`, `body`, and `paper-scroll-header-panel` a height of 100%:
		
		```css
		html, body {
		  height: 100%;
		  margin: 0;
		}
		paper-scroll-header-panel {
		  height: 100%;
		}
		```
		
		`paper-scroll-header-panel` works well with `paper-toolbar` but can use any element
		that represents a header by adding a `paper-header` class to it.
		
		```html
		<paper-scroll-header-panel>
		  <paper-toolbar>Header</paper-toolbar>
		  <div>Content goes here...</div>
		</paper-scroll-header-panel>
		```
		
		### Styling
		=======
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		--paper-scroll-header-panel-full-header | To change background for toolbar when it is at its full size | {}
		--paper-scroll-header-panel-condensed-header | To change the background for toolbar when it is condensed | {}
		--paper-scroll-header-container | To override or add container styles | {}
		
		
	*/
	export interface PaperScrollHeaderPanel  extends Polymer.IronResizableBehavior
	{
	/*
	== EVENTS ==

	Event: 'content-scroll'
	
Fired when the content has been scrolled.

 Event: 'paper-header-transform'
	
Fired when the header is transformed.

 
	*/

	
		/*
		The height of the header when it is condensed.
		
		By default, `condensedHeaderHeight` is 1/3 of `headerHeight` unless
		this is specified.
		       
		*/
		condensedHeaderHeight: number;
	
		/*
		If true, the header's height will condense to `condensedHeaderHeight`
		as the user scrolls down from the top of the content area.
		       
		*/
		condenses: boolean;
	
		/*
		Returns the content element.
		
		
		*/
		content;
	
		/*
		If true, the header is fixed to the top and never moves away.
		       
		*/
		fixed: boolean;
	
		/*
		Returns the header element.
		
		
		*/
		header;
	
		/*
		The height of the header when it is at its full size.
		
		By default, the height will be measured when it is ready.  If the height
		changes later the user needs to either set this value to reflect the
		new height or invoke `measureHeaderHeight()`.
		       
		*/
		headerHeight: number;
	
		/*
		The state of the header. Depending on the configuration and the `scrollTop` value,
		the header state could change to
		     Polymer.PaperScrollHeaderPanel.HEADER_STATE_EXPANDED
		     Polymer.PaperScrollHeaderPanel.HEADER_STATE_HIDDEN
		     Polymer.PaperScrollHeaderPanel.HEADER_STATE_CONDENSED
		     Polymer.PaperScrollHeaderPanel.HEADER_STATE_INTERPOLATED
		       
		*/
		headerState: number;
	
		/*
		If true, the condensed header is always shown and does not move away.
		       
		*/
		keepCondensedHeader: boolean;
	
		/*
		If true, no cross-fade transition from one background to another.
		       
		*/
		noDissolve: boolean;
	
		/*
		If true, the header doesn't slide back in when scrolling back up.
		       
		*/
		noReveal: boolean;
	
		/*
		By default, the top part of the header stays when the header is being
		condensed.  Set this to true if you want the top part of the header
		to be scrolled away.
		       
		*/
		scrollAwayTopbar: boolean;
	
		/*
		Returns the scrollable element.
		
		
		*/
		scroller;
	

	
		/*
		Condense the header.
		
		
		*/
		condense(smooth: boolean);
	
		/*
		Invoke this to tell `paper-scroll-header-panel` to re-measure the header's
		height.
		
		
		*/
		measureHeaderHeight();
	
		/*
		Scroll to a specific y coordinate.
		
		
		*/
		scroll(top: number, smooth: boolean);
	
		/*
		Scroll to the top of the content.
		
		
		*/
		scrollToTop(smooth: boolean);
	

	}

}
