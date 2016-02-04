/// <reference path="../iron/IronA11yKeysBehavior.d.ts"/>/// <reference path="../iron/IronControlState.d.ts"/>

declare module paper {
	/* 
		Material design: [Dropdown buttons](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)
		
		`paper-menu-button` allows one to compose a designated "trigger" element with
		another element that represents "content", to create a dropdown menu that
		displays the "content" when the "trigger" is clicked.
		
		The child element with the class `dropdown-trigger` will be used as the
		"trigger" element. The child element with the class `dropdown-content` will be
		used as the "content" element.
		
		The `paper-menu-button` is sensitive to its content's `iron-select` events. If
		the "content" element triggers an `iron-select` event, the `paper-menu-button`
		will close automatically.
		
		Example:
		
		    <paper-menu-button>
		      <paper-icon-button icon="menu" class="dropdown-trigger"></paper-icon-button>
		      <paper-menu class="dropdown-content">
		        <paper-item>Share</paper-item>
		        <paper-item>Settings</paper-item>
		        <paper-item>Help</paper-item>
		      </paper-menu>
		    </paper-menu-button>
		
		### Styling
		
		The following custom properties and mixins are also available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-menu-button-dropdown-background` | Background color of the paper-menu-button dropdown | `#fff`
		`--paper-menu-button` | Mixin applied to the paper-menu-button | `{}`
		`--paper-menu-button-disabled` | Mixin applied to the paper-menu-button when disabled | `{}`
		`--paper-menu-button-dropdown` | Mixin applied to the paper-menu-button dropdown | `{}`
		`--paper-menu-button-content` | Mixin applied to the paper-menu-button content | `{}`
	*/
	export class PaperMenuButton  extends Polymer.IronA11yKeysBehavior,Polymer.IronControlState
	{
	/*	== EVENTS ==

	Event: 'paper-dropdown-close'
	
Fired when the dropdown closes.

 Event: 'paper-dropdown-open'
	
Fired when the dropdown opens.

 
	*/
	
		/*
		An animation config. If provided, this will be used to animate the
		closing of the dropdown.
		*/
		closeAnimationConfig: Object;	
		/*
		The content element that is contained by the menu button, if any.
		*/
		contentElement;	
		/*
		The orientation against which to align the menu dropdown
		horizontally relative to the dropdown trigger.
		*/
		horizontalAlign: string;	
		/*
		A pixel value that will be added to the position calculated for the
		given `horizontalAlign`. Use a negative value to offset to the
		left, or a positive value to offset to the right.
		*/
		horizontalOffset: Number;	
		/*
		Set to true to disable automatically closing the dropdown after
		a selection has been made.
		*/
		ignoreSelect: Boolean;	
		/*
		Set to true to disable animations when opening and closing the
		dropdown.
		*/
		noAnimations: Boolean;	
		/*
		An animation config. If provided, this will be used to animate the
		opening of the dropdown.
		*/
		openAnimationConfig: Object;	
		/*
		True if the content is currently displayed.
		*/
		opened: Boolean;	
		/*
		The orientation against which to align the menu dropdown
		vertically relative to the dropdown trigger.
		*/
		verticalAlign: string;	
		/*
		A pixel value that will be added to the position calculated for the
		given `verticalAlign`. Use a negative value to offset towards the
		top, or a positive value to offset towards the bottom.
		*/
		verticalOffset: Number;	

	
		/*
		Hide the dropdown content.
		*/
		close();
	
		/*
		Make the dropdown content appear as an overlay positioned relative
		to the dropdown trigger.
		*/
		open();
	
	}
}
