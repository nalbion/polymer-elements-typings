/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>/// <reference path="../iron/IronSelectableBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)
		
		`paper-radio-group` allows user to select at most one radio button from a set.
		Checking one radio button that belongs to a radio group unchecks any
		previously checked radio button within the same group. Use
		`selected` to get or set the selected radio button.
		
		The <paper-radio-buttons> inside the group must have the `name` attribute
		set.
		
		Example:
		
		    <paper-radio-group selected="small">
		      <paper-radio-button name="small">Small</paper-radio-button>
		      <paper-radio-button name="medium">Medium</paper-radio-button>
		      <paper-radio-button name="large">Large</paper-radio-button>
		    </paper-radio-group>
		
		Radio-button-groups can be made optional, and allow zero buttons to be selected:
		
		    <paper-radio-group selected="small" allow-empty-selection>
		      <paper-radio-button name="small">Small</paper-radio-button>
		      <paper-radio-button name="medium">Medium</paper-radio-button>
		      <paper-radio-button name="large">Large</paper-radio-button>
		    </paper-radio-group>
		
		See <a href="paper-radio-button">paper-radio-button</a> for more
		information about `paper-radio-button`.
	*/
	export class PaperRadioGroup  extends Polymer.IronA11yKeysBehavior,Polymer.IronSelectableBehavior
	{
	/*	== EVENTS ==

	Event: 'paper-radio-group-changed'
	
Fired when the radio group selection changes.

 
	*/
	
		/*
		If true, radio-buttons can be deselected
		*/
		allowEmptySelection: Boolean;	
		/*
		Overriden from Polymer.IronSelectableBehavior
		*/
		attrForSelected: string;	
		/*
		*/
		keyBindings: Object;	
		/*
		Overriden from Polymer.IronSelectableBehavior
		*/
		selectable: string;	
		/*
		Overriden from Polymer.IronSelectableBehavior
		*/
		selectedAttribute: string;	

	
		/*
		Selects the given value.
		*/
		select(value);
	
		/*
		Selects the next item. If the next item is disabled, then it is
		skipped, and the next item after it is selected.
		*/
		selectNext();
	
		/*
		Selects the previous item. If the previous item is disabled, then it is
		skipped, and its previous item is selected
		*/
		selectPrevious();
	
	}
}
