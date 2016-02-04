/// <reference path="../iron/IronMultiSelectableBehavior.d.ts"/>

declare module iron {
	/* 
		  `iron-selector` is an element which can be used to manage a list of elements
		  that can be selected.  Tapping on the item will make the item selected.  The `selected` indicates
		  which item is being selected.  The default is to use the index of the item.
		
		  Example:
		
		      <iron-selector selected="0">
		        <div>Item 1</div>
		        <div>Item 2</div>
		        <div>Item 3</div>
		      </iron-selector>
		
		  If you want to use the attribute value of an element for `selected` instead of the index,
		  set `attrForSelected` to the name of the attribute.  For example, if you want to select item by
		  `name`, set `attrForSelected` to `name`.
		
		  Example:
		
		      <iron-selector attr-for-selected="name" selected="foo">
		        <div name="foo">Foo</div>
		        <div name="bar">Bar</div>
		        <div name="zot">Zot</div>
		      </iron-selector>
		
		  `iron-selector` is not styled. Use the `iron-selected` CSS class to style the selected element.
		
		  Example:
		
		      <style>
		        .iron-selected {
		          background: #eee;
		        }
		      </style>
		
		      ...
		
		      <iron-selector selected="0">
		        <div>Item 1</div>
		        <div>Item 2</div>
		        <div>Item 3</div>
		      </iron-selector>
	*/
	export class IronSelector  extends Polymer.IronMultiSelectableBehavior
	{
	/*	== EVENTS ==

	Event: 'iron-activate'
	
Fired when iron-selector is activated (selected or deselected).
It is fired before the selected items are changed.
Cancel the event to abort selection.

 Event: 'iron-deselect'
	
Fired when an item is deselected

 Event: 'iron-items-changed'
	
Fired when the list of selectable items changes (e.g., items are
added or removed). The detail of the event is a list of mutation
records that describe what changed.

 Event: 'iron-select'
	
Fired when an item is selected

 
	*/
	
		/*
		The event that fires from items when they are selected. Selectable
		will listen for this event from items and update the selection state.
		Set to empty string to listen to no events.
		*/
		activateEvent: string;	
		/*
		If you want to use the attribute value of an element for `selected` instead of the index,
		set this to the name of the attribute.
		*/
		attrForSelected: string;	
		/*
		The list of items from which a selection can be made.
		*/
		items: Array<any>;	
		/*
		If true, multiple selections are allowed.
		*/
		multi: Boolean;	
		/*
		This is a CSS selector string.  If this is set, only items that match the CSS selector
		are selectable.
		*/
		selectable: string;	
		/*
		Gets or sets the selected element. The default is to use the index of the item.
		*/
		selected: string;	
		/*
		The attribute to set on elements when selected.
		*/
		selectedAttribute: string;	
		/*
		The class to set on elements when selected.
		*/
		selectedClass: string;	
		/*
		Returns the currently selected item.
		*/
		selectedItem: Object;	
		/*
		Returns an array of currently selected items.
		*/
		selectedItems: Array<any>;	
		/*
		Gets or sets the selected elements. This is used instead of `selected` when `multi`
		is true.
		*/
		selectedValues: Array<any>;	

	
		/*
		Returns the index of the given item.
		*/
		indexOf(item: Object);
	
		/*
		*/
		multiChanged(multi);
	
		/*
		Selects the given value. If the `multi` property is true, then the selected state of the
		`value` will be toggled; otherwise the `value` will be selected.
		*/
		select(value: string);
	
		/*
		Selects the next item.
		*/
		selectNext();
	
		/*
		Selects the previous item.
		*/
		selectPrevious();
	
	}
}
