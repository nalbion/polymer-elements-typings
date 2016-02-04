/// <reference path="../iron/IronResizableBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Navigation drawer](https://www.google.com/design/spec/patterns/navigation-drawer.html)
		
		`paper-drawer-panel` contains a drawer panel and a main panel.  The drawer
		and the main panel are side-by-side with drawer on the left.  When the browser
		window size is smaller than the `responsiveWidth`, `paper-drawer-panel`
		changes to narrow layout.  In narrow layout, the drawer will be stacked on top
		of the main panel.  The drawer will slide in/out to hide/reveal the main
		panel.
		
		Use the attribute `drawer` to indicate that the element is the drawer panel and
		`main` to indicate that the element is the main panel.
		
		Example:
		
		    <paper-drawer-panel>
		      <div drawer> Drawer panel... </div>
		      <div main> Main panel... </div>
		    </paper-drawer-panel>
		
		The drawer and the main panels are not scrollable.  You can set CSS overflow
		property on the elements to make them scrollable or use `paper-header-panel`.
		
		Example:
		
		    <paper-drawer-panel>
		      <paper-header-panel drawer>
		        <paper-toolbar></paper-toolbar>
		        <div> Drawer content... </div>
		      </paper-header-panel>
		      <paper-header-panel main>
		        <paper-toolbar></paper-toolbar>
		        <div> Main content... </div>
		      </paper-header-panel>
		    </paper-drawer-panel>
		
		An element that should toggle the drawer will automatically do so if it's
		given the `paper-drawer-toggle` attribute.  Also this element will automatically
		be hidden in wide layout.
		
		Example:
		
		    <paper-drawer-panel>
		      <paper-header-panel drawer>
		        <paper-toolbar>
		          <div>Application</div>
		        </paper-toolbar>
		        <div> Drawer content... </div>
		      </paper-header-panel>
		      <paper-header-panel main>
		        <paper-toolbar>
		          <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
		          <div>Title</div>
		        </paper-toolbar>
		        <div> Main content... </div>
		      </paper-header-panel>
		    </paper-drawer-panel>
		
		To position the drawer to the right, add `right-drawer` attribute.
		
		    <paper-drawer-panel right-drawer>
		      <div drawer> Drawer panel... </div>
		      <div main> Main panel... </div>
		    </paper-drawer-panel>
		
		### Styling
		
		To change the main container:
		
		    paper-drawer-panel {
		      --paper-drawer-panel-main-container: {
		        background-color: gray;
		      };
		    }
		
		To change the drawer container when it's in the left side:
		
		    paper-drawer-panel {
		      --paper-drawer-panel-left-drawer-container: {
		        background-color: white;
		      };
		    }
		
		To change the drawer container when it's in the right side:
		
		    paper-drawer-panel {
		      --paper-drawer-panel-right-drawer-container: {
		        background-color: white;
		      };
		    }
		
		To customize the scrim:
		
		    paper-drawer-panel {
		      --paper-drawer-panel-scrim: {
		        background-color: red;
		      };
		    }
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-drawer-panel-scrim-opacity` | Scrim opacity | 1
		`--paper-drawer-panel-drawer-container` | Mixin applied to drawer container | {}
		`--paper-drawer-panel-left-drawer-container` | Mixin applied to container when it's in the left side | {}
		`--paper-drawer-panel-main-container` | Mixin applied to main container | {}
		`--paper-drawer-panel-right-drawer-container` | Mixin applied to container when it's in the right side | {}
		`--paper-drawer-panel-scrim` | Mixin applied to scrim | {}
	*/
	export class PaperDrawerPanel  extends Polymer.IronResizableBehavior
	{
	/*	== EVENTS ==

	Event: 'iron-deselect {{item: Object}} detail -
    item: The panel that the event refers to.'
	
Fired when a panel is deselected.

Listening for this event is an alternative to observing changes in the `selected` attribute.
This event is fired both when a panel is deselected.

 Event: 'iron-select {{item: Object}} detail -
    item: The panel that the event refers to.'
	
Fired when the a panel is selected.

Listening for this event is an alternative to observing changes in the `selected` attribute.
This event is fired both when a panel is selected.

 Event: 'paper-responsive-change {{narrow: boolean}} detail -
    narrow: true if the panel is in narrow layout.'
	
Fired when the narrow layout changes.

 
	*/
	
		/*
		The panel to be selected when `paper-drawer-panel` changes to narrow
		layout.
		*/
		defaultSelected: string;	
		/*
		If true, swipe from the edge is disabled.
		*/
		disableEdgeSwipe: Boolean;	
		/*
		If true, swipe to open/close the drawer is disabled.
		*/
		disableSwipe: Boolean;	
		/*
		Whether the user is dragging the drawer interactively.
		*/
		dragging: Boolean;	
		/*
		The attribute on elements that should toggle the drawer on tap, also elements will
		automatically be hidden in wide layout.
		*/
		drawerToggleAttribute: string;	
		/*
		Width of the drawer panel.
		*/
		drawerWidth: string;	
		/*
		How many pixels on the side of the screen are sensitive to edge
		swipes and peek.
		*/
		edgeSwipeSensitivity: Number;	
		/*
		If true, ignore `responsiveWidth` setting and force the narrow layout.
		*/
		forceNarrow: Boolean;	
		/*
		Whether the browser has support for the transform CSS property.
		*/
		hasTransform: Boolean;	
		/*
		Whether the browser has support for the will-change CSS property.
		*/
		hasWillChange: Boolean;	
		/*
		Returns true if the panel is in narrow layout.  This is useful if you
		need to show/hide elements based on the layout.
		*/
		narrow: Boolean;	
		/*
		Whether the drawer is peeking out from the edge.
		*/
		peeking: Boolean;	
		/*
		Max-width when the panel changes to narrow layout.
		*/
		responsiveWidth: string;	
		/*
		If true, position the drawer to the right.
		*/
		rightDrawer: Boolean;	
		/*
		The panel that is being selected. `drawer` for the drawer panel and
		`main` for the main panel.
		*/
		selected: string;	

	
		/*
		Closes the drawer.
		*/
		closeDrawer();
	
		/*
		Opens the drawer.
		*/
		openDrawer();
	
		/*
		Toggles the panel open and closed.
		*/
		togglePanel();
	
	}
}
