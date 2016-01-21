
/// <reference path="../iron-elements/IronResizableBehavior.d.ts"/>

declare module paper {

	/* 
		`<paper-badge>` is a circular text badge that is displayed on the top right
		corner of an element, representing a status or a notification. It will badge
		the anchor element specified in the `for` attribute, or, if that doesn't exist,
		centered to the parent node containing it.
		
		Badges can also contain an icon by adding the `icon` attribute and setting
		it to the id of the desired icon. Please note that you should still set the
		`label` attribute in order to keep the element accessible. Also note that you will need to import
		the `iron-iconset` that includes the icons you want to use. See [iron-icon](../iron-icon)
		for more information on how to import and use icon sets.
		
		Example:
		
		    <div style="display:inline-block">
		      <span>Inbox</span>
		      <paper-badge label="3"></paper-badge>
		    </div>
		
		    <div>
		      <paper-button id="btn">Status</paper-button>
		      <paper-badge icon="favorite" for="btn" label="favorite icon"></paper-badge>
		    </div>
		
		    <div>
		      <paper-icon-button id="account-box" icon="account-box" alt="account-box"></paper-icon-button>
		      <paper-badge icon="social:mood" for="account-box" label="mood icon"></paper-badge>
		    </div>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-badge-background` | The background color of the badge | `--accent-color`
		`--paper-badge-opacity` | The opacity of the badge | `1.0`
		`--paper-badge-text-color` | The color of the badge text | `white`
		`--paper-badge-width` | The width of the badge circle | `20px`
		`--paper-badge-height` | The height of the badge circle | `20px`
		`--paper-badge-margin-left` | Optional spacing added to the left of the badge. | `0px`
		`--paper-badge-margin-bottom` | Optional spacing added to the bottom of the badge. | `0px`
		`--paper-badge` | Mixin applied to the badge | `{}`
		
		
	*/
	export interface PaperBadge  extends Polymer.IronResizableBehavior
	{
	

	
		/*
		The id of the element that the badge is anchored to. This element
		must be a sibling of the badge.
		         
		*/
		for: string;
	
		/*
		An iron-icon ID. When given, the badge content will use an
		`<iron-icon>` element displaying the given icon ID rather than the
		label text. However, the label text will still be used for
		accessibility purposes.
		         
		*/
		icon: string;
	
		/*
		The label displayed in the badge. The label is centered, and ideally
		should have very few characters.
		         
		*/
		label: string;
	
		/*
		Returns the target element that this badge is anchored to. It is
		either the element given by the `for` attribute, or the immediate parent
		of the badge.
		       
		*/
		target;
	

	
		/*
		Repositions the badge relative to its anchor element. This is called
		automatically when the badge is attached or an `iron-resize` event is
		fired (for exmaple if the window has resized, or your target is a
		custom element that implements IronResizableBehavior).
		
		You should call this in all other cases when the achor's position
		might have changed (for example, if it's visibility has changed, or
		you've manually done a page re-layout).
		       
		*/
		updatePosition();
	

	}

}
