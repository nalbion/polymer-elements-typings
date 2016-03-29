/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts"/>

export declare class IronA11yKeys extends polymer.Base implements Polymer.IronA11yKeysBehavior {
    target: Node;
    keys: string;
    attached(): void;
}
