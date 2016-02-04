

module Polymer {
	/** 
	*/
	export interface IronSelectableBehavior
	{
	/*
	== EVENTS ==

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
	
		/**
		The event that fires from items when they are selected. Selectable
		will listen for this event from items and update the selection state.
		Set to empty string to listen to no events.
		*/
		activateEvent: string;
	
		/**
		If you want to use the attribute value of an element for `selected` instead of the index,
		set this to the name of the attribute.
		*/
		attrForSelected: string;
	
		/**
		The list of items from which a selection can be made.
		*/
		items: Array<any>;
	
		/**
		This is a CSS selector string.  If this is set, only items that match the CSS selector
		are selectable.
		*/
		selectable: string;
	
		/**
		Gets or sets the selected element. The default is to use the index of the item.
		*/
		selected: string;
	
		/**
		The attribute to set on elements when selected.
		*/
		selectedAttribute: string;
	
		/**
		The class to set on elements when selected.
		*/
		selectedClass: string;
	
		/**
		Returns the currently selected item.
		*/
		selectedItem: Object;
	

	
		/**
		Returns the index of the given item.
		*/
		indexOf(item: Object);
	
		/**
		Selects the given value.
		*/
		select(value: string);
	
		/**
		Selects the next item.
		*/
		selectNext();
	
		/**
		Selects the previous item.
		*/
		selectPrevious();
	
	}
}
