/// <reference path="../paper/PaperItemBehavior.d.ts"/>

declare module paper {
	/* 
		`<paper-icon-item>` is a convenience element to make an item with icon. It is an interactive list
		item with a fixed-width icon area, according to Material Design. This is useful if the icons are of
		varying widths, but you want the item bodies to line up. Use this like a `<paper-item>`. The child
		node with the attribute `item-icon` is placed in the icon area.
		
		    <paper-icon-item>
		      <iron-icon icon="favorite" item-icon></iron-icon>
		      Favorite
		    </paper-icon-item>
		    <paper-icon-item>
		      <div class="avatar" item-icon></div>
		      Avatar
		    </paper-icon-item>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property               | Description                                    | Default
		------------------------------|------------------------------------------------|----------
		`--paper-item-icon-width`     | Width of the icon area                         | `56px`
		`--paper-icon-item`           | Mixin applied to the item                      | `{}`
		`--paper-item-selected-weight`| The font weight of a selected item             | `bold`
		`--paper-item-selected`       | Mixin applied to selected paper-items                | `{}`
		`--paper-item-disabled-color` | The color for disabled paper-items             | `--disabled-text-color`
		`--paper-item-disabled`       | Mixin applied to disabled paper-items        | `{}`
		`--paper-item-focused`        | Mixin applied to focused paper-items         | `{}`
		`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`
	*/
	export class PaperIconItem  extends Polymer.PaperItemBehavior
	{
	
	

	
	}
}
