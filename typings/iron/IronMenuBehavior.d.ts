/// <reference path="../iron/IronMultiSelectableBehavior.d.ts"/>
/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>


module Polymer {
	/** 
		`Polymer.IronMenuBehavior` implements accessible menu behavior.
	*/
	export interface IronMenuBehavior  extends Polymer.IronMultiSelectableBehavior,Polymer.IronA11yKeysBehavior
	{
	
	
		/**
		The attribute to use on menu items to look up the item title. Typing the first
		letter of an item when the menu is open focuses that item. If unset, `textContent`
		will be used.
		*/
		attrForItemTitle: string;
	
		/**
		Returns the currently focused item.
		*/
		focusedItem: Object;
	
		/**
		*/
		keyBindings: Object;
	

	
		/**
		Selects the given value. If the `multi` property is true, then the selected state of the
		`value` will be toggled; otherwise the `value` will be selected.
		*/
		select(value: string);
	
	}
}
