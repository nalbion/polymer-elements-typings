/// <reference path="../iron/IronButtonState.d.ts"/>/// <reference path="../iron/IronControlState.d.ts"/>/// <reference path="../iron/IronFormElementBehavior.d.ts"/>/// <reference path="../iron/IronValidatableBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Dropdown menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)
		
		`paper-dropdown-menu` is similar to a native browser select element.
		`paper-dropdown-menu` works with selectable content. The currently selected
		item is displayed in the control. If no item is selected, the `label` is
		displayed instead.
		
		The child element with the class `dropdown-content` will be used as the dropdown
		menu. It could be a `paper-menu` or element that triggers `iron-select` when
		selecting its children.
		
		Example:
		
		    <paper-dropdown-menu label="Your favourite pastry">
		      <paper-menu class="dropdown-content">
		        <paper-item>Croissant</paper-item>
		        <paper-item>Donut</paper-item>
		        <paper-item>Financier</paper-item>
		        <paper-item>Madeleine</paper-item>
		      </paper-menu>
		    </paper-dropdown-menu>
		
		This example renders a dropdown menu with 4 options.
		
		Similarly to using `iron-select`, `iron-deselect` events will cause the
		current selection of the `paper-dropdown-menu` to be cleared.
		
		### Styling
		
		The following custom properties and mixins are also available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
		`--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
		`--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
		`--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
		`--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
		`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`
		
		You can also use any of the `paper-input-container` and `paper-menu-button`
		style mixins and custom properties to style the internal input and menu button
		respectively.
	*/
	export class PaperDropdownMenu  extends Polymer.IronButtonState,Polymer.IronControlState,Polymer.IronFormElementBehavior,Polymer.IronValidatableBehavior
	{
	/*	== EVENTS ==

	Event: 'paper-dropdown-close'
	
Fired when the dropdown closes.

 Event: 'paper-dropdown-open'
	
Fired when the dropdown opens.

 
	*/
	
		/*
		Set to true to always float the label. Bind this to the
		`<paper-input-container>`'s `alwaysFloatLabel` property.
		*/
		alwaysFloatLabel: Boolean;	
		/*
		The content element that is contained by the dropdown menu, if any.
		*/
		contentElement;	
		/*
		The orientation against which to align the menu dropdown
		horizontally relative to the dropdown trigger.
		*/
		horizontalAlign: string;	
		/*
		*/
		keyBindings: Object;	
		/*
		The label for the dropdown.
		*/
		label: string;	
		/*
		Set to true to disable animations when opening and closing the
		dropdown.
		*/
		noAnimations: Boolean;	
		/*
		Set to true to disable the floating label. Bind this to the
		`<paper-input-container>`'s `noLabelFloat` property.
		*/
		noLabelFloat: Boolean;	
		/*
		True if the dropdown is open. Otherwise, false.
		*/
		opened: Boolean;	
		/*
		The placeholder for the dropdown.
		*/
		placeholder: string;	
		/*
		The last selected item. An item is selected if the dropdown menu has
		a child with class `dropdown-content`, and that child triggers an
		`iron-select` event with the selected `item` in the `detail`.
		*/
		selectedItem: Object;	
		/*
		The derived "label" of the currently selected item. This value
		is the `label` property on the selected item if set, or else the
		trimmed text content of the selected item.
		*/
		selectedItemLabel: string;	
		/*
		The value for this element that will be used when submitting in
		a form. It is read only, and will always have the same value
		as `selectedItemLabel`.
		*/
		value: string;	
		/*
		The orientation against which to align the menu dropdown
		vertically relative to the dropdown trigger.
		*/
		verticalAlign: string;	

	
		/*
		Hide the dropdown content.
		*/
		close();
	
		/*
		Show the dropdown content.
		*/
		open();
	
	}
}
