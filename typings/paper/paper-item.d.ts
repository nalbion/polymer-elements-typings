/// <reference path="../paper/PaperItemBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Lists](https://www.google.com/design/spec/components/lists.html)
		
		`<paper-item>` is an interactive list item. By default, it is a horizontal flexbox.
		
		    <paper-item>Item</paper-item>
		
		Use this element with `<paper-item-body>` to make Material Design styled two-line and three-line
		items.
		
		    <paper-item>
		      <paper-item-body two-line>
		        <div>Show your status</div>
		        <div secondary>Your status is visible to everyone</div>
		      </paper-item-body>
		      <iron-icon icon="warning"></iron-icon>
		    </paper-item>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property               | Description                                  | Default
		------------------------------|----------------------------------------------|----------
		`--paper-item-min-height`     | Minimum height of the item                   | `48px`
		`--paper-item`                | Mixin applied to the item                    | `{}`
		`--paper-item-selected-weight`| The font weight of a selected item           | `bold`
		`--paper-item-selected`       | Mixin applied to selected paper-items        | `{}`
		`--paper-item-disabled-color` | The color for disabled paper-items           | `--disabled-text-color`
		`--paper-item-disabled`       | Mixin applied to disabled paper-items        | `{}`
		`--paper-item-focused`        | Mixin applied to focused paper-items         | `{}`
		`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`
		
		### Accessibility
		
		This element has `role="listitem"` by default. Depending on usage, it may be more appropriate to set
		`role="menuitem"`, `role="menuitemcheckbox"` or `role="menuitemradio"`.
		
		    <paper-item role="menuitemcheckbox">
		      <paper-item-body>
		        Show your status
		      </paper-item-body>
		      <paper-checkbox></paper-checkbox>
		    </paper-item>
	*/
	export class PaperItem  extends Polymer.PaperItemBehavior
	{
	
	

	
	}
}