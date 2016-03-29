/// <reference path="../../polymer-ts.d.ts" />
/** @polymerBehavior */
declare module Polymer {
    interface FirebaseQueryBehavior {
        /**
         * A Firebase API location that references an accessible document.
         */
        location?: string;
        /**
         * Firebase Query object corresponding to `location`.
         */
        query?: Object;
        /**
         * If true, verbose debugging information will be printed to the console.
         */
        log?: boolean;
        created?(): any;
    }
}
