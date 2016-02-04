/// <reference path="IronButtonState.d.ts"/>
/// <reference path="IronControlState.d.ts"/>
/// <reference path="PaperRippleBehavior.d.ts"/>

declare module Polymer {
	export interface PaperButtonBehavior extends Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior {
		/**
		The z-depth of this element, from 0-5. Setting to 0 will remove the
		shadow, and each increasing number greater than 0 will be "deeper"
		than the last.
		*/
		elevation: number;
	}	
}
