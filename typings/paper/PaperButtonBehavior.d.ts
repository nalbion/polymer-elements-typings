/// <reference path="../iron/IronButtonState.d.ts"/>
/// <reference path="../iron/IronControlState.d.ts"/>
/// <reference path="../paper/PaperRippleBehavior.d.ts"/>


module Polymer {
	export interface PaperButtonBehavior
		extends Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior
	{
		/**
		The z-depth of this element, from 0-5. Setting to 0 will remove the
		shadow, and each increasing number greater than 0 will be "deeper"
		than the last.
		*/
		elevation: number;
	}
}
