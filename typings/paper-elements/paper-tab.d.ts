
/// <reference path="../iron-elements/IronControlState.d.ts"/>

/// <reference path="../iron-elements/IronButtonState.d.ts"/>

/// <reference path="../paper-elements/PaperRippleBehavior.d.ts"/>

declare module paper {

	/* 
		`paper-tab` is styled to look like a tab.  It should be used in conjunction with
		`paper-tabs`.
		
		Example:
		
		    <paper-tabs selected="0">
		      <paper-tab>TAB 1</paper-tab>
		      <paper-tab>TAB 2</paper-tab>
		      <paper-tab>TAB 3</paper-tab>
		    </paper-tabs>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-tab-ink` | Ink color | `--paper-yellow-a100`
		`--paper-tab` | Mixin applied to the tab | `{}`
		`--paper-tab-content` | Mixin applied to the tab content | `{}`
		`--paper-tab-content-unselected` | Mixin applied to the tab content when the tab is not selected | `{}`
		
		
	*/
	export interface PaperTab  extends Polymer.IronControlState,Polymer.IronButtonState,Polymer.PaperRippleBehavior
	{
	

	

	

	}

}
