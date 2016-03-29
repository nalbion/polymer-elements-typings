/// <reference path="../../polymer-ts.d.ts" />
declare module polymer {
    class IronLabel extends polymer.Base {
        /**
          * An ID reference to another element that needs to be
          * labelled by this `iron-label` element.
          */
        for: string;
        attached(): void;
        ready(): void;
    }
}
