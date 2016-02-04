/// <reference path="../templatizer/Templatizer.d.ts"/>/// <reference path="../iron/IronResizableBehavior.d.ts"/>

declare module iron {
	/* 
		
		`iron-list` displays a virtual, 'infinite' list. The template inside
		the iron-list element represents the DOM to create for each list item.
		The `items` property specifies an array of list item data.
		
		For performance reasons, not every item in the list is rendered at once;
		instead a small subset of actual template elements *(enough to fill the viewport)*
		are rendered and reused as the user scrolls. As such, it is important that all
		state of the list template be bound to the model driving it, since the view may
		be reused with a new model at any time. Particularly, any state that may change
		as the result of a user interaction with the list item must be bound to the model
		to avoid view state inconsistency.
		
		__Important:__ `iron-list` must either be explicitly sized, or delegate scrolling to an
		explicitly sized parent. By "explicitly sized", we mean it either has an explicit
		CSS `height` property set via a class or inline style, or else is sized by other
		layout means (e.g. the `flex` or `fit` classes).
		
		### Template model
		
		List item templates should bind to template models of the following structure:
		
		    {
		      index: 0,     // data index for this item
		      item: {       // user data corresponding to items[index]
		        /* user item data  
		      }
		    }
		
		Alternatively, you can change the property name used as data index by changing the
		`indexAs` property. The `as` property defines the name of the variable to add to the binding
		scope for the array.
		
		For example, given the following `data` array:
		
		##### data.json
		
		```js
		[
		  {"name": "Bob"},
		  {"name": "Tim"},
		  {"name": "Mike"}
		]
		```
		
		The following code would render the list (note the name and checked properties are
		bound from the model object provided to the template scope):
		
		```html
		<template is="dom-bind">
		  <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
		  <iron-list items="[[data]]" as="item">
		    <template>
		      <div>
		        Name: <span>[[item.name]]</span>
		      </div>
		    </template>
		  </iron-list>
		</template>
		```
		
		### Styling
		
		Use the `--iron-list-items-container` mixin to style the container of items, e.g.
		
		```css
		iron-list {
		 --iron-list-items-container: {
		    margin: auto;
		  };
		}
		```
		
		### Resizing
		
		`iron-list` lays out the items when it receives a notification via the `iron-resize` event.
		This event is fired by any element that implements `IronResizableBehavior`.
		
		By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will trigger
		this event automatically. If you hide the list manually (e.g. you use `display: none`)
		you might want to implement `IronResizableBehavior` or fire this event manually right
		after the list became visible again. e.g.
		
		```js
		document.querySelector('iron-list').fire('iron-resize');
		```
		
		### When should `<iron-list>` be used?
		
		`iron-list` should be used when a page has significantly more DOM nodes than the ones
		visible on the screen. e.g. the page has 500 nodes, but only 20 are visible at the time.
		This is why we refer to it as a `virtual` list. In this case, a `dom-repeat` will still
		create 500 nodes which could slow down the web app, but `iron-list` will only create 20.
		
		However, having an `iron-list` does not mean that you can load all the data at once. 
		Say, you have a million records in the database, you want to split the data into pages
		so you can bring a page at the time. The page could contain 500 items, and iron-list
		will only render 20.
	*/
	export class IronList  extends Polymer.Templatizer,Polymer.IronResizableBehavior
	{
	
	
		/*
		The name of the variable to add to the binding scope for the array
		element associated with a given template instance.
		*/
		as: string;	
		/*
		Gets the index of the first visible item in the viewport.
		*/
		firstVisibleIndex: number;	
		/*
		The name of the variable to add to the binding scope with the index
		for the row.
		*/
		indexAs: string;	
		/*
		An array containing items determining how many instances of the template
		to stamp and that that each template instance should bind to.
		*/
		items: Array<any>;	
		/*
		When `true`, multiple items may be selected at once (in this case,
		`selected` is an array of currently selected items).  When `false`,
		only one item may be selected at a time.
		*/
		multiSelection: Boolean;	
		/*
		The name of the variable to add to the binding scope to indicate
		if the row is selected.
		*/
		selectedAs: string;	
		/*
		When `multiSelection` is false, this is the currently selected item, or `null`
		if no item is selected.
		*/
		selectedItem: Object;	
		/*
		When `multiSelection` is true, this is an array that contains the selected items.
		*/
		selectedItems: Object;	
		/*
		When true, tapping a row will select the item, placing its data model
		in the set of selected items retrievable via the selection property.
		
		Note that tapping focusable elements within the list item will not
		result in selection, since they are presumed to have their * own action.
		*/
		selectionEnabled: Boolean;	

	
		/*
		Clears the current selection state of the list.
		*/
		clearSelection();
	
		/*
		Deselects the given item list if it is already selected.
		*/
		deselectItem(item: (Object|number));
	
		/*
		Scroll to a specific item in the virtual list regardless
		of the physical items in the DOM tree.
		*/
		scrollToIndex(idx: number);
	
		/*
		Select the list item at the given index.
		*/
		selectItem(item: (Object|number));
	
		/*
		Select or deselect a given item depending on whether the item
		has already been selected.
		*/
		toggleSelectionForItem(item: (Object|number));
	
		/*
		Updates the size of an item.
		*/
		updateSizeForItem(item: (Object|number));
	
		/*
		Invoke this method if you dynamically update the viewport's
		size or CSS padding.
		*/
		updateViewportBoundaries();
	
	}
}
