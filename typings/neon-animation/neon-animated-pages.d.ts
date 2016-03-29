/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../neon-animation/neon-animation-behavior.d.ts"/>
/// <reference path="../iron-selector/iron-selectable.d.ts"/>
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts"/>

export declare class NeonAnimatedPages extends polymer.Base
    implements Polymer.IronResizableBehavior, Polymer.IronSelectableBehavior, Polymer.NeonAnimationRunnerBehavior
{
    activateEvent: string;
    animateInitialSelection: boolean;
}
