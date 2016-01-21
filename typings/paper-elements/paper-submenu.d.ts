
/// <reference path="../iron-elements/IronControlState.d.ts"/>

declare module paper {

	/* 
		`<paper-submenu>` is a nested menu inside of a parent `<paper-menu>`. It
		consists of a trigger that expands or collapses another `<paper-menu>`:
		
		    <paper-menu>
		      <paper-submenu>
		        <paper-item class="menu-trigger">Topics</paper-item>
		        <paper-menu class="menu-content">
		          <paper-item>Topic 1</paper-item>
		          <paper-item>Topic 2</paper-item>
		          <paper-item>Topic 3</paper-item>
		        </paper-menu>
		      </paper-submenu>
		      <paper-submenu>
		        <paper-item class="menu-trigger">Faves</paper-item>
		        <paper-menu class="menu-content">
		          <paper-item>Fave 1</paper-item>
		          <paper-item>Fave 2</paper-item>
		        </paper-menu>
		      </paper-submenu>
		      <paper-submenu disabled>
		        <paper-item class="menu-trigger">Unavailable</paper-item>
		        <paper-menu class="menu-content">
		          <paper-item>Disabled 1</paper-item>
		          <paper-item>Disabled 2</paper-item>
		        </paper-menu>
		      </paper-submenu>
		    </paper-menu>
		
		Just like in `<paper-menu>`, the focused item is highlighted, and the selected
		item has bolded text. Please see the `<paper-menu>` docs for which attributes
		(such as `multi` and `selected`), and styling options are available for the
		`menu-content` menu.
		
		
	*/
	export interface PaperSubmenu  extends Polymer.IronControlState
	{
	/*
	== EVENTS ==

	Event: 'paper-submenu-close'
	
Fired when the submenu is closed.

 Event: 'paper-submenu-open'
	
Fired when the submenu is opened.

 
	*/

	
		/*
		Set opened to true to show the collapse element and to false to hide it.
		
		
		*/
		opened: boolean;
	

	
		/*
		Collapse the submenu content.
		       
		*/
		close();
	
		/*
		*/
		dettached();
	
		/*
		Expand the submenu content.
		       
		*/
		open();
	
		/*
		Toggle the submenu.
		       
		*/
		toggle();
	

	}

}
